import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Storybook ReactJS 39640</h1>
    <ul>
      <li><Link to="/events">Input mask</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/fetch">Fetch Pikachu</Link></li>
      <li><Link to="/context">Context POC (Proof Of Concept)</Link></li>
    </ul>
  </div>
);

export default Home;