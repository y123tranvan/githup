import React from "react";
import User from "./User";
import Header from "./Header";
import Footer from "./footer";
class MyComponent extends React.Component {
    render () {
        
        return (
            <>
            <Header/>
            <User/>
            <Footer content={'copy right @tran van y'}/>
            </>
        )
    }
}
export default MyComponent;