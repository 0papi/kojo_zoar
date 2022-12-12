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
          I am <span>Evans Kojo Kwofie</span>, a frontend web developer. I have
          worked with{" "}
          <a href="https://insurerity.com/" target="_blank" rel="noreferrer">
            Insurerity Digital
          </a>{" "}
          Insurerity Digital, where I focused on writing frontend logic to build
          dynamic systems for insurance companies. Before then, I was an intern
          at{" "}
          <a href="https://www.tryklas.com/" target="_blank" rel="noreferrer">
            tryklas
          </a>
          , where I focused on building reusable components. I am looking to
          join a team that will provide the necessary environment for me to grow
          and become a part of something greater than myself.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
