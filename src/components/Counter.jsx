import React, { useState } from 'react'
import Button from './Button'

function Counter(){
    const [state, setState] = useState(0);

    function increase(){
        setState(state + 1);
    }

    function decrease(){
        setState(state - 1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h3>{state}</h3>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;