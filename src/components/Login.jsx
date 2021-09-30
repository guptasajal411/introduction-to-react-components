import React from 'react';
import Input from './Input';
import Button from './Button';

function Login(){
    return(
        <div>
            <h1>Conditional Rendering</h1>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button text="Login" />
        </div>
    );
}

export default Login;