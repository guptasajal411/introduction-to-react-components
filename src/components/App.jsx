import React from 'react';
import Avatar from './Avatar';
import Heading from './Heading';
import Time from './Time';
import List from './List';
import {createCard} from './Card';
import contacts from '../contacts'
import Emojipedia from './Emojipedia';
import Login from './Login';
import "./styles.css"

var condition = false;

function App(){
    return(
        <div>
            <Avatar imgURL="https://github.com/guptasajal411.png" />
            <Heading />
            <Time />
            <List />
            {contacts.map(createCard)}
            <Emojipedia />
            { condition === true ? <p>You are logged in!</p> : <Login /> }
        </div>
    );
}

export default App;