import React, { useMemo, useState } from "react";

export default function UseMeMoDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="all-center">
            <h1>useMemo Demo Hook</h1>

            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Content a={1} b={count} />
        </div>
    )
}

const Content = ({a, b}) => {
    const memorizedRandom = useMemo(() => {
        return Math.random();
    }, [a]);

    const random = Math.random();

    return (
        <div>
            <label>A : {a},</label>
            <label>B : {b}</label>
            <br />
            <label>Ramdom : {random}</label>
            <br/>
            <label>MemorizeRamdom : {memorizedRandom}</label>
        </div>
    )
}