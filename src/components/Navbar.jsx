import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span>MAAD</span>
        <small>FASHIONS</small>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/dresses">Dresses</Link>

        <Link to="/sarees">Sarees</Link>

        <Link to="/customised-dresses">Customised Dresses</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/cart" className="cart-btn">
          🛒 Cart
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
