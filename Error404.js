import React from "react";
import PageFactory from "../PageFactory";
import Page from "../components/Page";

class ThisPage extends React.Component {
    render() {
        return (
            <Page>
                <h1>404 File Not Found</h1>
            </Page>
        );
    }
}

PageFactory.register404(ThisPage);
