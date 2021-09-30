import React from 'react';
import contacts from '../contacts'
import Heading from './Heading';
import Time from './Time';
import List from './List';
import Card from './Card';
import Avatar from './Avatar';
import "./styles.css"

function createCard(contact){
    return(
        <Card
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    );
}

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