import Image from "next/image";
import styles from "./StackIcon.module.css";

const StackIcon = ({ pathname, name }) => {
  return (
    <Image
      priority={false}
      width={100}
      height={100}
      src={pathname}
      alt={name}
      className={styles.stack_icon}
    />
  );
};

export default StackIcon;
