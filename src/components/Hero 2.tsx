import { Mail, FileText } from "lucide-react";
import styles from "./Hero.module.css";

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18.13V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

export default function Hero() {
  return (
    <section className={`container section ${styles.hero} animate-fade-in`}>
      <h1 className={styles.name}>Shourya Tuhar</h1>
      <h2 className={styles.title}>Software Engineer</h2>
      <p className={styles.description}>
        Building backend systems, developer tools, and security software.
      </p>
      
      <div className={styles.links}>
        <a href="https://github.com/shouryatuhar" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <GithubIcon size={18} />
          GitHub
        </a>
        <a href="mailto:shouryatuhar@gmail.com" className={styles.link}>
          <Mail size={18} />
          Email
        </a>
        <a href="#" className={styles.link}>
          <FileText size={18} />
          Resume
        </a>
      </div>
    </section>
  );
}
