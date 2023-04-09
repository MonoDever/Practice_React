import React, { useContext, useState } from "react";
import UserContext from "../../Globals/Contexts"
import UseContextChildDemo from "./UseContextChildDemo";

export default function UseContextDemo(){
    const [user,setUser] = useState({"name":"dr.Strange","surename":"stand"});
    

    return (
        <>
            <UserContext.Provider value={user}>
                <UseContextChildDemo/>
            </UserContext.Provider>
            
        </>
    )
}