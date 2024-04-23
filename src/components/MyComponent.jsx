import React from "react";
import User from "./User";
import Header from "./Header";
class MyComponent extends React.Component {
    render () {
        return (
            <>
            <Header/>
            <User/>
            </>
        )
    }
}
export default MyComponent;