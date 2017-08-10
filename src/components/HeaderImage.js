import React from "react";
import {Parallax, ParallaxImage} from "./Parallax";
import "./HeaderImage.css";

export class HeaderFactory {
    static register(src, x, y, z, width, height) {
        HeaderFactory.images.push(<ParallaxImage src={src} x={x} y={y} z={z} width={width} height={height} />);
    }
}

HeaderFactory.images = [];

export default class HeaderImage extends React.Component {
    render() {
        return (
            <div className="header-image">
                <Parallax>
                    {HeaderFactory.images}
                </Parallax>
            </div>
        );
    }
}
