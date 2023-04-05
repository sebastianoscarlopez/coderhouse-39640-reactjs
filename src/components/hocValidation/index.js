import Message from './message';
import withValidation from './withValidation';

const MessageWithValidation = withValidation(({ children }) => <button>{children}</button>);

const PlayingWithHOC = ({ edad }) => {

  return (
    <MessageWithValidation edad={edad} />
  );
};

export default PlayingWithHOC;