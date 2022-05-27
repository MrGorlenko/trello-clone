import React from "react";

function BoardTop(props) {
  function handleClick() {
    props.handleClick();
  }
  return (
    <div className="top">
      {props.name}
      <span className="plus" onClick={handleClick}>
        {`${props.inputVisibility ? "-" : "+"}`}
      </span>
    </div>
  );
}

export default BoardTop;
