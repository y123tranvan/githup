import React, { Fragment } from "react";
class User extends React.Component {
    state = {
        name : '',
        email : '',
    }
    handleOnSubmit =(event) => {
        event.preventDefault();
    }
    handleName =(event) => {
        this.setState({
            name : event.target.value
        })
    }
    handleEmail =(event) => {
        this.setState({
            email : event.target.value
        })
    }
  render () {
    return (
        <Fragment>
            <p>Name user {this.state.name}</p>
            <p>Email user {this.state.email}</p>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label htmlFor="name">Enter Name</label>
              <input type="text" 
              value={this.state.name} 
              onChange={(event) => this.handleName(event)}
              />
              <br />
              <label htmlFor="email">Enter Email</label>
              <input type="email" 
              required
              value={this.state.email} 
              onChange={(event) => this.handleEmail(event)}
              />

             <br />
             <button type="submit">Submit</button>
            </form>
        </Fragment>
    )
  }
}

export default User;