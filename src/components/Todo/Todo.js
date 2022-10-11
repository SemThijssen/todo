
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


}

update = () => {
    console.log("Ik ben geklikt");
    this.setState({
        tasks: this.state.tasks.push(
            {
                name:"Groceries",
                done: true,
                id: 1
            },
        )
    })
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
            </article>
                );
            } 
    }

    


export default Todo;