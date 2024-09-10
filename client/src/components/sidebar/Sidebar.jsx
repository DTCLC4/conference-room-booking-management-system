
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light p-3" style={{ width: '250px', float: 'left' }}>
    <ul className="list-unstyled">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/work">Work</Link></li>
    </ul>
  </nav>
  )
}

export default Sidebar
