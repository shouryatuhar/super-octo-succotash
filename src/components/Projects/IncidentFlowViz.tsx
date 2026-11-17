"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const STEPS = [
  { id: "triaging", label: "TRIAGING", detail: "Datadog alert webhook ingested. Triage channel paged." },
  { id: "investigating", label: "INVESTIGATING", detail: "SRE On-Call assigned. Tracing container pool metrics." },
  { id: "identified", label: "IDENTIFIED", detail: "Root cause: Neon PostgreSQL pool exhaustion in us-east-2." },
  { id: "monitoring", label: "MONITORING", detail: "Prisma connection pool optimized. P99 latency returning to 85ms." },
  { id: "resolved", label: "RESOLVED", detail: "Incident mitigated. Post-mortem audit recorded to database." }
];

export default function IncidentFlowViz() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [activeTab, setActiveTab] = useState<"triage" | "webhook" | "metrics">("triage");

  const currentStep = STEPS[activeStepIndex];

  return (
    <div className={styles.consoleFrame}>
      <div className={styles.consoleHeader}>
        <div className={styles.windowControls}>
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
          <div className={styles.windowDot} />
        </div>
        <span className={styles.consoleTitle}>incidentflow • neon-postgres • vercel</span>
        <span className={`${styles.statusBadge} ${styles.statusCritical}`}>
          ● SEV_1 CRITICAL
        </span>
      </div>

      <div className={styles.consoleTabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "triage" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("triage")}
        >
          Incident Lifecycle Triage
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "webhook" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("webhook")}
        >
          Webhook Ingestion Spec
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "metrics" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("metrics")}
        >
          Reliability & Service Health
        </button>
      </div>

      <div className={styles.consoleBody}>
        {activeTab === "triage" && (
          <>
            <div className={styles.workflowStepper}>
              {STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className={`${styles.stepItem} ${idx <= activeStepIndex ? styles.stepItemActive : ""}`}
                  onClick={() => setActiveStepIndex(idx)}
                  title={`Click to preview ${step.label} phase`}
                >
                  <div className={styles.stepDot} />
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.telemetryCard} style={{ background: "rgba(255, 255, 255, 0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <span className={styles.telemetryLabel}>Active Phase Action</span>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>{currentStep.label}</span>
              </div>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                {currentStep.detail}
              </span>
            </div>

            <div className={styles.eventList}>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>14:22:04</span>
                  <span className={styles.eventName}>POST /api/webhooks/incidents</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusCritical}`}>SEV_1 INGESTED</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>14:22:45</span>
                  <span className={styles.eventName}>Auto-Assigned to sre@incidentflow.dev</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusNeutral}`}>PAGED</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventTime}>14:28:10</span>
                  <span className={styles.eventName}>Hotfix: Neon Connection Pool Scaled</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>DEPLOYED</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "webhook" && (
          <div className={styles.codeBlock}>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "0.5rem" }}># Ingest external Prometheus / Datadog alert:</div>
            <div>curl -X POST <span className={styles.codeStr}>&quot;https://backend-api.vercel.app/api/webhooks/incidents&quot;</span> \</div>
            <div style={{ paddingLeft: "1rem" }}>-H <span className={styles.codeStr}>&quot;Content-Type: application/json&quot;</span> \</div>
            <div style={{ paddingLeft: "1rem" }}>-H <span className={styles.codeStr}>&quot;x-webhook-secret: $SECURE_WEBHOOK_SECRET&quot;</span> \</div>
            <div style={{ paddingLeft: "1rem" }}>-d &#39;&#123;</div>
            <div style={{ paddingLeft: "2rem" }}><span className={styles.codeKey}>&quot;service&quot;</span>: <span className={styles.codeStr}>&quot;Payment API&quot;</span>,</div>
            <div style={{ paddingLeft: "2rem" }}><span className={styles.codeKey}>&quot;title&quot;</span>: <span className={styles.codeStr}>&quot;Stripe Webhook Latency &gt; 2.5s&quot;</span>,</div>
            <div style={{ paddingLeft: "2rem" }}><span className={styles.codeKey}>&quot;severity&quot;</span>: <span className={styles.codeStr}>&quot;SEV_1&quot;</span></div>
            <div style={{ paddingLeft: "1rem" }}>&#125;&#39;</div>
          </div>
        )}

        {activeTab === "metrics" && (
          <>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>MTTA (Mean Ack)</span>
                <span className={styles.telemetryValue} style={{ color: "#38bdf8" }}>4.2 min</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>MTTR (Mean Resolve)</span>
                <span className={styles.telemetryValue} style={{ color: "#4ade80" }}>21.8 min</span>
              </div>
              <div className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>DB Encryption</span>
                <span className={styles.telemetryValue} style={{ fontSize: "0.85rem" }}>SSL Neon PG</span>
              </div>
            </div>

            <div className={styles.eventList}>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>Payment API (us-east-1)</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusWarning}`}>DEGRADED (SEV_1)</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>Authentication Service</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>HEALTHY (99.98%)</span>
              </div>
              <div className={styles.eventRow}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventName}>Notification Dispatcher</span>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>HEALTHY (100%)</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
