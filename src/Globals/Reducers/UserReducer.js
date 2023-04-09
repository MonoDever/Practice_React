const initialUser ={
    userId:1,
    userName:"Strange",
    surName:"Surgion"
}

const reducer = (state,action) =>{
    console.log("action: ",state,action.type,action.payload)
    switch(action.type) {
        case "CHANGEUSERNAME": return {...state,userName : action.payload.userName};
        case "CHANGEUSER": return {...state,
            userName:action.payload.userName,
            surName:action.payload.surName }
        default: return state;
    }
}

export {reducer,initialUser};