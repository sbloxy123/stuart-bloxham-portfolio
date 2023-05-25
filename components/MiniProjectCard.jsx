"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./MiniProjectCard.module.css";
import { FaGithub } from "react-icons/fa";

const MiniProjectCard = ({
  title,
  img,
  gif,
  stack,
  task,
  task_breakdown,
  link,
}) => {
  const [showGif, setShowGif] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setShowGif((prevShowGif) => !prevShowGif);
  };
  const handleClickToEscape = (e, title) => {
    e.target.alt !== title && handleClick();
  };

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 570) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className={styles.project_card}>
      <div className={styles.img_container}>
        {/* fullscreen player */}
        {showGif && (
          <div>
            <div
              className={styles.full_screen_focus}
              onClick={(e) => handleClickToEscape(e, title)}
            ></div>
            <div className={styles.full_screen}>
              <button className={styles.exit_btn} onClick={handleClick}>
                exit
              </button>
              <Image
                src={gif}
                height={450}
                width={800}
                alt={title}
                className={styles.full_screen_video}
              />
            </div>
          </div>
        )}

        {/* close video */}
        <div className={styles.img_container}>
          <Image
            src={showGif ? `${gif}` : `${img}`}
            height={265}
            width={480}
            alt={title}
            className={`${styles.project_img}`}
          />
          {!isMobile && !showGif ? (
            <button className={styles.play_btn} onClick={handleClick}>
              ▶
            </button>
          ) : (
            <button className={styles.exit_btn} onClick={handleClick}>
              ⏹
            </button>
          )}
        </div>
      </div>

      <div className={`${styles.project_info} p-4`}>
        <h3 className="text-center"> {title}</h3>
        <div className={styles.stack}>
          <h6>Stack: </h6>

          {stack.map((lang) => (
            <div key={lang} className={styles.git_btn}>
              <p>{lang}</p>
            </div>
          ))}
        </div>
        <p className="pt-3">Task: {task}</p>
        <ul>
          {task_breakdown.map((bulletPoint) => (
            <li key={bulletPoint}>{bulletPoint}</li>
          ))}
        </ul>
        <div className={styles.link}>
          <h6>Code: </h6>
          <Link href={link} target="_blank">
            <div className={styles.git_btn}>
              <FaGithub />
              <p>Github</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
