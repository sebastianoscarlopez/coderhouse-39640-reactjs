
const InputMask = (props) => {

  const onKeyDownHandler = (evt) => {
    console.log(evt);
    if (evt.key === 'a') {
      console.log('PRESIONASTE UNA A')
    }
    // evt.preventDefault();
  }

  return <div>
    My mask:  <input onKeyDown={onKeyDownHandler} />
  </div>
}

export default InputMask;
