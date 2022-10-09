
import "./Todo.css"
const Todo = () => {
    const tasks =  [
        {
            name:"Groceries",
            done: true,},
            {
            name:"Walking the dog",
            done: true,},
            {
            name:"Studying",
            done: false,},
            {
            name:"Message girlfriend",
            done: false,},
            {
              name:"Code awesome stuff",
              done: false,},
            {
              name:"Code more awesome stuff",
              done: false,},

      
       
      
    ];
    let listItems = tasks.map( task => {
        if(task.done === true){
            return <li class="todo__item todo__item--done">{task.name}</li>
        }
        return <li class="todo__item">{task.name}</li>
    });
   

    console.log(listItems);
    return(
<article className="todo">
    <header class="todo__header">
        <h1 class="todo__heading">Things to do:</h1>
    </header>
    <ul className="todo__list">
       {listItems}
    </ul>
</article>
    );
}

export default Todo;