import React, { Component } from "react";
import './App.css';
import Count from "./components/count";
import Color from "./components/color";
import Counter from "./components/Counter"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    }
  }

  decrementCount1 = () => {
    let result = this.state.count1
    if (result === 0) {
      return
    } else {
      this.setState({
        count1: this.state.count1 - 1
      })
    }
  }

  incrementCount1 = () => {
    let result = this.state.count1;
    if (result === 100) {
      return
    } else if (result === this.state.count2) {
      // this.incrementCount2();
      result++;
      this.setState({
        count1: result,
        count2: result
      })
    } else {
      result++;
      this.setState({
        count1: result,
      })
    }



  }
  decrementCount2 = () => {
    let result = this.state.count2
    if (result === 0) {
      return
    } else if (result === this.state.count1) {
      result--;
      this.setState({
        count2: result,
        count1: result,
      })
    } else {
      result--;
      this.setState({
        count2: result,
      })
    }
  }

  incrementCount2 = () => {
    let result = this.state.count2;
    if (result === 100) {
      return
    } else {

      this.setState({
        count2: this.state.count2 + 1
      })

    }
  }
  render() {
    return (
      <div>
        {/* <Count></Count>
        <Color></Color> */}

        <Counter resultCount={this.state.count1} subCount={this.decrementCount1} addCount={this.incrementCount1} />
        <Counter resultCount={this.state.count2} subCount={this.decrementCount2} addCount={this.incrementCount2} />

      </div>
    )
  }
}



export default App;