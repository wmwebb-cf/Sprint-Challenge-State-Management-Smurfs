import React, { Component } from "react";
import "./App.css";
import {SmurfProvider} from "./SmurfContext";
import SmurfList from "./SmurfList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfProvider>
          <SmurfList />
        </SmurfProvider>
      </div>
    );
  }
}

export default App;
