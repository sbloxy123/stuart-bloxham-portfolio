import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectInfo.module.css";
import { FaYoutube, FaGlobe, FaFigma, FaGithub } from "react-icons/fa";

const ProjectInfo = ({
  title,
  summary_html,
  img,
  link,
  tech_used,
  code_links,
}) => {
  const findIcon = (iconString) => {
    if (iconString === "FaYoutube") return <FaYoutube />;
    if (iconString === "FaFigma") return <FaFigma />;
    if (iconString === "FaGithub") return <FaGithub />;
    if (iconString === "FaGlobe") return <FaGlobe />;
  };
  console.log(link);

  return (
    <div className={styles.project_container}>
      <Link href={link} target="_blank">
        <Image
          alt={title}
          src={img}
          width={600}
          height={360}
          className={styles.project_screenshot}
        />
      </Link>
      <div className={styles.project_details}>
        <div className={styles.project_text}>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: summary_html }}></p>
          <h5>BUILT WITH:</h5>
          <ul>
            {tech_used.map((tech) => {
              if (tech.includes("hosted") || tech.includes("Hosted")) {
                return (
                  <li key={tech}>
                    <em>{tech}</em>
                  </li>
                );
              } else return <li key={tech}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className={styles.project_links}>
          <ul className={styles.project_icons}>
            {code_links.map((link) => {
              return (
                <li key={link.url}>
                  <Link
                    target="_blank"
                    className={styles.project_link_list}
                    href={link.url}
                  >
                    {findIcon(link.icon)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
