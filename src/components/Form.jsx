//event handling practice

import React, { useState } from 'react';
import Input from './Input'

function Form(){
    var [headingText, setHeaderText] = useState("Hello");
    var [isMouseOver, setMouseOver] = useState(false);

    function click(){
        setHeaderText("Submitted");
    }

    function hover(){
        setMouseOver(true);
    }
    
    function mouseOut(){
        setMouseOver(false);
    }

    return(
        <div style={{display: "flex", flexDirection: 'column'}}>
            <h1>{headingText}</h1>
            <Input placeholder="username" type="text" />
            <button style={{backgroundColor: isMouseOver ? "black" : "#2ec2b0"}} onClick={click} onMouseOver={hover} onMouseOut={mouseOut} >Submit</button>
        </div>
    );
}

export default Form;