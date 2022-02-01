import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./Navbar.module.css";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbar__logo}>
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className={Styles.navbar__links}>
        <li>
          <Link to="/cart" className={Styles.cart__link}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className={Styles.cartlogo__badge}>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className={Styles.hamburger__menu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
