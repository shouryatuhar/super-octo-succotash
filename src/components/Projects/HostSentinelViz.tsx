"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const MODULES = [
  { name: "SSH Hardening", status: "PASS", cvss: "CVSS 0.0", detail: "PasswordAuth disabled, PermitRootLogin prohibited." },
  { name: "Privilege Auditing", status: "PASS", cvss: "CVSS 0.0", detail: "SUID/SGID binaries integrity verified against hash database." },
  { name: "Firewall & Exposure", status: "WARN", cvss: "CVSS 3.7", detail: "pfctl stateful packet filtering active; 2 local dev ports bound." },
  { name: "Persistence Detection", status: "PASS", cvss: "CVSS 0.0", detail: "LaunchDaemons, LaunchAgents, and cron tables verified." },
  { name: "Package CVE Audit", status: "PASS", cvss: "CVSS 0.0", detail: "0 known critical CVE vulnerabilities in installed packages." }
];

export default function HostSentinelViz() {
  const [activeTab, setActiveTab] = useState<"modules" | "mitre" | "reports">("modules");

  return (
    <div className={styles.consoleFrame}>
      <div className={styles.consoleHeader}>
        <div className={styles.windowControls}>
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
        </div>
        <span className={styles.consoleTitle}>hostsentinel • cross-platform • python</span>
        <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>
          SCORE: 88/100
        </span>
      </div>

      <div className={styles.consoleTabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "modules" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("modules")}
        >
          18+ Security Modules
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "mitre" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("mitre")}
        >
          MITRE ATT&CK Mapping
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "reports" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("reports")}
        >
          Automated Reports (PDF/HTML)
        </button>
      </div>

      <div className={styles.consoleBody}>
        {activeTab === "modules" && (
          <>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Total Modules</span>
                <span className={styles.telemetryValue}>18 Modules</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>OS Support</span>
                <span className={styles.telemetryValue} style={{ fontSize: "0.85rem" }}>Linux • macOS • Win</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Risk Level</span>
                <span className={styles.telemetryValue} style={{ color: "#4ade80" }}>Hardened</span>
              </div>
            </div>

            <div className={styles.eventList}>
              {MODULES.map((m) => (
                <div key={m.name} className={styles.eventRow}>
                  <div className={styles.eventLeft}>
                    <span className={styles.eventName}>{m.name}</span>
                    <span className={styles.eventTime}>{m.detail}</span>
                  </div>
                  <span
                    className={`${styles.statusBadge} ${
                      m.status === "PASS" ? styles.statusSuccess : styles.statusWarning
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "mitre" && (
          <div className={styles.eventList}>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>T1021.004</span>
                <span className={styles.eventName}>Remote Services: SSH Protocol Hardening</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>VALIDATED</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>T1548.001</span>
                <span className={styles.eventName}>Abuse Elevation Control: Setuid and Setgid</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>VALIDATED</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>T1547.001</span>
                <span className={styles.eventName}>Boot/Logon Initialization: Launch Agents &amp; Daemons</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>VALIDATED</span>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventLeft}>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>T1046</span>
                <span className={styles.eventName}>Network Service Discovery: Port Audit</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusWarning}`}>MONITORED</span>
            </div>
          </div>
        )}

        {activeTab === "reports" && (
          <div className={styles.codeBlock}>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "0.5rem" }}># ReportLab &amp; Structured Evidence Generation Pipeline:</div>
            <div>[+] Scanning host system (Platform: Darwin 24.1.0 arm64)</div>
            <div>[+] Running 18 audit modules with weighted risk scoring...</div>
            <div>[+] Generating compliance artifacts:</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>• PDF Report</span>: <span className={styles.codeStr}>reports/hostsentinel_audit_2026.pdf</span> (ReportLab)</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>• HTML Report</span>: <span className={styles.codeStr}>reports/index.html</span> (Standalone interactive)</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>• JSON Schema</span>: <span className={styles.codeStr}>reports/audit_findings.json</span> (CI/CD ingestion)</div>
            <div style={{ marginTop: "0.5rem" }}><span className={styles.codeVal}>[SUCCESS] Audit completed in 1.48s. Weighted risk score: 88/100.</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
