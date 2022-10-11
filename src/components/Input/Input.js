import React from "react";
import "./Input.css";
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }
update = (event) => {
    if(event.target.value === "Sem"){
        this.setState({inputValue:"Sem!!!"});
        return;
    }
    this.setState({inputValue: event.target.value});
    
    
}
    render(){
        return (
        <input onChange={this.update} value={this.state.inputValue}class= "input" type="text" placeholder= "Boodschappen" />
    ); }
    
}

export default Input;