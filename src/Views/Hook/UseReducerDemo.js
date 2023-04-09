import React, { useEffect, useReducer, useState } from "react";
import { reducer, initialUser } from "../../Globals/Reducers/UserReducer"

export default function UseReducerDemo() {
    const [userReducer, dispatch] = useReducer(reducer, initialUser)
    const [user, setUser] = useState(initialUser);

    const handleChangeUsername = () => {
        dispatch({ type: "CHANGEUSERNAME", payload: user });
    };

    const handleChangeUser = () => {
        console.log(user);
        dispatch({ type: "CHANGEUSER", payload: user });
    };



    return (
        <div className="all-center">
            <h1>useReducer Demo Hook</h1>
            <input type="text" onChange={e => setUser({ ...user, userName: e.target.value })}></input>
            <br/>
            <input type="text" onChange={e => setUser({ ...user, surName: e.target.value })}></input>
            <br/>
            <button onClick={handleChangeUsername}>Submit</button>
            <button onClick={handleChangeUser}>Submit ALL</button>
            <br/>
            <label>userName: {userReducer.userName}</label>
            <br/>
            <label>surName: {userReducer.surName}</label>
        </div>
    )
}