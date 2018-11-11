import React from "react";
import Aux from "../helpers/auxiliary"

const Input = (props) => {
    const width = props.width;
    const height = props.height;

    const labelStyle = {
        marginLeft: `${(100 - width)/2}%`,
        fontFamily: "Open Sans",
        fontSize: "2rem",
        color: "white"
    }

    const inputStyle = {
        borderRadius: "10px",
        width: `${width}%`,
        marginLeft: `${(100 - width)/2}%`,
        fontFamily: "Open Sans",
        fontSize: "3rem",
        color: "black",
        boxSizing: "content-box",
        overflow: "hidden",
        boxShadow: "1px 1px 5px black"
    }
    return(
        <Aux>
            <label style={labelStyle}>{props.children}</label><br/>
            <textArea type="text" rows={height} key={props.children} style={inputStyle}></textArea>
        </Aux>
        
    );

}

export default Input;