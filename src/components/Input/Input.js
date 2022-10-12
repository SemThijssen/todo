import React from "react";
import "./Input.css";
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }
update = (event) => {
    this.setState({inputValue: event.target.value});
}
    
   enter = (event) => {
    if(event.keyCode === 13 && this.state.inputValue !== ""){
        this.props.inputPressedEnter(this.state.inputValue);
    }
   

}

button = () => {
    if(this.state.inputValue !== ""){
        this.props.inputPressedEnter(this.state.inputValue);
    }
   

}
    render(){
        return (
            <div>
        <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue}class= "input" type="text" placeholder= "Muziek" />
        <button onClick={this.button} class="submit"><p>Submit</p></button>
        </div>
        
    ); }
    
}

export default Input;