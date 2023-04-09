import React, { useState, useCallback } from "react";

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="all-center">
            <h1>useCallback Demo Hook</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Content id={count} />
        </div>
    )
}

const Content = ({id}) => {
    
    const CallbackHandleClick = useCallback(() => {
        console.log("CallbackHandleClick:",{id});
    },[]);

    const HandleClick = () => {
        console.log("HandleClick:",{id});
    };

    return (
        <div>
            <label>id : {id}</label>
            <br/>
            <button onClick={HandleClick}>HandleClick</button>
            <button onClick={CallbackHandleClick}>CallbackHandleClick</button>
        </div>
    )
}