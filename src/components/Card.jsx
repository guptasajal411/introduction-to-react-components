import React from 'react';

function Card(props){
    return(
        <div>
            <img src="https://picsum.photos/300" />
            {/* <p>{props.name}</p>
            <p>{props.description}</p> */}
            <h4>props.name</h4>
            <p>props.description</p>
        </div>
    );
}

export default Card;