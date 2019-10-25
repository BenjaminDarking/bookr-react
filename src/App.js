import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />

        </div>
      </div>
    );
  }
}

export default App;
