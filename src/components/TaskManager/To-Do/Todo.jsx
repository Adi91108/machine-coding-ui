import "./styles.css";
import Task from "./components/Task";
import { useState, useRef, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("valueTodo");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    localStorage.setItem("valueTodo", JSON.stringify(todo));
  }, [todo]);

  const handleClickButton = () => {
    setTodo([
      ...todo,
      {
        heading: title,
        mBody: body,
        completed: false,
        id: Date.now(),
      },
    ]);
    setBody("");
    setTitle("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("im in");
      setTodo([
        ...todo,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
      setBody("");
      setTitle("");
    }
    // console.log("out");
  };
  const handleUpdate = (id) => {
    const updatedList = todo.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });
    setTodo(updatedList);
  };
  const handleDelete = (id) => {
    const deleteList = todo.filter((e) => e.id !== id);
    setTodo(deleteList);
  };

  const handleUpdateText = (id, valueH, valueB) => {
    const updatedList = todo.map((e) => {
      if (e.id === id) {
        e.heading = valueH;
        e.mBody = valueB;
      }
      return e;
    });
    setTodo(updatedList);
  };
  // console.log(todo);

  return (
    <>
      <div className="App">
        <h1>To-Do Task</h1>
        <div>
          <input
            placeholder="Add Title....."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            ref={inputRef}
          />
          <textarea
            placeholder="Add Body....."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onKeyDown={handleKeyPress}
            ref={inputRef}
          />
          <button onClick={handleClickButton}>add Task</button>
          {todo.length > 0 ? (
            <>
              {todo
                .map((e) => {
                  return (
                    <Task
                      {...e}
                      key={e.id}
                      updateCompleted={handleUpdate}
                      deleteTask={handleDelete}
                      editList={handleUpdateText}
                    />
                  );
                })
                .reverse()}{" "}
            </>
          ) : (
            <div> "No Notes to keep" </div>
          )}
        </div>
      </div>
    </>
  );
}
