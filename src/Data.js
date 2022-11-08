import React from "react";
class Data extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
                Name is : {this.props.name}
                <br />
                <h2>rollno: {this.props.item.rollno}</h2>
                <h2>Name: {this.props.item.name}</h2>
                <h2>percentage:{this.props.item.percentage}</h2>
            </div>
        )
    }
}
export default Data;