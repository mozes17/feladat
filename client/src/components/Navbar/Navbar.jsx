import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/student">Team </Link>
      <Link to="/teacher">Soccer</Link>
    </div>
  );
};

export default Navbar;
