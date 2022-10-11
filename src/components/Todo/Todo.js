
import React from "react";
import Item from"../Item/Item";
import "./Todo.css";

   class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: [1],
        }
        this.setState({
            tasks: this.state.tasks.push(1),
        })
    }
     
    
    
    /*listItems = this.state.tasks.map( task => {
        return <Item key ={task.id}name={task.name} done={task.done}/>
    });*/
   
    render(){
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