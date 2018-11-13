import React from "react";
import defaults from "../helpers/fontDefaults"
import Aux from "../helpers/auxiliary"
//Button element accepts children, height, and width. Width in percent, height in rem
const Button = (props) => {
    const width = props.width;
    const height = props.height;

    const style = {
        width: `${width}%`,
        marginLeft: `${((100-width)/2)}%`,
        marginTop: "4rem",
        marginBottom: "6rem",
        height: `${height}rem`,
        fontFamily: defaults.font,
        fontSize: "1rem",
        color: "black",
        backgroundColor: "#BEE9E8",
        borderRadius: "10px"
    }
    
    return( 
        <Aux>
            <input type="submit" value={props.children} style={style} onClick={props.onClick}></input>
        </Aux>
        )
}

export default Button;