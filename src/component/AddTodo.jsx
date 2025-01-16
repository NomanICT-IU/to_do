import { useState } from "react";
import styles from "./AddTodo.module.css";
const AddTodo = ({ handleNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const HandleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const HandleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className={`${styles.inputStyle} container text-center`}>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              placeholder="Add Task here"
              value={todoName}
              className={`${styles.inputStyle}`}
              onChange={HandleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={dueDate}
              className={`${styles.inputStyle}`}
              onChange={HandleDateChange}
            />
          </div>
          <div className="col-3">
            <button
              className={`${styles.inputStyle} btn btn-success`}
              onClick={handleAddButtonClicked}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
