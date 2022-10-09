
import "./Todo.css"
const Todo = () => {
    const tasks =  [
        "Groceries",
        "Walking the dog",
        "Studying",
        "Message girlfriend",
        "Code awesome stuff",
        "Code more awesome stuff",
        "Groceries",
        "Walking the dog",
        "Studying",
        "Message girlfriend",
        "Code awesome stuff",
        "Code more awesome stuff",
        "Groceries",
        "Walking the dog",
        "Studying",
        "Message girlfriend",
        "Code awesome stuff",
        "Code more awesome stuff",
    ];
    let listItems = tasks.map( task => {
        return <li class="todo__item">{task}</li>
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