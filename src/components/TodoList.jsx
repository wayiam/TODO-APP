import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todolist}>
      {todos.map(
        (
          item //map is being used to loop through the list and this is a callback function
        ) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          /> //pass key prop to avoid warning
        )
      )}
    </div>
  );
}
