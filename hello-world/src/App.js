import React, { Component }from "react";
import './App.css';
import Greet from "./components/Greet";
import WelCome from "./components/WelCome";
import Hello from "./components/Hello";
import PropsArrowFunction from "./components/PropsArrowFunction";
import PropsClassLMethod from "./components/PropsClassMethod";
import Message from "./components/Message";

class App extends Component {
  render() {
    return(
      <div>
        {/* <Greet></Greet> */}
        {/* <WelCome></WelCome> */}
        {/* <Hello></Hello> */}
        {/* <PropsArrowFunction name="Yeshi" heroName = "Spiderman" >
          <p>This is children Props</p>
        </PropsArrowFunction>
        <PropsArrowFunction name="Jack"  heroName = "Superman" >
          <button>Click</button>
        </PropsArrowFunction>
        <PropsArrowFunction name="Diana"  heroName = "WonderWomen" />

        <PropsClassLMethod name="Yeshi" heroName = "Spiderman" >
          <p>This is children Props</p>
        </PropsClassLMethod>
        <PropsClassLMethod name="Jack"  heroName = "Superman" >
          <button>Click</button>
        </PropsClassLMethod>
        <PropsClassLMethod name="Diana"  heroName = "WonderWomen" /> */}


        <Message />
      </div>
    )
  }
}



export default App;