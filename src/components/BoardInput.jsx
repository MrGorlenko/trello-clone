import React from "react";
import InputWithButton from "./subcomponents/InputWithButton";

function BoardInput(props) {
  return (
    <div
      className={`${
        props.inputVisibility ? "input_visible" : "input_hidden"
      } input_board`}
    >
      <form onSubmit={props.addTaskHandler} action="">
        <InputWithButton
          buttonText="add task"
          placeholder="add task"
          changeHandler={props.newTaskHandler}
          value={props.newTaskValue}
          keyDownHandler={props.addTaskHandler}
          pushButtonHandler={props.addTaskHandler}
          data={[props.id, props.newTaskValue]}
        />
      </form>
    </div>
  );
}

export default BoardInput;
