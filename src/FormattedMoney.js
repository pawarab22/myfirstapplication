import { render } from "@testing-library/react";
import React from "react";
class FormattedMoney extends React.Component{
    constructor(props)
    {
        super(props);
    }

 render(){
    return (
        <span>{this.format(this.props.value)}</span>
    )
}
format(amount){
    return parseFloat(amount).toFixed(2);
}
}
export default FormattedMoney;