import React, { useContext } from "react";
import UserContext from "../../Globals/Contexts";

export default function UseComtextChildDemo(){
    const user = useContext(UserContext);

    return (
        <h2>{user.name} {user.surename}</h2>
    )

}