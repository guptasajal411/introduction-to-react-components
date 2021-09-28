import React from 'react';

var date = new Date();
var hour = date.getHours();
var welcomeMessage;

if (hour >= 6 && hour <= 12){
    welcomeMessage = "Good Morning";
    var customStyle = {
        color: "red"
    }
} else if (hour > 12 && hour <= 18){
    welcomeMessage = "Good Afternoon"
    var customStyle = {
        color: "green"
    }
} else if (hour > 18 && hour <= 24){
    welcomeMessage = "Good Evening"
    var customStyle = {
        color: "orange"
    }
} else {
    welcomeMessage = "Good Night"
    var customStyle = {
        color: "blue"
    }
}

function Time(){
    return(
        <p style={customStyle}>{welcomeMessage}, The current hour of the day is: {hour}</p>
    );
}

export default Time;