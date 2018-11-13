import React from "react";
import defaults from "../helpers/fontDefaults"

const Paragraph = (props) => {
    const pStyle = {
        width: "100%",
        textAlign: "center",
        fontFamily: defaults.font,
        fontSize: "1.5rem",
        color: defaults.textColor,
        boxSizing: "border-box",
        paddingTop: "1rem",
        margin: "0"
    }
    return <p style = {pStyle}>{props.children}</p>
}

export default Paragraph;