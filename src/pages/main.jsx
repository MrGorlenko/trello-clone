import "../App.css";
import React, { useState, useEffect } from "react";
import CreateBoard from "../components/createBoard";
import Board from "../components/Board";
import Task from "../components/Task";
import state from "../store/Data";

function Main() {
  const [newBoard, setNewBoard] = useState("");
  const [boards, setBoards] = useState([]);
  const [draggedBoardId, setDraggedBoardId] = useState("");

  useEffect(() => {
    setBoards([...state.boards]);
  }, []);

  function newBoardHandler(event) {
    setNewBoard(event.target.value);
  }

  function addNewBoard(event) {
    event.preventDefault();
    if (newBoard && boards.indexOf(newBoard) === -1)
      setBoards((list) => [
        ...list,
        { id: boards.length + 1, category: newBoard, tasks: [] },
      ]);
    if (!newBoard) alert("enter smth pls");
    if (boards.indexOf(newBoard) !== -1) alert("you already have it!");
    setNewBoard("");
  }

  function addTaskHandler(event, id, newTaskValue) {
    const newBoardArray = boards.map((board) => {
      if (board.id === id) {
        if (board.tasks.indexOf(newTaskValue) === -1)
          board.tasks.push(newTaskValue);
        else alert("you have such task!");
      }
      return board;
    });
    setBoards([...newBoardArray]);
  }

  function dragstartHandler(event, content, boardId) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ content: content, boardId: boardId })
    );
  }

  function dropHandler(event) {
    event.preventDefault();
    let selectedTask = JSON.parse(event.dataTransfer.getData("text/plain"));
    console.log(selectedTask);
    const newBoardsArr = boards.map((board) => {
      if (board.id === selectedTask.boardId) {
        board.tasks.splice(board.tasks.indexOf(selectedTask.content), 1);
      }

      if (board.id === draggedBoardId) {
        board.tasks.push(selectedTask.content);
      }

      return board;
    });
    setBoards([...newBoardsArr]);
  }

  function dragOverHandler(event, boardId) {
    event.preventDefault();
    setDraggedBoardId(boardId);
  }

  return (
    <React.Fragment>
      <CreateBoard
        value={newBoard}
        changeHandler={newBoardHandler}
        submitHandler={addNewBoard}
      />
      <div className="boards">
        {boards.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            name={board.category}
            addTaskHandler={addTaskHandler}
            dropHandler={dropHandler}
            dragOverHandler={dragOverHandler}
          >
            {board.tasks.map((task) => (
              <Task
                dragstartHandler={dragstartHandler}
                key={task}
                boardId={board.id}
                task={task}
              />
            ))}
          </Board>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Main;
