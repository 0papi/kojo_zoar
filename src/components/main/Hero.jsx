import styles from "../../styles/Hero.module.css";
import Container from "../shared/Container";

const Hero = () => {
  return (
    <Container className={styles.hero}>
      <div className={styles.hero__top}>
        <h2>Hello </h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.hero__text}>
        <p>
          I am <span>Evans Kojo Kwofie</span>, junior web developer with
          interest in building fullstack applications. I am looking to join a
          team that will provide the necessary environment for me to grow and
          become a part of something greater than myself. Honestly, I just want
          the chance to contribute towards building great products - and have
          fun doing it!
        </p>
      </div>
    </Container>
  );
};

export default Hero;
