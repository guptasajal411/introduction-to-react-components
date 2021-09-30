import React from 'react'
import Input from './Input'
import Button from './Button'

var center = {
    display: 'flex',
    flexDirection: 'column'
}

function Register(){
    return(
        <div style={center}>
            <h1>Conditional Rendering</h1>
            <h2>Register</h2>
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="Password" />
            <Input placeholder="Confirm password" type="Password" />
            <Button text="Register!" />
            <code>Change isRegistered in App.js to true for rendering the login component</code>
        </div>
    );
}

export default Register;