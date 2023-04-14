const InputMask = ({ onMyKeyDown }) => {

  const onKeyDownHandler = (evt) => {
    const allowedKeys = ["a", "e", "i", "o", "u", "Backspace", "Delete"];
    if (!allowedKeys.includes(evt.key)) {
      evt.preventDefault();
    } else {
      onMyKeyDown(evt.key);
    }
  };

  return (
    <div>
      My mask: <input onKeyDown={onKeyDownHandler} />
    </div>
  );
};

export default InputMask;
