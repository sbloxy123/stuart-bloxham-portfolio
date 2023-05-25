import { handler } from "@/utils/fetchData";
import MiniProjectCard from "./MiniProjectCard";
import styles from "./miniProjects.module.css";

const MiniProjects = async () => {
  const { miniProjects } = await handler();
  // const showFullScreenGif = () => {

  // }
  return (
    <div className={styles.section}>
      <section className={`${styles.mini_projects} container`}>
        <h2 className="section_heading">Mini Projects</h2>

        <div className={styles.project_collection}>
          {miniProjects.map((miniProject) => {
            const { id, title, img, gif, stack, task, task_breakdown, link } =
              miniProject;
            return (
              <MiniProjectCard
                key={id}
                title={title}
                img={img}
                gif={gif}
                stack={stack}
                task={task}
                task_breakdown={task_breakdown}
                link={link}
                // showFullScreenGif={showFullScreenGif}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MiniProjects;
