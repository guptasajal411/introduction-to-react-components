import React from 'react';
import Avatar from './Avatar';
import Heading from './Heading';
import Time from './Time';
import List from './List';
import Card, {createCard} from './Card';
import contacts from '../contacts'
import Emojipedia from './Emojipedia';
import "./styles.css"

function App(){
    return(
        <div>
            <Avatar imgURL="https://github.com/guptasajal411.png" />
            <Heading />
            <Time />
            <List />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;