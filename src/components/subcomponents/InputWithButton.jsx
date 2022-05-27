import React from "react";

function InputWithButton(props) {
  function onKeyDown(event) {
    if (event.key === "Enter") {
      props.keyDownHandler(event, ...props.data);
    }
  }
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        onKeyDown={onKeyDown}
        value={props.value}
      />
      <button
        onClick={(event) => props.pushButtonHandler(event, ...props.data)}
      >
        {props.buttonText}
      </button>
    </React.Fragment>
  );
}

export default InputWithButton;
