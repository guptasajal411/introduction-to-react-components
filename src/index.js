var React = require('react');
var ReactDOM = require('react-dom');

function Heading(){ // component functions are conventionally named with Pascal Case
    return <h1>Hello, I am Sajal!</h1>
}

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