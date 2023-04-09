import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    function GotoUseStatePage(){
        navigate('UseStateDemo',{replace:true});
    }
    function GotoUseEffectPage(){
        navigate('UseEffectDemo',{replace:true});
    }
    function GotoUseContextPage(){
        navigate('UseContextDemo',{replace:true});
    }
    function GotoUseRefPage(){
        navigate('UseRefDemo',{replace:true});
    }
    function GotoUseReducerPage(){
        navigate('UseReducerDemo',{replace:true});
    }
    function GotoUseMemoPage(){
        navigate('UseMemoDemo',{replace:true});
    }
    function GotoUseCallbackPage(){
        navigate('UseCallbackDemo',{replace:true});
    }

    return(
        <div className="home-header">
            <h1>HomePage</h1>
            <button onClick={() => GotoUseStatePage()}>Goto UseStateDemo</button>
            <br/>
            <button onClick={() => GotoUseEffectPage()}>Goto UseEffectDemo</button>
            <br/>
            <button onClick={() => GotoUseContextPage()}>Goto UseContextDemo</button>
            <br/>
            <button onClick={() => GotoUseRefPage()}>Goto UseRefPage</button>
            <br/>
            <button onClick={() => GotoUseReducerPage()}>Goto UseReducerPage</button>
            <br/>
            <button onClick={() => GotoUseMemoPage()}>Goto UseMemoDemo</button>
            <br/>
            <button onClick={() => GotoUseCallbackPage()}>Goto UseCallbackPage</button>
        </div>
    )
}