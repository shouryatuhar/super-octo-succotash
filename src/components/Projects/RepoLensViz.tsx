"use client";

import { useState, useEffect } from "react";
import { FolderGit2, Cpu, Network, Lightbulb } from "lucide-react";
import styles from "./Projects.module.css";

export default function RepoLensViz() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.vizContainer}>
      <div className={`${styles.vizNode} ${step === 0 ? styles.activeNode : ""}`}>
        <FolderGit2 size={16} />
        <span>Repository</span>
      </div>
      <div className={styles.vizArrow} />
      
      <div className={`${styles.vizNode} ${step === 1 ? styles.activeNode : ""}`}>
        <Cpu size={16} />
        <span>Codebase Analysis</span>
      </div>
      <div className={styles.vizArrow} />
      
      <div className={`${styles.vizNode} ${step === 2 ? styles.activeNode : ""}`}>
        <Network size={16} />
        <span>Code Relationships</span>
      </div>
      
      <div className={styles.vizArrow} />
      <div className={`${styles.vizNode} ${step === 3 ? styles.activeNode : ""}`}>
        <Lightbulb size={16} />
        <span>Understanding</span>
      </div>

      <div className={styles.vizDetail}>
        {step === 0 && "Targeting an unfamiliar codebase."}
        {step === 1 && "Parsing AST and indexing symbols."}
        {step === 2 && "Mapping dependency graphs and cross-references."}
        {step === 3 && "Delivering developer/codebase intelligence."}
      </div>
    </div>
  );
}
