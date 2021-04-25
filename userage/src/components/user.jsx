import React from 'react';

// import "./user.css";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            age: props.age
        }
    }
    increaseAge() {
        console.log("age Increase")
        
        this.setState({
            age: this.state.age + 1,
        })
    }
    render() {
        return(
            <div>
                <h2 style={{color: this.props.color, backgroundColor: "black"}}>User: {this.props.name} and Age : {this.state.age}</h2>
                <button onClick={() => this.increaseAge()}>Increase Age</button>
                
                {/* OR */}
                {/* <button onClick={() => {this.setState({age: this.state.age + 1})}}>Increase Age</button> */}
            </div>
        )
    }
}

export default User;