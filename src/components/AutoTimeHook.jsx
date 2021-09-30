import React, {useState} from 'react';

function AutoTimeHook(){
    var [state, setState] = useState("Auto Time Hook");

    function getAutoTime(){
        var date = new Date();
        setState(date.toLocaleTimeString());
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => setInterval(getAutoTime, 1000)}>Start Auto Time Hook</button>
        </div>
    );
}

export default AutoTimeHook;