import React from "react";
import Input from "./Input";
import Button from "./Button";
function BoardInput(props) {
  return (
    <div
      className={`${
        props.inputVisibility ? "input_visible" : "input_hidden"
      } input_board`}
    >
      <form onSubmit={props.addTaskHandler} action="">
        <Input
          placeholder="add task"
          changeHandler={props.newTaskHandler}
          value={props.newTaskValue}
          keyDownHandler={props.addTaskHandler}
          data={[props.id, props.newTaskValue]}
        />
        <Button
          buttonText="add task"
          data={[props.id, props.newTaskValue]}
          pushButtonHandler={props.addTaskHandler}
        />
      </form>
    </div>
  );
}

export default BoardInput;
