import React from 'react'

const Smurf = (props) => {

    return (
        <div key={props.id}>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default Smurf;