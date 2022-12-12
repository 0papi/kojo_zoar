import { Link } from "react-router-dom";

import Container from "../shared/Container";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const date = new Date();
  const todayDate = date.getFullYear();
  return (
    <Container className={styles.footer}>
      <div className={styles.footer__links}>
        <Link to="https://www.github.com/0papi" target="_blank">
          Github
        </Link>
        <Link to="https://twitter.com/EvansKwofie5" target="_blank">
          Twitter
        </Link>
        <Link
          to="https://www.linkedin.com/in/evans-kojo-kwofie"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
      <hr className={styles.line} />
      <div>
        <h4 className={styles.footer__date}>{todayDate} Copyright</h4>
        <h3>Evans Kojo Kwofie</h3>
      </div>
    </Container>
  );
};

export default Footer;
