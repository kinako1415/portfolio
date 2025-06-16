import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            {/* SVGロゴは簡略化して実装 */}
            <svg
              fill="none"
              viewBox="0 0 45 45"
              style={{ width: "100%", height: "100%" }}
            >
              <rect
                fill="#FF1355"
                height="44.3008"
                rx="22.1504"
                width="44.3008"
              />
              <circle cx="26.6894" cy="31.5298" r="3" fill="#1FE765" />
              <path
                d="M23.2285 -5.47949C1.72315 -5.47935 -15.71 9.11657 -15.71 27.1211C-15.7097 45.1254 1.7233 59.7206 23.2285 59.7207"
                stroke="#1FE765"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.statusBadge}>
            <div className={styles.statusBadgeText}>今/HOMEにいるよ</div>
            <div className={styles.statusBadgeCorner}>
              <svg
                fill="none"
                viewBox="0 0 20 20"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  d="M3.24272 19.9999C0.569994 19.9999 -0.768501 16.7684 1.12142 14.8785L14.8789 1.12123C16.7688 -0.768646 20.0002 0.569858 20.0002 3.24256V16.9999C20.0002 18.6567 18.6571 19.9999 17.0002 19.9999H3.24272Z"
                  fill="#FF1355"
                />
              </svg>
            </div>
          </div>
        </div>

        <nav className={styles.navMenu}>
          <div className={`${styles.navItem} ${styles.navItemActive}`}>
            <div className={styles.navItemText}>Apps</div>
            <div className={styles.activeIndicator}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navItemText}>Photos</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navItemText}>Illustrations</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navItemText}>About</div>
          </div>
          <div className={styles.contactButton}>
            <div className={styles.contactButtonText}>Contact</div>
          </div>
        </nav>
      </div>
    </header>
  );
}
