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
  handleUpLoad() {
    alert(`Hello`)
  }
  handleOnMouseOver(event){
    console.log(event)
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello {this.state.name}</h1>
        <button onClick={this.handleUpLoad}>Upload Image</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover </button>
        <Header/>
      </div>
    );
  }
}
export default App;
