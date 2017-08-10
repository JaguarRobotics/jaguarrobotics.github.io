import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class Page extends React.Component {
    render() {
        return (
            <main>
                <NavBar />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </main>
        );
    }
}
