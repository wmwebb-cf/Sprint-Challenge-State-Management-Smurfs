import React, {useContext, useEffect} from 'react';
import {SmurfContext} from "./SmurfContext";
import Smurf from "./Smurf";
import axios from "axios";

const SmurfList = () => { 
    const {smurfs, setSmurfs} = useContext(SmurfContext)  

    useEffect(() => axios.get("http://localhost:3333/smurfs")
    .then((res) =>{
        console.log(res.data);
        setSmurfs(res.data);
    })
    .catch((res) => console.log(res.data)), [])
    // console.log(smurfs)
    
    return(
        <div>   
            {smurfs.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id}/>
            ))}
        </div>
    )
}

export default SmurfList;
