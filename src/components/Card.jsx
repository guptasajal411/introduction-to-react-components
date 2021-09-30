import React from 'react';
import Avatar from './Avatar'

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

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL}/>
            </div>
            <div className="bottom">
                <p className="info">{props.phone}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
export {createCard};