import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";
import styles from "./Nav.module.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const lobster = Lobster({ weight: "400", subsets: ["cyrillic"] });

const Nav = ({ footerStyle }) => (
  <nav
    className={
      footerStyle
        ? `${styles.navbar_style} ${styles.footer_style}`
        : `${styles.navbar_style}`
    }
  >
    <div className="container">
      <div className={styles.footer_content}>
        <div className={`${styles.my_name} ${lobster.className} me-auto`}>
          <h1 className={styles.forename}>Stuart</h1>
          <h1 className={styles.surname}>Bloxham</h1>
        </div>
        <a
          href="./docs/stuart-bloxham-CV-web-developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale="false"
          className="d-flex justify-content-between align-items-center mb-2 me-auto"
        >
          <Image
            className={`${styles.cv_icon} me-2`}
            src="/images/file.png"
            alt="document icons"
            width={30}
            height={20}
          />

          <h2 className={`${styles.cv_text} mb-0`}>CV</h2>
        </a>
        <ul className={styles.list_inline}>
          <li>
            <a href="https://github.com/sbloxy123" target="_blank">
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/stuart-bloxham-a36197121/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/bloxy88/" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      {footerStyle && (
        <div className={styles.built_with}>
          <p>Built with Next.js 13</p>
          <Link href="https://github.com/sbloxy123/stuart-bloxham-portfolio/tree/main">
            <div className={styles.portfolio_code}>
              <FaGithub /> <p>view code here</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  </nav>
);

export default Nav;
