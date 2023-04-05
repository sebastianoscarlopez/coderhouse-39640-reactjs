
const withValidation = (WrappedComponent) => {

  function WithValidation({ edad }) {
    // TODO - add validation logic here
    let text = 'You are a child';
    if (edad > 18) {
      text = 'You are an adult';
    }

    return (
      <WrappedComponent>{text}</WrappedComponent>
    )
  }

  return WithValidation;
}

export default withValidation;