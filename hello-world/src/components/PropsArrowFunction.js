import React from "react";

const PropsArrowFunction = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name}, His SuperHero {props.heroName}</h1>
            {/* props.children is props for specific child components */}
            {props.children}

        </div>
        
    )
}

export default PropsArrowFunction;