import React from 'react';
import {useState} from 'react';



const MultiplyByOne = () => {
    const [count, setCount] = useState(0)
    return(
        <>
            <p>You Clicked {count} times:</p>
            <button onClick={() =>setCount(count +1)}>
                Click Me
            </button>
         
        </>
    );
}

export default MultiplyByOne;
    





