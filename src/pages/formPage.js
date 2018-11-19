import React from "react";
import Header from "../presentational/header";
import Paragraph from "../presentational/paragraph";
import Form from "../container/Form";
import Aux from "../helpers/auxiliary"

const formPage = () => {
    return(
        <Aux>
            <Header>experiencing issues?</Header>
            <Paragraph>We're sorry to hear that, <br/>please let us know about it below &darr;</Paragraph>
            <Form></Form>
        </Aux>
    )
}

export default formPage