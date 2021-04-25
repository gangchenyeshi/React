import React, { Component } from "react";

class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
            message : "Hello Visitor"
        }
    }
    changeMessage() {
        // console.log("Click")
        this.setState({
            message: "Thank you for subscribe"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }
}

export default Message;