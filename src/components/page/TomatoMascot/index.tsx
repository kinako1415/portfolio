import styles from "./TomatoMascot.module.css";

export default function TomatoMascot() {
  return (
    <div className={styles.mascotContainer}>
      <div className={styles.mascot}>
        <svg
          width="300"
          height="300"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="320" cy="320" r="200" fill="#FF1355" />
          {/* ハイライト */}
          <ellipse cx="250" cy="250" rx="60" ry="60" fill="#FF5C7D" />
        </svg>
        <div className={styles.eyesContainer}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
        </div>
        <div className={styles.mouth}></div>
      </div>
    </div>
  );
}
