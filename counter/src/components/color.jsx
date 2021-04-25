import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          color :"red"
        }
      }

      magicButton() {
          this.setState({
              color: "green"
          })
      }
    render() {
        return (
            <div>
                <h1  style={{color: this.state.color}}>Hello Change the Color</h1>
                <button onClick={() => this.magicButton()}>Change the color</button>
            </div>
        )
    }
}

export default Color;