import React from "react";
import Input from "./Input";
import Button from "./Button";

function CreateBoard(props) {
  return (
    <form onSubmit={props.submitHandler} className="createBoard">
      <p>Create your new board here:</p>
      <Input
        placeholder="new board"
        changeHandler={props.changeHandler}
        inputValue={props.value}
        keyDownHandler={props.submitHandler}
        data={[]}
      />
      <Button
        buttonText="add new board"
        pushButtonHandler={props.submitHandler}
        data={[]}
      />
    </form>
  );
}

export default CreateBoard;
