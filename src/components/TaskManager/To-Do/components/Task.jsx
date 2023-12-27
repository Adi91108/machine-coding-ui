import React, { useState } from "react";

const Task = ({
  text,
  completed,
  heading,
  mBody,
  id,
  updateCompleted,
  deleteTask,
  editList,
}) => {
  const [EditTask, setEditTask] = useState(heading);
  const [EditTaskB, setEditTaskB] = useState(mBody);
  const [ShowText, setShowText] = useState(false);

  return (
    <>
      <div className="task-con">
        <div className="button" onClick={() => updateCompleted(id)}>
          {completed ? "✔" : ""}
        </div>
        <div
          className={completed ? "strike" : ""}
          onDoubleClick={() => {
            completed ? setShowText(false) : setShowText(true);
          }}
        >
          {ShowText ? (
            <>
              <input
                type="text"
                autoFocus
                value={EditTask}
                onChange={(e) => setEditTask(e.target.value)}
                // onBlur={() => {
                //   setShowText(false);
                //   editList(id, EditTask);
                // }}
              />
              <input
                type="text"
                autoFocus
                value={EditTaskB}
                onChange={(e) => setEditTaskB(e.target.value)}
                // onBlur={() => {
                //   setShowText(false);
                //   editList(id, EditTaskB);
                // }}
              />
              <button
                onClick={() => {
                  editList(id, EditTask, EditTaskB);
                  setShowText(false);
                }}
              >
                ➖
              </button>
            </>
          ) : (
            <div>
              <h2>{heading}</h2>
              <p>{mBody}</p>
              <button
                onClick={() => {
                  completed ? setShowText(false) : setShowText(true);
                }}
              >
                ➕
              </button>
            </div>
          )}
        </div>
        <div className="close" onClick={() => deleteTask(id)}>
          ❎
        </div>
      </div>
    </>
  );
};

export default Task;
