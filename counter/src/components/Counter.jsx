import React, { Component } from "react";
import "../css/Counter.css"

class Counter extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="row d-flex justify-content-center align-items-center background">
                            <div className="col-3">
                                <button className="btn button " onClick={() => this.props.subCount()}> - </button>
                            </div>
                            <div className="col-3">
                                <h2>{this.props.resultCount}</h2>
                            </div>
                            <div className="col-3">
                                <button className="btn  button" onClick={() => this.props.addCount()}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Counter;