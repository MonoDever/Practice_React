import React, { useEffect, useState } from "react";
import '../../Styles/HookCSS/UseEffectDemoStyle.css'

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(true);
    const [message, setMessage] = useState("");
    const [timer, setTimer] = useState(0);
    //#region constuctor init somethimg value
    useEffect(() => {
        setCount(1);
    }, [])
    //#endregion constuctor init somethimg value

    //#region First section  : useEffect set value to tag label
    const EffectToMe = () => {

        useEffect(() => {
            const el = document.getElementById("setValue");
            el.innerText = `Effect to me : ${count}`;
            console.log("effect doing")

            return () => {
                console.log(`detroy : ${isShow}`);
                setMessage("component was unmounted")
            }
        })

        return (
            <div>
                <h2 className="useEffect-left">First Section</h2>
                <button className="useEffect-margin" onClick={(e) => setCount(count + 1)}>Increase</button>
                <label>count : {count}</label>
                <label className="useEffect-margin" id="setValue"></label>
            </div>
        )
    }
    //#endregion section one : useEffect set value to tag h3

    //#region Second section : unmount set message
    const DetroyComponent = () => {

        useEffect(() => {
            if (isShow === true) {
                setMessage("component didmount");
            }
        })

        function SetValueToIsShow(value) {
            console.log(value);
            if (value === true) {
                setIsShow(false);
            } else {
                setIsShow(true);
            }

        }

        return (
            <div>
                <h2 className="useEffect-left">Second Section</h2>
                <h3>message : {message}</h3>
                <button onClick={(e) => SetValueToIsShow(isShow)}>Unmount</button>
            </div>
        )
    }
    //#endregion

    //#region Third section : interval
    const EffectInterval = () => {
        useEffect(() => {
            const intervalNow = setInterval(RunTimer,1000)

            return () =>{
                clearInterval(intervalNow);//TODO bug Why process unmount 
                console.log(`destroy timer`);
            };
        },[]);

        const RunTimer = () =>{
            setTimer(previus => previus+1)
            console.log(`runtimer`);
        }

        return (
            <div>
                <h2 className="useEffect-left">Third section</h2>
                <label>Timer: {timer}</label>
            </div>
        )
    }
    //#endregion Third section : interval

    return (
        <div className="useEffect-all">
            <h1>useEffect Demo Hook</h1>

            {/* First Section */}
            {isShow === true ? <EffectToMe /> : null}

            {/* Second Section */}
            <DetroyComponent />

            {/* Third section */}
            <EffectInterval />
        </div>
    )
}