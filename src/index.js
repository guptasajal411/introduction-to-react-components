import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading'

ReactDOM.render(
    <div>
        <Heading />
        <ul>
            <li>Full Stack Web Developer</li>
            <li>Web Lead @ GeeksforGeeks VIT Bhopal</li>
            <li>CS Sophomore @ VIT Bhopal</li>
        </ul>
    </div>,
    document.querySelector("#root")
);