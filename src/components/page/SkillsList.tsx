import styles from "./SkillsList.module.css";

export default function SkillsList() {
  const skills = [
    "Graphic Design",
    "Illustration",
    "Web Design",
    "Frontend Engineer",
  ];

  return (
    <div className={styles.skillsList}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          {skill}
        </div>
      ))}
    </div>
  );
}
