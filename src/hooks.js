import React from 'react';
import {useState} from 'react';


const Example =() => {
    const [count, setCount] = useState(0)
    return(
        <>
          <p>You clicked {count} times:</p>
          <button onClick={() => setCount(count + 1)}>Click Me</button>
        </>
    )
}

export default Example





