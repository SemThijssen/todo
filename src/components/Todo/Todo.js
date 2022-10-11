
import React from "react";
import Item from"../Item/Item";
import tasksObject from"../../data/tasks";
import "./Todo.css";

   class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
      
    }
     
    
    
    componentDidMount(){  
        console.log("vanuit de mount!");
        this.setState({
            tasks: tasksObject.tasks,
        }) 
    }

   
componentDidUpdate(){
console.log("vanuit de update");
console.log(this.state.tasks);

}
    render(){
        console.log("Vanuit de render!");
        return (
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">muzieklijst</h1>
                </header>
                <ul className="todo__list">
                   {this.listItems}
                </ul>
            </article>
                );
            } 
    }

    


export default Todo;