import React from "react";
import "./Parallax.css";

export class ParallaxImage extends React.Component {
    render() {
        return (
            <img className="parallax-image" src={this.props.src} alt="" style={{
                "bottom": (this.props.y + this.props.z * this.props.getState().y) + "%",
                "left": (this.props.x + this.props.z * this.props.getState().x) + "%",
                "width": this.props.width + "px",
                "height": this.props.height + "px",
                "marginLeft": "-" + (this.props.width / 2) + "px",
                "marginBottom": "-" + (this.props.height / 2) + "px"
            }} />
        );
    }
}

export class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "x": 0,
            "y": 0
        };
        this.getState = this.getState.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        document.body.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
        document.body.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove(ev) {
        this.setState({
            "x": 0.5 - ev.clientX / document.documentElement.clientWidth,
            "y": ev.clientY / document.documentElement.clientHeight - 0.5
        });
    }

    getState() {
        return this.state;
    }

    render() {
        return (
            <div className="parallax">
                {React.Children.map(this.props.children, child => React.cloneElement(child, {
                    "getState": this.getState
                }))}
            </div>
        );
    }
}
