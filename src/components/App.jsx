import React from 'react';
import contacts from './contacts'
import Heading from './Heading';
import Time from './Time';
import List from './List';
import Card from './Card';

function App(){
    return(
        <div>
            <Heading />
            <Time />
            <List />
            <Card name={contacts[0].name} imgURL={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
            <Card name={contacts[1].name} imgURL={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
            <Card name={contacts[2].name} imgURL={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} />
        </div>
    );
}

export default App;