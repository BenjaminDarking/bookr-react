import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Main />

        </div>
      </div>
    );
  }
}

export default App;
