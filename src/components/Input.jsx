function Input(props) {
  function onKeyDown(event) {
    if (event.key === "Enter") {
      props.keyDownHandler(event, ...props.data);
    }
  }

  return (
    <input
      placeholder={props.placeholder}
      onChange={props.changeHandler}
      onKeyDown={onKeyDown}
      value={props.value}
    />
  );
}

export default Input;
