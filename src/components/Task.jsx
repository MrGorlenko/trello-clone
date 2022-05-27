import React from "react";

function Task(props) {
  function dragstartHandler(ev, taskContent) {
    props.dragstartHandler(ev, taskContent, props.boardId);
  }

  return (
    <div
      draggable
      className="task"
      onDragStart={(e) => dragstartHandler(e, props.task)}
    >
      {props.task}
    </div>
  );
}

export default Task;
