// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React from "react";
class App extends React.Component {
  state = {
    name : 'Y  and cooking',
    address : 'Da Nang',
    age : 20
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello {this.state.name}</h1>
        <Header/>
      </div>
    );
  }
}
export default App;
