import React, { Component } from "react";

class PropsClassLMethod extends Component {
    render() {
        return(
            <div>
                <h1>Welcome Class Props {this.props.name} superHero {this.props.heroName}</h1>
            </div>
        )
    }
}

export default PropsClassLMethod;