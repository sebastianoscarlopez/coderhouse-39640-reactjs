const InputMask = (props) => {
  const onKeyDownHandler = (evt) => {
    console.log(evt.key)
    const allowedKeys = ["a", "e", "i", "o", "u", "Backspace", "Delete"];
    if (!allowedKeys.includes(evt.key)) {
      evt.preventDefault();
    }
  };

  return (
    <div>
      My mask: <input onKeyDown={onKeyDownHandler} />
    </div>
  );
};

export default InputMask;
