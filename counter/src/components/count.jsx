import React, { Component }from "react";


class Count extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0,
        }
    }
    increaseClick() {
        
        this.setState({
            count: this.state.count + 1,
        },() => {
        console.log("Callback value ", this.state.count)
        })
        console.log("outside the Callback value ", this.state.count)
    }
  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increaseClick()}> + </button>
      </div>
    )
  }
}



export default Count;