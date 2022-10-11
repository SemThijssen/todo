
import React from "react";
import Item from"../Item/Item";
import Input from "../Input/Input";
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


}

update = () => {
    console.log("Ik ben geklikt");
    let tempArray = this.state.tasks;
    let combinedArray = tempArray.concat([
        {
            name: "Todo afmaken",
            done: false,
            id: 10,
        }
      ])
      this.setState({
        tasks: combinedArray,
      });
        console.log(combinedArray);
}
    render(){
        console.log(this.state.tasks);
    let items = this.state.tasks.map(task =>{
        return <Item name={task.name} key={task.id}></Item>
    });
        console.log("Vanuit de render!");
        return (
            <article onClick={this.update}className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">muzieklijst</h1>
                </header>
                <ul className="todo__list">
                   {items}
                </ul>
                <Input/>
            </article>
                );
            } 
    }

    


export default Todo;