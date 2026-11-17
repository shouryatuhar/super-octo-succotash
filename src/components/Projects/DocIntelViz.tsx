"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

export default function DocIntelViz() {
  const [activeTab, setActiveTab] = useState<"resume" | "outline" | "pipeline">("resume");

  return (
    <div className={styles.consoleFrame}>
      <div className={styles.consoleHeader}>
        <div className={styles.windowControls}>
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
        </div>
        <span className={styles.consoleTitle}>docintel • semantic-extraction • redis/sqlite</span>
        <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>
          MATCH: STRONG (89%)
        </span>
      </div>

      <div className={styles.consoleTabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "resume" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume-Job Semantic Matcher
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "outline" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("outline")}
        >
          Document Hierarchy Navigator
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "pipeline" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("pipeline")}
        >
          Ops &amp; Google Sheets Sync
        </button>
      </div>

      <div className={styles.consoleBody}>
        {activeTab === "resume" && (
          <>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Suitability</span>
                <span className={styles.telemetryValue} style={{ color: "#4ade80" }}>Strong (89%)</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Filler Filter</span>
                <span className={styles.telemetryValue}>108 Stopwords</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Skill Extraction</span>
                <span className={styles.telemetryValue} style={{ fontSize: "0.85rem" }}>Uni/Bi-grams</span>
              </div>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <span className={styles.telemetryLabel} style={{ display: "block", marginBottom: "0.4rem" }}>
                Identified Competencies
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>+ Distributed Systems</span>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>+ Backend Engineering</span>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>+ PostgreSQL</span>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>+ Redis Caching</span>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>+ Docker Containerization</span>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>~ Kubernetes (Gap)</span>
              </div>
            </div>

            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Role Target</span>
                <span className={styles.eventTime}>Systems &amp; Backend Engineer</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>HIGH FIT</span>
            </div>
          </>
        )}

        {activeTab === "outline" && (
          <div className={styles.eventList}>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>1.0 Architecture &amp; System Topology</span>
              </div>
              <span className={styles.eventTime}>p. 1-2 (H1 18pt)</span>
            </div>
            <div className={styles.eventRow} style={{ paddingLeft: "1.5rem" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>1.1 Distributed Message Queues</span>
              </div>
              <span className={styles.eventTime}>p. 3 (H2 14pt)</span>
            </div>
            <div className={styles.eventRow} style={{ paddingLeft: "1.5rem" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>1.2 Failure Recovery Protocols</span>
              </div>
              <span className={styles.eventTime}>p. 4 (H2 14pt)</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>2.0 Benchmarks &amp; Latency Analysis</span>
              </div>
              <span className={styles.eventTime}>p. 5 (H1 18pt)</span>
            </div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className={styles.codeBlock}>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "0.5rem" }}># Google Forms &amp; Upstash Redis Pipeline:</div>
            <div>[1] Applicant submits candidate packet via Google Forms</div>
            <div>[2] Webhook triggers FastAPI semantic processing endpoint</div>
            <div>[3] Unigram/bigram tokenization &amp; 108 recruitment-filler elimination</div>
            <div>[4] Redis cache checks for duplicate submission signatures</div>
            <div>[5] Results auto-streamed to Google Sheets Operations Dashboard</div>
            <div style={{ marginTop: "0.5rem" }}><span className={styles.codeVal}>[STATUS] Connected to Vercel KV / Upstash Redis with SQLite local fallback.</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
