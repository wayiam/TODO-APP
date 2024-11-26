import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Deleted", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : { todo }
    );
    setTodos(newArray);
  }
  const classnm = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classnm} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button className={styles.delbut} onClick={() => handleDelete(item)}>
            x
          </button>
        </span>
      </div>
      <hr></hr>
    </div>
  );
}
