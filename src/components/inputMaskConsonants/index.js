const InputMaskConsonants = ({ onMyKeyDown }) => {

  const onKeyDownHandler = (evt) => {
    const allowedKeys = ["a", "e", "i", "o", "u"];
    if (allowedKeys.includes(evt.key)) {
      evt.preventDefault();
    } else {
      onMyKeyDown(evt.key);
    }
  };

  return (
    <div>
      <input style={{ border: "1px solid red" }} onKeyDown={onKeyDownHandler} />
    </div>
  );
};

export default InputMaskConsonants;
