import React, {useContext} from 'react';
import {SmurfContext} from "./SmurfContext";


const SmurfList = () => {
    const value = useContext(SmurfContext);
    return(
        <div>
            <h3>From the SmurfList component: {value}</h3>
        </div>
    )
}

export default SmurfList;
