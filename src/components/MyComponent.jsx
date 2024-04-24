import React from "react";
import User from "./User";
import Header from "./Header";
import Footer from "./footer";
class MyComponent extends React.Component {
    state = {
        listUsers : [
            {id : 1 , name : 'Tran Van y' ,address : "Danang" },
            {id : 2 , name : 'Nguyen Thi Hoa' ,address : "GaiLai" },
            {id : 3 , name : 'Tung Thanh Quy' ,address : "Bac can" },
        ]
    }
    render () {
        
        return (
            <>
            <Header/>
            <User listUsers={this.state.listUsers}/>
            <Footer content={'copy right @tran van y'}/>
            </>
        )
    }
}
export default MyComponent;