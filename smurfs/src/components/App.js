import React, { useState } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { SmurfContext } from "./SmurfContext";



const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  return (

    <SmurfContext.Provider value={{smurfs,setSmurfs}}>
      <div className="App">
        <SmurfList />
        <SmurfForm /> 
      </div>
    </SmurfContext.Provider>
  
    
  );
}

export default App;
