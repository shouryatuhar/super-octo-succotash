import { ArrowDown, ArrowUpRight, GitBranch, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return <>
    <header className={styles.nav}><a className={styles.wordmark} href="#top">ST<span>•</span></a><nav><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=shouryatuhar%40gmail.com" target="_blank" rel="noopener noreferrer">Contact <ArrowUpRight size={13}/></a></nav></header>
    <section className={`container ${styles.hero}`} id="top">
      <div className={styles.heroText}>
        <div className={styles.availability}><span/> OPEN TO WORK</div>
        <h1>Building the<br/><em>systems behind</em><br/>the interface.</h1>
        <p className={styles.description}>I’m Shourya, a software engineer focused on backend systems and developer tools. I like making complex workflows easier to understand, operate, and trust.</p>
        <div className={styles.ctas}><a className={styles.primaryCta} href="#work">Explore my work <ArrowDown size={16}/></a><a className={styles.secondaryCta} href="https://mail.google.com/mail/?view=cm&fs=1&to=shouryatuhar%40gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={16}/> Get in touch</a></div>
        <div className={styles.social}><a href="https://github.com/shouryatuhar" target="_blank" rel="noreferrer"><GitBranch size={15}/> github.com/shouryatuhar <ArrowUpRight size={13}/></a><span>BASED IN INDIA · BUILDING EVERY DAY</span></div>
      </div>
      <aside className={styles.heroNote}><span className={styles.noteIndex}>A NOTE ON HOW I WORK</span><div className={styles.noteMark}>“</div><p>Good software makes the difficult parts feel <i>obvious.</i></p><div className={styles.noteRule}/><span className={styles.noteFoot}>CURIOSITY → CLARITY → CRAFT</span></aside>
    </section>
  </>;
}
