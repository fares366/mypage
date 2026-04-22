import { useState } from 'react';
import styles from './catalog.module.css';
import { useTheme } from './ThemeContext';

export default function CatalogueHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.nav}>
        <div className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className={styles.brand}>
          <div className={styles.logoCircle}></div>
          <span className={styles.brandName}>internary</span>
        </div>

        <nav className={styles.navLinks}>
          <a href="#">For Students</a>
          <a href="#">For Companies</a>
          <a href="#howItWorks">How it works</a>
          <a href="#">About</a>
        </nav>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button className={`${styles.btn} ${styles.btnOutlinePill}`}>Log in</button>
          <button className={`${styles.btn} ${styles.btnCyanPill}`}>Sign Up Free</button>
        </div>
      </header>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.sidebarLinks}>
          <a href="" onClick={toggleMenu}>For Students</a>
          <a href="#" onClick={toggleMenu}>For Companies</a>
          <a href="#howItWorks" onClick={toggleMenu}>How it works</a>
          <a href="#" onClick={toggleMenu}>About</a>
          <button className={`${styles.btn} ${styles.btnCyanRect}`}>Sign Up Free</button>
        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}