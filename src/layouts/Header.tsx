import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Shop
        </Link>
        <Link to="/" className="link">
          About
        </Link>
        <Link to="/" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Header;
