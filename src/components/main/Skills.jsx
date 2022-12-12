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
            opportunity to collaborate on any number of projects. Below are some
            of the tools I have worked with actively or dabbled with:
          </p>
          <div className={styles.skills__sub__skills}>
            <div className={styles.skills__sub__skills_core}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Node/Express</li>
                <li>MongoDB</li>
                <li>Recoil</li>
                <li>Redux</li>
                <li>GraphQL Apollo Client</li>
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
