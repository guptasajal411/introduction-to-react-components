import React, {useState} from 'react';

function TimeHook(){
    var [state, setState] = useState("TIME!")

    function getTime(){
        var date = new Date();
        var time = date.toLocaleTimeString();
        setState(time);
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={getTime}>Get Time!</button>
        </div>
    );
}

export default TimeHook;