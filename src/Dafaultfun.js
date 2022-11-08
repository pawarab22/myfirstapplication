import FormattedMoney from "./FormattedMoney";

function Defaultfun(props){
    return(
        <div>
            Data Function
       
        Name is : {props.name}
        <br />
        <h2>rollno: {props.item.rollno}</h2>
        <h2>Name: {props.item.name}</h2>
        <h2>percentage:{props.item.percentage}</h2>
        <FormattedMoney value="1500.543" />
        </div>
    )
}
export default Defaultfun;