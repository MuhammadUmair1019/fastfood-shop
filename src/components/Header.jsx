import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/products" className="text-blue-700"> Go to products page</Link>
      <Link to="/cart" className="text-blue-700"> Go to cart page</Link>
      <Link to="/" className="text-blue-700"> Go back to home page</Link>
    </div>
  );
}

export default Header;
