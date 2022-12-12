import { useGetTheme } from "../../utils/useGetTheme";
import ProjectCard from "./ProjectCard";

import styles from "../../styles/Projects.module.css";

const Projects = () => {
  const { theme } = useGetTheme();
  const returnClasses =
    theme === "light" ? `${styles.all_light}` : `${styles.all_dark}`;
  return (
    <div className={`${styles.projects} ${returnClasses}`}>
      <section id="projects">
        <h2 className={styles.project__title}>Projects</h2>
        <div className={styles.projects__card}>
          <ProjectCard
            title="YelpCamp"
            stack="MERN App"
            appType="A place to find and create camps"
            repoLink="https://github.com/0papi/yelpcamp_with_react"
            liveLink="https://github.com/0papi/yelpcamp_with_react"
          />

          <ProjectCard
            title="WindBnB"
            stack="React and Firebase"
            appType="Housing platform like AirBnB"
            liveLink="https://windbnb-0papi.vercel.app/"
            repoLink="https://github.com/0papi/windbnb"
          />
          <ProjectCard
            title="Sunnyside"
            stack="HTML, CSS & JavaScript"
            appType="A Frontend Mentor Landing Page"
            liveLink="https://sunnysidecreatives.netlify.app/"
            repoLink="https://github.com/0papi/sunnyside"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
