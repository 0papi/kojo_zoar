import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import styles from "../../styles/ProjectCard.module.css";

const ProjectCard = ({
  title,
  stack,
  appType,
  liveLink,
  repoLink,
  isPublic,
  readMoreLink,
}) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.project__card__details}>
        <h4>{title}</h4>
        <p>{stack}</p>
        <p>{appType}</p>
      </div>

      {!isPublic ? (
        <div className={styles.project__card__actions}>
          <a href={`${liveLink}`} target="_blank" rel="noreferrer">
            <p>View Live</p>
            <BsArrowUpRight fill="#474747" />
          </a>
          <a href={`${repoLink}`} target="_blank" rel="noreferrer">
            <p>View Repo</p>
            <BsGithub fill="#474747" />
          </a>
        </div>
      ) : (
        <div className={styles.project__card_only}>
          <a href={`${readMoreLink}`} target="_blank" rel="noreferrer">
            <p>Learn More</p>
            <BsArrowUpRight fill="#474747" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
