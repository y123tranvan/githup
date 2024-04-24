import React from "react";
class Footer extends React.Component {
    render () {
        const {content} = this.props;
        return (
        <div class="footer">
             <p>Footer {content}</p>
        </div>
        )
    }
}
export default Footer; 