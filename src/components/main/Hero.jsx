import styles from "../../styles/Hero.module.css";
import { useGetTheme } from "../../utils/useGetTheme";

const Hero = () => {
  const { theme } = useGetTheme();
  const returnClasses =
    theme === "light" ? `${styles.all_light}` : `${styles.all_dark}`;
  return (
    <div className={`${styles.hero} ${returnClasses}`}>
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
    </div>
  );
};

export default Hero;
