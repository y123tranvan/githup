import React, { Fragment } from "react";
class User extends React.Component {
    state = {
        name : '',
        email : '',
        index : 0,
        show : false
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
    handleNext = (hasNext) => {
        hasNext ? this.setState({index : this.state.index + 1}) : this.setState({index : this.state.index = 0})
    }
    handlePrev =(hasPrevious , numbers) => {
        if(hasPrevious) {
            this.setState({index : numbers.length -1})
        }   else {
            this.setState({index : this.state.index -1})
        }
    }
    handleShow = (event) =>{
       this.setState({
        show : !this.state.show
       })
    }
  render () {
    const numbers = [1,2,3,4,5,6,7];
    const hasNext = this.state.index < numbers.length -1;
    const hasPrevious = this.state.index <= 0 ;
 
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

            <button onClick={(event) => this.handleNext(hasNext)}>Next</button>
            <button onClick={(event) => this.handlePrev(hasPrevious , numbers)}>Previous</button>
            <span>Number : {numbers[this.state.index]} </span>
            <br/>
            <button onClick={(event) => this.handleShow(event)}>{this.state.show ? "Hidden" : "Show"}</button>
            <span>{this.state.show ? 'Show data' : ''}</span>

        </Fragment>
    )
  }
}

export default User;