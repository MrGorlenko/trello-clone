function Button(props) {
  return (
    <button onClick={(event) => props.pushButtonHandler(event, ...props.data)}>
      {props.buttonText}
    </button>
  );
}

export default Button;
