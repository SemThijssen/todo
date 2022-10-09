
import "./Todo.css"
const Todo = (props) => {
    let double = props.tasks.map( task => {
        return task + task;
    });
    console.log(double);
    return(
<article className="todo">
    <header class="todo__header">
        <h1 class="todo__heading">Things to do:</h1>
    </header>
    <ul className="todo__list">
        <li className="todo__item">Groceries</li>
        <li className="todo__item">Studying</li>
        <li className="todo__item">Walk the dog </li>
        <li className="todo__item">Text Girlfriend</li>
        <li className="todo__item">Code awesome stuff</li>
    </ul>
</article>
    );
}

export default Todo;