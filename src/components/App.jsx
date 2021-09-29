import React from 'react';
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
            <Card name="Aditya" description="Adityas description" />
            <Card name="Akshat" description="Akshats description" />
            <Card name="Gaurav" description="Gaurav's description" />
            <Card name="Arpit" description="Arpits description" />
        </div>
    );
}

export default App;