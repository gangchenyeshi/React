import React, { Component } from "react";

class Box extends React.Component {
    render() {
        const { color, icon, value, unit } = this.props;
        return (
            <div className="box col-sm-3 col-3">
                <span class="material-icons "
                    style={{ color: color, fontSize: 100 }}>
                    {icon}
                </span>
                <p>{value} {unit}</p>
            </div>
        )
    }
}

export default Box;