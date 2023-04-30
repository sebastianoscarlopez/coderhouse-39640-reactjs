import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Storybook ReactJS 39640</h1>
    <ul>
      <li><Link to="/events">Input mask</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/fetch">Fetch Pikachu</Link></li>
      <li><Link to="/context">Context POC (Proof Of Concept)</Link></li>
      <li><Link to="/rendering">Rendering POC - Nivel de felicidad</Link></li>
      <li><Link to="/firestore">Firebase / Firestore - Products List</Link></li>
      <li>
        <h3>Broken components</h3>
        <ul>
          <li><Link to="/cookies-need-dry">Cookies need DRY - (easy)</Link></li>
          <li><Link to="/infinte-loop">InfiniteLoop - (medium)</Link></li>
          <li><Link to="/crazy-rocket">CrazyRocket - (hard)</Link></li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Home;