import Message from './message';

const Form = ({ children }) => {

  return children('Hola');
}

const RenderPropExample = () => {
  return <Form>
    {
      (text) => <Message>{text}</Message>
    }
  </Form>
};

export default RenderPropExample;
