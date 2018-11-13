import React from "react";
import Aux from "../helpers/auxiliary"
import defaults from "../helpers/fontDefaults"

const FormElement = (props) => {
    const width = props.width;

    //using width, we can set center the element using marginLeft
    const labelStyle = {
        marginLeft: `${(100 - width)/2}%`,
        fontFamily: defaults.font,
        fontSize: "2rem",
        color: defaults.textColor
    }

    const textAreaStyle = {
        borderRadius: "10px",
        width: `${width}%`,
        marginLeft: `${(100 - width)/2}%`,
        marginBottom: "1rem",
        fontFamily: defaults.font,
        fontSize: "3rem",
        color: "black",
        boxSizing: "content-box",
        overflow: "hidden",
        boxShadow: "1px 1px 5px black"
    }
    return(
        <Aux>
            <label style={labelStyle}>{props.children}</label><br/>
            <textarea type="text" {...props} style={textAreaStyle}></textarea>
        </Aux>
        
    );

}

export default FormElement;