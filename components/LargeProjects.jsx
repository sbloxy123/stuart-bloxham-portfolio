import ProjectInfo from "./ProjectInfo";
import styles from "./LargeProjects.module.css";
import path from "path";
import { promises as fs } from "fs";

async function handler() {
  const jsonDirectory = await path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const data = JSON.parse(fileContents);
  return data;
}

const LargeProjects = async () => {
  const { projects } = await handler();

  return (
    <div className={styles.section}>
      <section className="container">
        <h2 className="section_heading">Large Projects</h2>
        {projects.map((project) => {
          const {
            id,
            title,
            screenshot,
            summary_html,
            link,
            tech_used,
            code_links,
          } = project;
          return (
            <ProjectInfo
              key={id}
              title={title}
              summary_html={summary_html}
              img={screenshot}
              link={link}
              tech_used={tech_used}
              code_links={code_links}
            />
          );
        })}
      </section>
    </div>
  );
};

export default LargeProjects;
