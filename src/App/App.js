import Todo from"../components/Todo/Todo";
import "./App.css";

const App = () =>{
    const tasks =  [
        "Groceries",
        "Walking the dog",
        "Studying",
        "Message girlfriend",
        "Code awesome stuff",
    ];
    return(
    <Todo tasks ={tasks}/>
    )
}

export default App;