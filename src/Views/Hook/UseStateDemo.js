import React, { useState } from "react";
import "../../Styles/HookCSS/UseStateDemoStyle.css";

export default function UseStateDemo() {
    const [count, setCount] = useState(0);

    //#region Object n Array
    const ObjDemo = () => {
        const initAccount = { "username": "", "password": "" }
        const [account, setAccount] = useState(initAccount);
        const [accountList, setAccountList] = useState([]);

        return (
            <div>
                <h1>Object</h1>
                <p>#log {JSON.stringify(account)}</p>
                <input className="useState-input"
                    type="text" placeholder="username here"
                    value={account.username}
                    onChange={(e) => setAccount({ ...account, username: e.target.value })}
                ></input>
                <br />
                <input className="useState-input"
                    type="text" placeholder="password here"
                    value={account.password}
                    onChange={(e) => setAccount({ ...account, password: e.target.value })}
                ></input>
                <br />

                <button className="useState-button" onClick={() => setAccount(initAccount)}>
                    Clear
                </button>
                
                <button className="useState-button" onClick={(e) => setAccountList([...accountList, account])}>
                    Submit
                </button>

                <h1>Array</h1>
                <ul>
                    {
                        Array.isArray(accountList) ? accountList.map(item =>
                            <li>user: {item.username} password: {item.password}</li>
                        )
                            : []
                    }
                </ul>

            </div>
        )
    }
    //#endregion Object n Array

    return (
        <div className="useState-all">
            <h1>useState Demo HOOK</h1>

            <div className="useState-grid-container">
                <div className="useState-grid-item0">
                    <button className="useState-button" onClick={(e) => setCount(count + 1)}>Increase</button>
                </div>

                <label>{count}</label>
                <div className="useState-grid-item2">

                    <button className="useState-button" onClick={(e) => setCount(count - 1)}>
                        decrease</button>
                </div>
            </div>

            {/* section Object Array*/}
            <div>
                <ObjDemo />
            </div>

        </div>
    );
}