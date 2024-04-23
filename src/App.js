// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React from "react";
class App extends React.Component {
  state = {
    name: "Y  and cooking",
    address: "Da Nang",
    age: 20,
    show: false,
    counter: 0,
    to:"van y",
    message:"Hello",
  };
  handleUpLoad = (event) => {
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleShow = (event) => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleNext = (event) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handlePrev = (event) => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      alert(`Your said ${this.state.message} to ${this.state.to}`);
    }, 5000);
  };
  handleSelect = (event) => {
    this.setState({
      to : event.target.value
    })
  }
  handleText = (event) => {
    this.setState({
      message : event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Hello {this.state.name} , {this.state.age}
        </h1>
        <input
          value={this.state.name}
          onChange={(event) => this.handleOnChange(event)}
        />
        <button onClick={(event) => this.handleUpLoad(event)}>
          Click MeImage
        </button>
        <br />
        <button onClick={(event) => this.handleShow(event)}>
          {this.state.show ? "Hidden" : "Show"}
        </button>

        {this.state.show ? (
          <span>Hello every one my name i {this.state.name}</span>
        ) : (
          <span>....</span>
        )}
        <br />
        <br />
        <button onClick={(event) => this.handleNext(event)}>Next</button>
        <span>{this.state.counter}</span>
        <button onClick={(event) => this.handlePrev(event)}>Prev</button>
        <br />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            To : {""}
            <select
              value={this.state.to}
              onChange={(event) => this.handleSelect(event)}
            >
              <option value="van y">van y</option>
              <option value="yeu em">Yeu EM</option>
            </select>
          </label>
          <textarea
            placeholder="Message"
            value={this.state.message}
            onChange={(event) => this.handleText(event)}
          />
          <button type="submit">Send</button>
        </form>
        <Header />
      </div>
    );
  }
}
export default App;
