import React from "react";

function CreateBoard(props) {
  return (
    <form onSubmit={props.submitHandler} className="createBoard">
      <p>Create your new board here:</p>
      <input
        type="text"
        placeholder="new board"
        onChange={props.changeHandler}
        value={props.value}
      />
      <input type="submit" value="add new board" />
    </form>
  );
}

export default CreateBoard;
