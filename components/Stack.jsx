import styles from "./Stack.module.css";
import StackIcon from "./StackIcon";
// import { fetchIcons } from "@/utils/fetchIcons";

import { promises as fs } from "fs";
import path from "path";

const Stack = async () => {
  const imageDirectory = path.join(
    process.cwd(),
    "./public/images/stack-icons"
  );
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className={styles.stack_section}>
      <div className="container">
        <h2 className={`${styles.section_heading} text-center mt-3 mb-5`}>
          Stack
        </h2>

        <div className={styles.stack}>
          {imageFilenames.map((name) => {
            if (!name.includes(".DS_Store")) {
              return (
                <StackIcon
                  key={name}
                  pathname={`/images/stack-icons/${name}`}
                  name={name}
                />
              );
            }
          })}
          {/* <img src="./images/stack-icons/HTML5.png" alt="HTML5" /> */}
          {/* <img src="./images/stack-icons/CSS3.png" alt="CSS3" />
          <img src="./images/stack-icons/JavaScript.png" alt="Javascript" />
          <img src="./images/stack-icons/React.png" alt="React" />
          <img src="./images/stack-icons/gatsbyjs.svg" alt="gatsby.js" />
          <img src="./images/stack-icons/next-js-logo.png" alt="next.js" />
          <img
            src="./images/stack-icons/Ruby_On_Rails_Logo.png"
            alt="Ruby On Rails"
          />
          <img
            src="./images/stack-icons/stimulus.png"
            alt="stimulus.js"
            class="last-item"
          />
          <img src="./images/stack-icons/postgresql.png" alt="postgresql" />
          <img src="./images/stack-icons/git.png" alt="git" />
          <img src="./images/stack-icons/Github_logo_PNG1.png" alt="github" />
          <img src="./images/stack-icons/heroku.png" alt="heroku" />
          <img src="./images/stack-icons/Netlify_logo.svg" alt="netlify" />
          <img src="./images/stack-icons/strapi.png" alt="strapi" />
          <img src="./images/stack-icons/cloudinary.png" alt="cloudinary" />
          <img src="./images/stack-icons/mapbox.png" alt="mapbox" />
          <img src="./images/stack-icons/figma.svg" alt="figma" />
          <img
            src="./images/stack-icons/styled-components.png"
            alt="styled-components"
          />
          <img src="./images/stack-icons/bootstrap.png" alt="bootstrap" /> */}
        </div>
      </div>
    </section>
  );
};

export default Stack;
