import React from "react";
import defaults from "../helpers/fontDefaults"
import Aux from "../helpers/auxiliary"
//Button element accepts submittable, children, height, and width. Width in percent, height in rem. Submittable determines button styles.
const Button = (props) => {
    const width = props.width;
    const height = props.height;

    //
    const submittable = props.submittable;


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

    //if the form is submittable or not, the button will either be clickable or non-clickable
    if(submittable){
        style.cursor = "pointer"
    } else {
        style.cursor = "not-allowed"
    }



    
    return( 
        <Aux>
            <button type="submit" style={style} onClick={props.onClick} disabled={!submittable}>{props.children}</button>
        </Aux>
        )
}

export default Button;