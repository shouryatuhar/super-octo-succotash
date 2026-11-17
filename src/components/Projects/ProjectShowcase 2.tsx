"use client";

import { ExternalLink } from "lucide-react";
import JobloomViz from "./JobloomViz";
import IncidentFlowViz from "./IncidentFlowViz";
import HostSentinelViz from "./HostSentinelViz";
import DocIntelViz from "./DocIntelViz";
import PrivacyCheckerViz from "./PrivacyCheckerViz";
import styles from "./Projects.module.css";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18.13V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

const PROJECTS = [
  {
    title: "Jobloom",
    role: "Distributed Job Orchestration Platform",
    badge: "Flagship Project",
    badgeType: "flagship",
    description: "A background job orchestration platform currently supporting reliable HTTP task execution via PostgreSQL state management. Engineered to scale into distributed workers with heartbeats, worker leases, exponential backoff, and priority scheduling.",
    tech: ["Go", "PostgreSQL", "Next.js", "Redis", "Distributed Systems"],
    github: "https://github.com/shouryatuhar/jobloom",
    live: null,
    VizComponent: JobloomViz
  },
  {
    title: "IncidentFlow",
    role: "DevOps Incident Management Platform",
    badge: "Live Cloud Platform",
    badgeType: "live",
    description: "A DevOps incident management platform allowing engineering teams to declare, triage, investigate, and resolve production outages with real-time timelines, role-based access control, automated external monitoring webhooks (Datadog/Prometheus), and reliability analytics (MTTA/MTTR).",
    tech: ["TypeScript", "React", "Express", "Prisma", "PostgreSQL (Neon)", "Docker", "OpenAPI 3.0"],
    github: "https://github.com/shouryatuhar/IncidentFlow",
    live: "https://frontend-murex-omega-87.vercel.app",
    VizComponent: IncidentFlowViz
  },
  {
    title: "HostSentinel",
    role: "Enterprise Host Security Auditing Framework",
    badge: "Systems Security",
    badgeType: "security",
    description: "Cross-platform host security auditing framework featuring 18+ modular audit suites. Performs comprehensive assessments across SSH hardening, firewall configuration, persistence detection, and privilege auditing with MITRE ATT&CK mappings and automated PDF/HTML report generation.",
    tech: ["Python", "Shell", "ReportLab", "MITRE ATT&CK", "CVSS v3", "Linux / macOS / Windows"],
    github: "https://github.com/shouryatuhar/HostSentinel",
    live: null,
    VizComponent: HostSentinelViz
  },
  {
    title: "DocIntel AI",
    role: "Document Intelligence & Semantic Extraction",
    badge: "Document Intelligence",
    badgeType: "doc",
    description: "Document intelligence platform featuring hierarchical outline extraction, target viewpoint analysis, and resume-job matching. Evaluates candidate suitability using unigram/bigram tokenization while filtering 108 recruitment-filler words, backed by Redis and Google Sheets synchronization.",
    tech: ["Python", "FastAPI", "JavaScript", "SQLite", "Upstash Redis", "Docker"],
    github: "https://github.com/shouryatuhar/docintel-ai",
    live: null,
    VizComponent: DocIntelViz
  },
  {
    title: "Privacy-Aware Link Checker",
    role: "Real-Time Link Safety & Threat Analyzer",
    badge: "Browser Security",
    badgeType: "browser",
    description: "A real-time link safety analyzer built as a Manifest V3 Chrome extension. Detects phishing attacks, typosquatting domains, and privacy threats using VirusTotal global threat intelligence and a custom Cloudflare Worker proxy for CORS-bypassed redirect tracing.",
    tech: ["JavaScript", "Chrome Extensions API (MV3)", "Cloudflare Workers", "VirusTotal API"],
    github: "https://github.com/shouryatuhar/Privacy--Aware-link-checker",
    live: null,
    VizComponent: PrivacyCheckerViz
  }
];

export default function ProjectShowcase() {
  return (
    <section className={`container section ${styles.projectsSection}`}>
      <h2 className="section-title">Selected Engineering Work</h2>
      
      <div className="flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className={`${styles.projectCard} animate-fade-in delay-${(index % 3) * 100}`}>
            <div className={styles.projectContent}>
              <div>
                <div className={styles.projectBadge}>
                  <span className={project.badgeType === "live" ? styles.liveDot : styles.flagshipDot} />
                  {project.badge}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectRole}>{project.role}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techList}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className={styles.projectLinks}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <GithubIcon size={16} />
                    GitHub Repository
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ color: "#4ade80" }}>
                    <ExternalLink size={16} />
                    Live Web App
                  </a>
                )}
              </div>
            </div>
            
            {project.VizComponent && (
              <div className={styles.projectVisual}>
                <project.VizComponent />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
