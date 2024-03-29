import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import mainLogo from "../components/logo/logo.png";
import userIcon from "../components/icon/userIcon.svg";
import { RiSearchLine } from "react-icons/ri";
import { PiHeartBold } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <Link to={"/"} className="nav-logo-link">
            <img className="main-logo" alt="mainLogo" src={mainLogo} />
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">
                <img className="userIcon" alt="userIcon" src={userIcon} />
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <RiSearchLine style={{ marginTop: "1", fontSize: "24px" }} />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <PiHeartBold style={{ marginTop: "1", fontSize: "24px" }} />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <MdOutlineShoppingCart
                  style={{ marginTop: "1", fontSize: "24px" }}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
