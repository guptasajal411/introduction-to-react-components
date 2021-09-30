import React from 'react';
import Avatar from './Avatar';
import Heading from './Heading';
import Time from './Time';
import List from './List';
import {createCard} from './Card';
import contacts from '../contacts'
import Emojipedia from './Emojipedia';
import Login from './Login';
import Register from './Register';
import Counter from './Counter';
import TimeHook from './TimeHook'
import AutoTimeHook from './AutoTimeHook'
import Form from './Form'
import "./styles.css"

var isRegistered = true;

function App(){
    return(
        <div>
            <Avatar imgURL="https://github.com/guptasajal411.png" />
            <hr />
            <Heading />
            <hr />
            <Time />
            <hr />
            <List />
            <hr />
            {contacts.map(createCard)}
            <hr />
            <Emojipedia />
            <hr />
            { isRegistered ? <Login /> : <Register /> }
            <hr />
            <Counter />
            <hr />
            <TimeHook />
            <hr />
            <AutoTimeHook />
            <hr />
            <Form />
            <hr />
        </div>
    );
}

export default App;