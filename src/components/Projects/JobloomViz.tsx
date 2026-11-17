"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

export default function JobloomViz() {
  const [activeTab, setActiveTab] = useState<"trace" | "payload" | "roadmap">("trace");

  return (
    <div className={styles.consoleFrame}>
      <div className={styles.consoleHeader}>
        <div className={styles.windowControls}>
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
        </div>
        <span className={styles.consoleTitle}>jobloom/telemetry • worker_01 • postgres</span>
        <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>
          ● 200 OK
        </span>
      </div>

      <div className={styles.consoleTabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "trace" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("trace")}
        >
          Verified Execution Trace
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "payload" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("payload")}
        >
          HTTP Payload & Response
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "roadmap" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("roadmap")}
        >
          Architecture & Roadmap
        </button>
      </div>

      <div className={styles.consoleBody}>
        {activeTab === "trace" && (
          <>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Task Type</span>
                <span className={styles.telemetryValue} style={{ fontSize: "0.85rem" }}>HTTP_REQUEST</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>Execution Time</span>
                <span className={styles.telemetryValue}>~2.3s</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>State Store</span>
                <span className={styles.telemetryValue} style={{ fontSize: "0.85rem" }}>PostgreSQL</span>
              </div>
            </div>

            <div className={styles.eventList}>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>0.00s</span>
                  <span className={styles.eventName}>Job Submitted via Dashboard</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>AUTH OK</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>+0.04s</span>
                  <span className={styles.eventName}>Persisted to Database Queue</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>QUEUED</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>+0.08s</span>
                  <span className={styles.eventName}>Worker Polled & Leased Job</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>RUNNING</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>+0.12s</span>
                  <span className={styles.eventName}>External HTTP GET Dispatched</span>
                </div>
                <span className={styles.eventTime}>https://httpbin.org/get</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>+2.30s</span>
                  <span className={styles.eventName}>HTTP 200 OK Received & Persisted</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>SUCCEEDED</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "payload" && (
          <div className={styles.codeBlock}>
            <div><span className={styles.codeKey}>job_id</span>: <span className={styles.codeStr}>&quot;jb_7f89b41a&quot;</span>,</div>
            <div><span className={styles.codeKey}>handler</span>: <span className={styles.codeStr}>&quot;HTTP_REQUEST&quot;</span>,</div>
            <div><span className={styles.codeKey}>request</span>: &#123;</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>method</span>: <span className={styles.codeStr}>&quot;GET&quot;</span>,</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>url</span>: <span className={styles.codeStr}>&quot;https://httpbin.org/get&quot;</span>,</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>timeout_ms</span>: <span className={styles.codeVal}>5000</span></div>
            <div>&#125;,</div>
            <div><span className={styles.codeKey}>response</span>: &#123;</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>status_code</span>: <span className={styles.codeVal}>200</span>,</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>duration_seconds</span>: <span className={styles.codeVal}>2.3</span>,</div>
            <div style={{ paddingLeft: "1rem" }}><span className={styles.codeKey}>final_state</span>: <span className={styles.codeStr}>&quot;SUCCEEDED&quot;</span></div>
            <div>&#125;</div>
          </div>
        )}

        {activeTab === "roadmap" && (
          <div className={styles.eventList}>
            <div className={styles.eventRow} style={{ borderLeft: "2px solid #22c55e" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>PostgreSQL Job Queue State Machine</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>IMPLEMENTED</span>
            </div>
            <div className={styles.eventRow} style={{ borderLeft: "2px solid #22c55e" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>HTTP_REQUEST Worker Task Handler</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>IMPLEMENTED</span>
            </div>
            <div className={styles.eventRow} style={{ borderLeft: "2px solid #71717a" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Distributed Worker Leases & Heartbeats</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>PLANNED</span>
            </div>
            <div className={styles.eventRow} style={{ borderLeft: "2px solid #71717a" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Exponential Backoff & Dead-Letter Queues</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>PLANNED</span>
            </div>
            <div className={styles.eventRow} style={{ borderLeft: "2px solid #71717a" }}>
              <div className={styles.eventLeft}>
                <span className={styles.eventName}>Priority Scheduling & Cron Triggers</span>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>PLANNED</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
