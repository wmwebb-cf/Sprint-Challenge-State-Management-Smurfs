import React, {useState, createContext} from 'react';
import axios from "axios";


export const SmurfContext = createContext();

export const SmurfProvider = (props) => {
    
    const [smurfs, setSmurfs] = useState([])
    axios.get("http://localhost:3333/smurfs")
    .then((res) =>{
        // console.log(res.data);
        return res.data
    })

    console.log(smurfs);

    return(
        <SmurfContext.Provider value={"from SC Value"}>
            {props.children}
        </SmurfContext.Provider>
    );
}