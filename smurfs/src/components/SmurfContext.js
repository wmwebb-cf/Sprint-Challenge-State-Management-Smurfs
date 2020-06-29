import React, {createContext} from 'react';
import axios from "axios";


export const SmurfContext = createContext();

export const SmurfProvider = (props) => {
    axios.get("http://localhost:3333/smurfs")
    .then((res) =>{
        console.log(res)
    })

    return(
        <SmurfContext.Provider value={"from SC Value"}>
            {props.children}
        </SmurfContext.Provider>
    );
}