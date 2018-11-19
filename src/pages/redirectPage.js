import React from "react";
import Header from "../presentational/header";
import Paragraph from "../presentational/paragraph";
import Button from "../presentational/button";
import { Link } from "react-router-dom"

const redirectPage = () => {
    const divStyles = {
        height: "100vh",
        width: "100vw"
    }
    return(
        <div style={divStyles}>
            <Header>Thanks for submitting an issue</Header>
            <Paragraph>You submitting this issue to us helps us make our app better <br/> seriously thanks for the help.</Paragraph>
            <Paragraph>Feel free to submit another issue if you have another down below! </Paragraph>    
            <Link to="/">
                <Button width="30" height="5" submittable="true">Click me to submit another!</Button>
            </Link>
        </div>
    )
}

export default redirectPage