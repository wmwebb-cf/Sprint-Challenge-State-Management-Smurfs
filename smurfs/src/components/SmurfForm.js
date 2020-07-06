import React, {useState, useContext} from 'react';
import {SmurfContext} from "./SmurfContext";
import axios from 'axios';

const SmurfForm = () => {

    const value = useContext(SmurfContext)
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: null,
        height: ''
    });

    const handleChanges = e => {
        setNewSmurf({...newSmurf, 
            [e.target.name]: e.target.value})
        console.log(newSmurf);
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:3333/smurfs", newSmurf)
        .then((res) => {
            value.smurfs.push("/")
        })
        .catch((err) => console.log(err))
        .finally(() => window.location.reload())
    }

    return (
        <div>
            <h3>Add a new Smurf</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={newSmurf.value} onChange={handleChanges} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={newSmurf.value} onChange={handleChanges} />
                </label>
                <label>
                    Height:
                    <input type="text" name="height" value={newSmurf.value} onChange={handleChanges} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        
    )
    
}

export default SmurfForm;