"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, CircleHelp, Clock3, FileText, Folder, GitBranch, HardDrive, Mail, Minus, MoreHorizontal, Plus, Search, X } from "lucide-react";
import styles from "./DesktopPortfolio.module.css";

type View = "home" | "work" | "about" | "contact";

const projects = [
  { name: "Jobloom", kind: "Backend · Distributed systems", detail: "A PostgreSQL-backed job runner with explicit job states and inspectable execution.", stack: "Go · PostgreSQL", href: "https://github.com/shouryatuhar/jobloom" },
  { name: "IncidentFlow", kind: "Developer tools · Full stack", detail: "An incident workspace for coordinating response, timelines, and monitoring webhooks.", stack: "TypeScript · React · PostgreSQL", href: "https://github.com/shouryatuhar/IncidentFlow", live: "https://frontend-murex-omega-87.vercel.app" },
  { name: "HostSentinel", kind: "Security tooling", detail: "Cross-platform host auditing with modular checks and generated reports.", stack: "Python · Shell", href: "https://github.com/shouryatuhar/HostSentinel" },
  { name: "DocIntel AI", kind: "Document intelligence", detail: "Extracts document structure and compares resumes against role requirements.", stack: "Python · FastAPI", href: "https://github.com/shouryatuhar/docintel-ai" },
];

const labels: Record<View, string> = { home: "Portfolio", work: "Projects", about: "About me", contact: "Contact" };

export default function DesktopPortfolio() {
  const [view, setView] = useState<View>("home");
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return <main className={styles.desktop}>
    <div className={styles.wallpaper} aria-hidden="true"><span className={styles.orbOne}/><span className={styles.orbTwo}/><span className={styles.grain}/></div>
    <header className={styles.menuBar}>
      <div className={styles.menuLeft}><span className={styles.appleMark}>●</span><strong>Finder</strong><span className={styles.menuOptional}>File</span><span className={styles.menuOptional}>Edit</span><span className={styles.menuOptional}>View</span><span className={styles.menuOptional}>Go</span><span className={styles.menuOptional}>Window</span></div>
      <div className={styles.menuRight}><span className={styles.menuOptional}>Shourya’s MacBook Air</span><Clock3 size={14}/><span>{time}</span></div>
    </header>

    <nav className={styles.desktopIcons} aria-label="Desktop folders">
      {(["work", "about", "contact"] as View[]).map((item) => <button className={styles.desktopIcon} key={item} onClick={() => setView(item)} aria-label={`Open ${labels[item]}`}>
        <span className={styles.iconArt}><Folder size={38} fill="currentColor" strokeWidth={1.3}/></span><span>{labels[item]}</span>
      </button>)}
    </nav>

    <section className={styles.window} aria-label={`${labels[view]} folder`}>
      <div className={styles.titlebar}>
        <div className={styles.windowControls}><button aria-label="Close window" onClick={() => setView("home")}><X size={11}/></button><button aria-label="Minimize window" onClick={() => setView("home")}><Minus size={11}/></button><button aria-label="Show projects" onClick={() => setView("work")}><Plus size={11}/></button></div>
        <div className={styles.windowTitle}><Folder size={15} fill="currentColor"/> {labels[view]}</div>
        <span className={styles.moreButton} aria-hidden="true"><MoreHorizontal size={19}/></span>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.backForward}><button aria-label="Back" onClick={() => setView("home")}><ChevronLeft size={17}/></button><button aria-label="Forward" onClick={() => setView("work")}><ChevronRight size={17}/></button></div>
        <div className={styles.path}><HardDrive size={14}/> Macintosh HD <ChevronRight size={12}/> <Folder size={14} fill="currentColor"/> Shourya <ChevronRight size={12}/> <strong>{labels[view]}</strong></div>
        <span className={styles.searchButton} aria-hidden="true"><Search size={16}/></span>
      </div>

      <div className={styles.windowBody}>
        {view === "home" && <div className={styles.homeView}>
          <div className={styles.homeCopy}><span className={styles.kicker}>SOFTWARE ENGINEER · INDIA</span><h1>Hey, I’m Shourya.<br/><em>I build useful systems.</em></h1><p>I’m a computer science undergraduate focused on backend engineering, distributed systems, and developer tools. This is my little corner of the internet.</p><button className={styles.openButton} onClick={() => setView("work")}>Open Projects <ArrowUpRight size={15}/></button></div>
          <div className={styles.homeFolders}>{(["work", "about", "contact"] as View[]).map((item) => <button key={item} onClick={() => setView(item)}><Folder size={24} fill="currentColor"/><span>{labels[item]}</span><ArrowUpRight size={13}/></button>)}</div>
          <div className={styles.homeFooter}><span><span className={styles.statusDot}/> Available for software engineering opportunities</span><a href="https://github.com/shouryatuhar" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div>
        </div>}

        {view === "work" && <div className={styles.projectsView}><div className={styles.viewHeading}><div><span className={styles.kicker}>SELECTED WORK</span><h2>Things I’ve been building.</h2></div><span className={styles.itemCount}>4 ITEMS</span></div><div className={styles.projectGrid}>{projects.map((project, index) => <article className={styles.projectFile} key={project.name}><div className={styles.fileHead}><span className={styles.fileIcon}><FileText size={20}/></span><span className={styles.fileNumber}>0{index + 1}</span></div><span className={styles.fileKind}>{project.kind}</span><h3>{project.name}</h3><p>{project.detail}</p><div className={styles.fileBottom}><span>{project.stack}</span><div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}><GitBranch size={14}/></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}><ArrowUpRight size={15}/></a>}</div></div></article>)}</div></div>}

        {view === "about" && <div className={styles.aboutView}><span className={styles.kicker}>A LITTLE ABOUT ME</span><h2>Engineer by practice.<br/><em>Curious by default.</em></h2><p>I enjoy the work behind dependable software: clear interfaces, thoughtful data models, and systems that behave well when things go wrong. Right now, I’m learning by building and looking for a team to learn with.</p><div className={styles.interests}><span>INTERESTS</span><i>Backend engineering</i><i>Distributed systems</i><i>Developer experience</i><i>Application security</i></div></div>}

        {view === "contact" && <div className={styles.contactView}><span className={styles.kicker}>LET’S TALK</span><h2>Have something<br/><em>interesting in mind?</em></h2><p>I’m open to software engineering opportunities and good conversations about building things.</p><a className={styles.emailButton} href="mailto:shouryatuhar@gmail.com"><Mail size={16}/> Email Shourya <ArrowUpRight size={15}/></a><span className={styles.emailAddress}>shouryatuhar@gmail.com</span></div>}
      </div>
      <div className={styles.statusBar}><span>{view === "work" ? "4 projects" : "1 folder selected"}</span><span><CircleHelp size={13}/> Made with curiosity</span></div>
    </section>

    <footer className={styles.dock} aria-label="Quick navigation"><button onClick={() => setView("home")} aria-label="Home"><span className={styles.dockFolder}><Folder size={26} fill="currentColor"/></span></button><i/><button onClick={() => setView("work")} aria-label="Projects"><span className={styles.dockProject}><FileText size={21}/></span></button><button onClick={() => setView("about")} aria-label="About"><span className={styles.dockAbout}>ST</span></button><button onClick={() => setView("contact")} aria-label="Contact"><span className={styles.dockMail}><Mail size={21}/></span></button><i/><a href="https://github.com/shouryatuhar" target="_blank" rel="noreferrer" aria-label="GitHub"><span className={styles.dockGit}><GitBranch size={21}/></span></a></footer>
    <div className={styles.desktopCaption}>SHOURYA TUHAR <span>·</span> PERSONAL DESKTOP</div>
  </main>;
}
