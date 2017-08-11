import React from "react";
import {Parallax, ParallaxImage} from "./Parallax";
import Header from "../content/meta/Header";
import "./HeaderImage.css";

export default class HeaderImage extends React.Component {
    render() {
        return (
            <div className="header-image">
                <Parallax>
                    {Header.map(props => (
                        <ParallaxImage {... props} />
                    ))}
                </Parallax>
            </div>
        );
    }
}
