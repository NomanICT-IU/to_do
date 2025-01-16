import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    <>
      <div className="container text-center">
        
          {todoItems.map((item, index) => (
           <div className="row" key={index}>
              <div className={`${styles.styleTodoItem} col-5`}>{item.name}</div>
              <div className={`${styles.styleTodoItem} col-4`}>{item.dueDate}</div>
              <div className="col-3">
                <button className={`${styles.styleTodoItem} ${styles.dangerBtn} btn btn-danger`}
                onClick={()=>onDeleteClick(item.name)}
                >Delete Task</button>
              </div>
            </div>
          ))}
        </div>
     
    </>
  );
  
};

export default TodoItems;
