import Container from "../shared/Container";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const date = new Date();
  const todayDate = date.getFullYear();
  return (
    <Container className={styles.footer}>
      <div className={styles.footer__links}>
        <a href="https://www.github.com/0papi" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://twitter.com/EvansKwofie5"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/evans-kojo-kwofie"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
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
