import React from 'react';
import Input from './Input';
import Button from './Button';

var center = {
    display: 'flex',
    flexDirection: 'column'
}

function Login(){
    return(
        <div style={center}>
            <h1>Conditional Rendering</h1>
            <h2>Login</h2>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button text="Login!" />
            <code>Change isRegistered in App.js to false for rendering the register component</code>
        </div>
    );
}

export default Login;