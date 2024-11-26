import { useState } from "react";
import styles from './form.module.css'

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "" ,done:false});  //object
    
    function handleSubmit(e) {
        e.preventDefault(); //to prevent default behaviour
        setTodos([...todos, todo]);
        setTodo({name: "" ,done:false});
      }
  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <div className={styles.inputCont}>
      <input className={styles.input}
        onChange={(e) => {
          setTodo({name:e.target.value,done: false});
        }}
        value={todo.name}
        type="text" placeholder="Enter todo item..."
      />
      <button className={styles.mbutton}  type="submit">Add</button>
      </div>
    </form>
  );
}
