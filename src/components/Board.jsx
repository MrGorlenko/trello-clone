import React, { useState } from "react";
import BoardTop from "./BoardTop";
import BoardInput from "./BoardInput";

function Board(props) {
  const [inputVisibility, setInputVisibility] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState(null);

  function handleBoardTopClick() {
    setInputVisibility(!inputVisibility);
  }

  function dragOverHandler(ev, boardId) {
    props.dragOverHandler(ev, boardId);
  }

  function dropHandler(event) {
    props.dropHandler(event);
  }

  function newTaskHandler(event) {
    setNewTaskValue(event.target.value);
  }

  function addTaskHandler(event, id, value) {
    setNewTaskValue("");
    props.addTaskHandler(event, id, value);
  }

  return (
    <div className="board">
      <BoardTop
        name={props.name}
        handleClick={handleBoardTopClick}
        inputVisibility={inputVisibility}
      />
      <BoardInput
        id={props.id}
        inputVisibility={inputVisibility}
        addTaskHandler={addTaskHandler}
        newTaskHandler={newTaskHandler}
        newTaskValue={newTaskValue}
      />
      <div
        className="content"
        onDrop={dropHandler}
        onDragOver={(ev) => dragOverHandler(ev, props.id)}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Board;
