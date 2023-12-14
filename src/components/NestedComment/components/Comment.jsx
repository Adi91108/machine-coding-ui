// import React from 'react'

import { useRef, useState } from "react";
import Action from "./Action";

const Comment = ({ comment, handleEditNode, handleInsertNode }) => {
  const [input, setInput] = useState("");
  const [expand, setExpand] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
    // setEditMode(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
        handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };
  return (
    <>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              autoFocus
              className="inputContainer__input first_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Comments..."
            />
            <Action
              className="reply comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
              style={{ wordWrap: "break-word" }}
            >
              {comment.name}
            </span>
            <div
              style={{ display: "flex", marginLeft: "1rem", marginTop: "5px" }}
            >
              {editMode ? (
                <>
                  <Action
                    className="replyOt"
                    type={"Save"}
                    handleClick={onAddComment}
                  />
                  <Action
                    className="replyOt"
                    type={"Cancel"}
                    handleClick={() => setEditMode(false)}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    handleClick={handleNewComment}
                    type={
                      <>
                        {expand ? (
                          <span style={{ fontSize: "20px" }}> ⬆ </span>
                        ) : (
                          <span style={{ fontSize: "20px" }}> ⬇ </span>
                        )}
                        Reply
                      </>
                    }
                  />
                  <Action
                    className="replyOt"
                    handleClick={() => {
                      if (editMode) inputRef.current.innerText;
                      setEditMode(true);
                    }}
                    type={"Edit"}
                  />
                  <Action className="replyOt" type={"Delete"} />
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onChange={(e) => setInput(e.target.value)}
            />
            <Action className="reply" type="REPLY" handleClick={onAddComment} />
            <Action
              className="reply"
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}
            />
          </div>
        )}
      </div>

      <div style={{ paddingLeft: "25px" }}>
        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              comment={cmnt}
              handleEditNode={handleEditNode}
              handleInsertNode={handleInsertNode}
            />
          );
        })}
      </div>
    </>
  );
};

export default Comment;
