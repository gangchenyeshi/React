import React from "react";
import User from "./components/user";

import "./App.css";

class App extends React.Component {
  apprenantsDigitousPromo4 = [
    {name: "John", age: 42, color: "white"},
    {name: "Jane", age: 36, color: "grey"},
    {name: "Ahmed", age: 60, color: "orange"}
  ];

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.apprenantsDigitousPromo4.map(function(apprenant){
          return (
            <User  
              name={apprenant.name}
              age={apprenant.age}
              color={apprenant.color}
            />
          )
          
        })}
      </div>
    );
  }
}

// module.export = 
export default App;