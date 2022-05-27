import React from "react";

function BoardInput(props) {
  return (
    <div
      className={`${
        props.inputVisibility ? "input_visible" : "input_hidden"
      } input_board`}
    >
      <input
        type="text"
        placeholder="add task"
        onChange={props.newTaskHandler}
        value={props.newTaskValue}
      />
      <button
        onClick={(event) =>
          props.addTaskHandler(event, props.id, props.newTaskValue)
        }
      >
        add task
      </button>
    </div>
  );
}

export default BoardInput;
