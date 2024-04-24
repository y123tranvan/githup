import React from "react";
import User from "./User";
import Header from "./Header";
import Footer from "./footer";
class MyComponent extends React.Component {
    state = {
        listUsers : [
            {id : 1 , name : 'Tran Van y' ,email  : "ranany@gmail.com" },
            {id : 2 , name : 'Nguyen Thi Hoa' ,email  : "ranany@gmail.com" },
            {id : 3 , name : 'Tung Thanh Quy' ,email  : "ranany@gmail.com" },
        ]
    }
    handleAddUser = (user) => {
        this.setState({
            listUsers : [...this.state.listUsers , user]
        })
    }
    render () {
        
        return (
            <>
            <Header/>
            <User listUsers={this.state.listUsers} handleAddUser={this.handleAddUser}/>
            <Footer content={'copy right @tran van y'}/>
            </>
        )
    }
}
export default MyComponent;