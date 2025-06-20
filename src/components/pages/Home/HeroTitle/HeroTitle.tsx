import styles from "./HeroTitle.module.css";
import Image from "next/image";

export default function HeroTitle() {
  return (
    <div className={styles.titleContainer}>
      <Image
        src="/assets/wave_path.svg"
        alt="背景の波線"
        width={1486}
        height={565}
        className={styles.wavePath}
        priority={false}
      />
      <Image
        src="/assets/tomato_kirakira.svg"
        alt="キラキラエフェクト"
        width={861}
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
