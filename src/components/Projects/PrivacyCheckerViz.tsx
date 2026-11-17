"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

export default function PrivacyCheckerViz() {
  const [activeTab, setActiveTab] = useState<"analysis" | "proxy" | "vt">("analysis");

  return (
    <div className={styles.consoleFrame}>
      <div className={styles.consoleHeader}>
        <div className={styles.windowControls}>
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
        </div>
        <span className={styles.consoleTitle}>link-checker • manifest-v3 • cloudflare-worker</span>
        <span className={`${styles.statusBadge} ${styles.statusCritical}`}>
          THREAT DETECTED
        </span>
      </div>

      <div className={styles.consoleTabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "analysis" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("analysis")}
        >
          Real-Time Threat Telemetry
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "proxy" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("proxy")}
        >
          Cloudflare Redirect Tracer
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "vt" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("vt")}
        >
          VirusTotal Security Engine
        </button>
      </div>

      <div className={styles.consoleBody}>
        {activeTab === "analysis" && (
          <>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Phishing Risk</span>
                <span className={styles.telemetryValue} style={{ color: "#f87171" }}>HIGH (0.94)</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Redirect Chain</span>
                <span className={styles.telemetryValue}>3 Hops Traced</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Action</span>
                <span className={styles.telemetryValue} style={{ color: "#facc15", fontSize: "0.85rem" }}>Auto-Blocked</span>
              </div>
            </div>

            <div className={styles.eventList}>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>Typosquatting Heuristics</span>
                  <span className={styles.eventTime}>Levenshtein distance: 1 (Spoofing target domain)</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusCritical}`}>FLAGGED</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>SSL Certificate &amp; Domain Age</span>
                  <span className={styles.eventTime}>Domain registered &lt; 48 hours ago</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>SUSPICIOUS</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>Manifest V3 Background Service</span>
                  <span className={styles.eventTime}>Navigation intercept triggered before DOM load</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>BLOCKED</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "proxy" && (
          <div className={styles.codeBlock}>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "0.5rem" }}># Cloudflare Worker CORS-Bypass Redirect Tracing:</div>
            <div>[Initial URL] https://bit.ly/secure-auth-gateway</div>
            <div style={{ paddingLeft: "1rem" }}>└─► [301 Redirect] http://login-verify-account.preview[.]live</div>
            <div style={{ paddingLeft: "2rem" }}>└─► [302 Redirect] https://malicious-credential-harvest[.]xyz/token</div>
            <div style={{ marginTop: "0.5rem" }}><span className={styles.codeVal}>[PROXY AUDIT] Final destination extracted and checked against threat databases in 184ms.</span></div>
          </div>
        )}

        {activeTab === "vt" && (
          <div className={styles.eventList}>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>VirusTotal Global Engine Scan</span>
                <span className={styles.eventTime}>14 / 72 security vendors flagged URL as malicious</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusCritical}`}>POSITIVE</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Google Safe Browsing API</span>
                <span className={styles.eventTime}>Classified under Social Engineering / Phishing</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusCritical}`}>THREAT</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Local Cache Layer</span>
                <span className={styles.eventTime}>Hash cached in Chrome storage for 24h to avoid API quota waste</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>CACHED</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
