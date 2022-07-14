import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import styles from "../../styles/ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.project__card__details}>
        <h4>{props.title}</h4>
        <p>{props.stack}</p>
        <p>{props.appType}</p>
      </div>

      <div className={styles.project__card__actions}>
        <a href={`${props.liveLink}`}>
          <p>View Live</p>
          <BsArrowUpRight fill="#474747" />
        </a>
        <a href={`${props.repoLink}`} target="_blank" rel="noreferrer">
          <p>View Repo</p>
          <BsGithub fill="#474747" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
