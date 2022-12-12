import { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import useTheme from "next-theme";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

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

  const renderTheme = () => {
    return (
      <>
        {theme.toString() !== "light" ? (
          <button onClick={() => setTheme("light")} className={styles.themeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles.theme_icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} className={styles.themeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles.theme_icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        )}
      </>
    );
  };

  const returnClasses =
    theme === "light" ? `${styles.all_light}` : `${styles.all_dark}`;

  return (
    <div className={`${styles.navbar} ${returnClasses}`}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>EKK.</h2>
        </Link>
      </div>
      {/* render theme picker */}
      {renderTheme()}
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
    </div>
  );
};

export default Navbar;
