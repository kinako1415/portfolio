import styles from "./TomatoIcon.module.css";
import Image from "next/image";

export default function TomatoIcon() {
  return (
    <div className={styles.iconContainer}>
      <Image
        src="/tomato_icon.svg"
        alt="トマトアイコン"
        width={150}
        height={150}
        className={styles.icon}
      />
    </div>
  );
}
