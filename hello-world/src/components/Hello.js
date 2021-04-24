import React from "react";

// const Hello = () => {
//     return(
//         <h1>Hello Yeshi  JSX version</h1>
//     )
// }

const Hello = () => {
    return React.createElement("div", null,  
        React.createElement("h1", null, "Hello Yeshi Without JSX")
    )
}
export default Hello;