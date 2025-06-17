import styles from "./HeroTitle.module.css";
import Image from "next/image";

export default function HeroTitle() {
  return (
    <div className={styles.titleContainer}>
      <Image
        src="/assets/tomato_kirakira.svg"
        alt="キラキラエフェクト"
        width={961}
        height={484}
        className={styles.kirakira}
      />
      <Image
        src="/assets/tomato_title.svg"
        alt="TOMATO Portfolio"
        width={891}
        height={280}
        className={styles.titleImage}
        priority
      />
    </div>
  );
}
