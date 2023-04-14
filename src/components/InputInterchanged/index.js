import InputMask from "../inputMask";
import InputMaskConsonants from "../inputMaskConsonants";

const InputInterchanged = () => {

  const onMyKeyDownHandler = (key) => {
    console.log(key)
  }

  return <InputMaskConsonants onMyKeyDown={onMyKeyDownHandler} />;

}

export default InputInterchanged;