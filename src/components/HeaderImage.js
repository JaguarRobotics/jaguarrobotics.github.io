import React from "react";
import {Parallax, ParallaxImage} from "./Parallax";
import person from "./person.png";
import robot from "./robot.png";
import "./HeaderImage.css";

export default class HeaderImage extends React.Component {
    render() {
        return (
            <div className="header-image">
                <Parallax>
                    <ParallaxImage src={person} x={30} y={50} z={50} width={100} height={150} />
                    <ParallaxImage src={person} x={70} y={50} z={50} width={100} height={150} />
                    <ParallaxImage src={robot} x={50} y={20} z={100} width={150} height={150} />
                </Parallax>
            </div>
        );
    }
}
