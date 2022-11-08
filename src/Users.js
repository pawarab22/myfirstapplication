import React from "react";

class Users extends React.Component{
    constructor(props){
        super(props);   
    }
    
    render(){
        const lists = this.props.items.map((item)=>
        <tr key={item.rollno}>
            <td>{item.rollno}</td>
            <td>{item.name}</td>
            <td>{item.percentage}</td>
        </tr>
        )
        return(
            <table>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        )
    }
}
export default Users;