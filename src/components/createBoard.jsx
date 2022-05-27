import React from "react";
import InputWithButton from "./subcomponents/InputWithButton";

function CreateBoard(props) {
  return (
    <form onSubmit={props.submitHandler} className="createBoard">
      <p>Create your new board here:</p>
      <InputWithButton
        placeholder="new board"
        buttonText="add new board"
        changeHandler={props.changeHandler}
        value={props.value}
        keyDownHandler={props.submitHandler}
        data={[]}
      />
    </form>
  );
}

export default CreateBoard;
