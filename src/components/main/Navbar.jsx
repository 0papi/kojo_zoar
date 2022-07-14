import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

import Container from "../shared/Container";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const onShowMenu = () => {
    setShowNav(true);
  };

  const onCloseMenu = () => {
    setShowNav(false);
  };

  const removeShowNav = () => {
    setShowNav(false);
  };
  return (
    <Container className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>EKK.</h2>
        </Link>
      </div>
      <nav className={styles.navWrapper}>
        <ul
          className={
            showNav
              ? `${styles.navbarLinks} ${styles.active}`
              : `${styles.navbarLinks}`
          }
        >
          <li>
            <Link exact to="/#skills" onClick={removeShowNav}>
              Skills
            </Link>
          </li>
          <li>
            <Link exact to="/#projects" onClick={removeShowNav}>
              Projects
            </Link>
          </li>
          <li>
            <Link exact to="/#contact" onClick={removeShowNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger}>
        {!showNav && (
          <div onClick={onShowMenu}>
            <HiMenuAlt3 className={styles.open} />
          </div>
        )}
        {showNav && (
          <div onClick={onCloseMenu}>
            <AiOutlineClose className={styles.close} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
