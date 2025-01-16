import Container from "./component/Container";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ToDoName from "./component/ToDoName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import { useState } from "react";
import ErrorMessage from "./component/ErrorMessage";

const App = () => {
  const initialTodoItems = [
    { name: "Buy a Bike", dueDate: "01/16/20205" },
    { name: "Buy Milk", dueDate: "01/17/20205" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const onNewItem = (itemName,itemDueDate)=>{
    const newTodoItems = [...todoItems,  { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item=> item.name !==todoItemName);
    setTodoItems(newTodoItems)
  }
  return (
    <>
      <center>
        <Container>
          <ToDoName></ToDoName>
          
          <AddTodo handleNewItem = {onNewItem}></AddTodo>
          <ErrorMessage todoItems={todoItems}></ErrorMessage>
          <TodoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem}></TodoItems>
        </Container>
      </center>
    </>
  );
};

export default App;
