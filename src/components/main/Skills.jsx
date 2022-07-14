import Container from "../shared/Container";

import styles from "../../styles/Skills.module.css";

const Skills = () => {
  return (
    <Container className={styles.skills}>
      <section id="skills">
        <h2>Skills</h2>
        <div className={styles.skills__info}>
          <p className={styles.skills__info__main}>
            I am passionate about building web interfaces and welcome the
            opportunity to collaborate on any number of projects. Below are the
            skills I bring to the fore when building web applications:
          </p>

          <div className={styles.skills__sub__skills}>
            <div className={styles.skills__sub__skills_core}>
              <h4>Core Skills</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Node/Express</li>
                <li>MongoDB</li>
                <li>Redux</li>
              </ul>
            </div>

            <div className={styles.skills__sub__skills_other}>
              <h4>Other</h4>
              <ul>
                <li>React Query</li>
                <li>Firebase</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
