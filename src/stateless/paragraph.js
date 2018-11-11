import React from "react";

const Paragraph = (props) => {
    const pStyle = {
        width: "100%",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontSize: "1.5rem",
        color: "white",
        boxSizing: "border-box",
        paddingTop: "1rem",
        margin: "0"
    }
    return <p style = {pStyle}>{props.children}</p>
}

export default Paragraph;