import React from 'react';

function Card(props){
    return(
        <div>
            <img src="https://picsum.photos/300" />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <hr />
        </div>
    );
}

export default Card;