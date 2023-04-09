import React, { useState, useRef, useEffect } from "react";
import "../../Styles/HookCSS/UseRefDemoStyle.css";

const UseRefRenderCount = () =>{
    const [inputValue, setInputValue] = useState("");
    const count = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
    })

    return(
        <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>

        <label>Render count : {count.current}</label>
    </div>
    )
}

function UseRefrefAreaElement(){
    const textAreaElement = useRef(null);

    function OnSelectAllTextArea(){
        textAreaElement.current.focus();
        textAreaElement.current.select();
    }

    return (
        <div>
            <textarea ref={textAreaElement}/>
            <button onClick={OnSelectAllTextArea}>SelectAll</button>
        </div>
    )
}

const UseRefPreviousValue = () =>{
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() =>{
        previousInputValue.current = inputValue;
    })

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <br/>
            <label>Current Value: {inputValue}</label>
            <br/>
            <label>Previous Value: {previousInputValue.current}</label>
        </div>
    );
}

function UseRefDemo() {
    
    return (
        <div className="useRef-all">
            <h1>UseRef Demo Hook</h1>
           
           {/* <UseRefRenderCount/>

           <UseRefrefAreaElement/> */}

           <UseRefPreviousValue/>
        </div>

    )
}

export default UseRefDemo;