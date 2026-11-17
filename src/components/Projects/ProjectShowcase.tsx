import { ArrowUpRight, GitBranch } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    title: "Jobloom",
    category: "BACKEND · DISTRIBUTED SYSTEMS",
    description: "An early Java and Spring Boot job orchestration MVP. Authenticated HTTP jobs are persisted in PostgreSQL, claimed by a worker, and recorded with their result or failure.",
    tech: "Java · Spring Boot · PostgreSQL · React",
    highlights: ["Atomic worker claims", "JWT authentication", "SSRF protection"],
    github: "https://github.com/shouryatuhar/jobloom",
  },
  {
    number: "02",
    title: "IncidentFlow",
    category: "DEVELOPER TOOLS",
    description: "A deployed incident management platform with role-based response workflows, persistent timelines, reliability analytics, and monitoring webhooks.",
    tech: "TypeScript · React · PostgreSQL",
    highlights: ["Idempotent webhooks", "Atomic timeline writes", "OpenAPI docs"],
    github: "https://github.com/shouryatuhar/IncidentFlow",
    live: "https://frontend-murex-omega-87.vercel.app",
    apiDocs: "https://backend-pink-gamma-zqtni7yani.vercel.app/api/docs",
  },
  {
    number: "03",
    title: "Screen Recapture Detector",
    category: "COMPUTER VISION · MACHINE LEARNING",
    description: "A hybrid image classifier combining MobileNetV3 and FFT-based moiré analysis to distinguish genuine photos from photos of screens.",
    tech: "Python · TensorFlow · Flask",
    highlights: ["86.21% best validation", "78.87% evaluation accuracy", "142 hand-collected images"],
    github: "https://github.com/shouryatuhar/frauddetector",
    live: "https://huggingface.co/spaces/sthrrrr/frauddetector",
  },
  {
    number: "04",
    title: "HostSentinel",
    category: "SECURITY TOOLING",
    description: "A cross-platform security auditor that turns host checks into evidence-backed findings, risk scores, remediation guidance, and reports.",
    tech: "Python · Shell",
    highlights: ["Linux · macOS · Windows", "HTML · PDF · JSON", "Remediation guidance"],
    github: "https://github.com/shouryatuhar/HostSentinel",
  },
  {
    number: "05",
    title: "DocIntel AI",
    category: "DOCUMENT INTELLIGENCE",
    description: "A document intelligence platform for navigating PDF structure, finding relevant content by viewpoint, and matching resumes to job descriptions.",
    tech: "Python · FastAPI",
    highlights: ["PDF outline extraction", "Viewpoint search", "Resume matching"],
    github: "https://github.com/shouryatuhar/docintel-ai",
    live: "https://docintel-ai-peach.vercel.app/",
  },
];

export default function ProjectShowcase() {
  return (
    <section className={`container ${styles.projectsSection}`} id="work">
      <div className={styles.sectionIntro}>
        <span className="eyebrow">02 / PROJECTS</span>
        <h2>Projects</h2>
        <p>A selection of systems and tools I’ve built while exploring how software works.</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectMeta}><span>{project.number}</span><span>{project.category}</span></div>
            <h3>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.highlights}>{project.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
            <div className={styles.projectBottom}>
              <span className={styles.tech}>{project.tech}</span>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={15}/> Code <ArrowUpRight size={13}/></a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer"><span>Live demo</span><ArrowUpRight size={13}/></a>}
                {project.apiDocs && <a href={project.apiDocs} target="_blank" rel="noreferrer"><span>API docs</span><ArrowUpRight size={13}/></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.learningNote}>
        <div><span className="eyebrow">CURRENTLY LEARNING</span><h3>Scaling a URL shortener</h3><p>A learning exercise using an Express and PostgreSQL shortener to explore how caching, analytics writes, and database limits behave as redirect traffic grows.</p></div>
        <a href="https://github.com/shouryatuhar/url-shortener" target="_blank" rel="noreferrer"><GitBranch size={15}/> Follow the work <ArrowUpRight size={13}/></a>
      </div>
    </section>
  );
}
