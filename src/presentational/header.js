import React from "react";

const Header = (props) => {
    const h1Style = {
        width: "100%",
        height: `${props.height}`,
        textAlign: "center",
        fontFamily: "Open Sans",
        fontSize: "4rem",
        color: "white",
        boxSizing: "border-box",
        paddingTop: "1rem",
        margin: "0"
    }

    return  <h1 style={h1Style}>{props.children}</h1>
}


export default Header