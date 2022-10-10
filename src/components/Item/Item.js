import React from "react";
import"./Item.css";

class Item extends React.Component{
constructor(props){
    super(props);
    this.className = "todo__item";
    this.state = {name: this.props.name, done:this.props.done}
}
   

    render(){ 
       return(
            <li class={this.className}>{this.state.name + this.state.done}</li>
    )
}

}
    

export default Item;