import React, {useState} from 'react';

function Counter(){
    const [count, setCount]=useState(0);
    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrementCount}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={incrementCount}>Increment</button>
        </div>
    );
}
export default Counter;