"use client";

import { useEffect, useState } from "react";
import { Code, Trophy } from "lucide-react";
import styles from "./Activity.module.css";

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18.13V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

export default function LiveActivity() {
  const [github, setGithub] = useState<any>(null);
  const [leetcode, setLeetcode] = useState<any>(null);
  const [codechef, setCodechef] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [ghRes, lcRes, ccRes] = await Promise.all([
          fetch("/api/github").then(res => res.json()).catch(() => null),
          fetch("/api/leetcode").then(res => res.json()).catch(() => null),
          fetch("/api/codechef").then(res => res.json()).catch(() => null),
        ]);
        
        setGithub(ghRes);
        setLeetcode(lcRes);
        setCodechef(ccRes);
      } catch (e) {
        console.error("Failed to load activity", e);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // Parse LeetCode submissionCalendar for the heatmap
  const generateLeetCodeHeatmap = () => {
    if (!leetcode?.matchedUser?.userCalendar?.submissionCalendar) {
      return Array.from({ length: 140 }).map((_, i) => (
        <div key={i} className={`${styles.heatBox} ${styles.heatLevel0}`} title="No data" />
      ));
    }

    try {
      const calendarData = JSON.parse(leetcode.matchedUser.userCalendar.submissionCalendar);
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const heatBoxes = [];
      const DAYS = 140; // Approx 5 months
      
      // Generate the last DAYS in reverse (oldest first)
      for (let i = DAYS - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        const timestamp = Math.floor(date.getTime() / 1000);
        const dayStart = timestamp;
        const dayEnd = timestamp + 86400;
        
        let count = 0;
        for (const [ts, val] of Object.entries(calendarData)) {
          const t = parseInt(ts);
          if (t >= dayStart && t < dayEnd) {
            count += (val as number);
          }
        }
        
        let level = styles.heatLevel0;
        if (count > 4) level = styles.heatLevel4;
        else if (count >= 3) level = styles.heatLevel3;
        else if (count >= 2) level = styles.heatLevel2;
        else if (count >= 1) level = styles.heatLevel1;
        
        const dateString = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        
        heatBoxes.push(
          <div 
            key={i} 
            className={`${styles.heatBox} ${level}`} 
            title={`${dateString}\nLeetCode\n${count} submissions`}
          />
        );
      }
      
      return heatBoxes;
    } catch (e) {
      console.error("Error parsing calendar data", e);
      return Array.from({ length: 140 }).map((_, i) => (
        <div key={i} className={`${styles.heatBox} ${styles.heatLevel0}`} title="Error loading data" />
      ));
    }
  };

  return (
    <section className={`container section ${styles.activitySection}`}>
      <h2 className="section-title">Live Developer Activity</h2>
      
      <div className={styles.grid}>
        {/* GitHub Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <GithubIcon size={20} />
            GitHub
          </div>
          
          {loading ? <div className={styles.loading}>Loading...</div> : (
            <>
              {github?.error ? (
                <div className={styles.loading}>{github.error}</div>
              ) : (
                <>
                  <div className={styles.statGrid}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Public Repos</span>
                      <span className={styles.statValue}>{github?.public_repos || 0}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Followers</span>
                      <span className={styles.statValue}>{github?.followers || 0}</span>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* LeetCode Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Code size={20} />
            LeetCode
          </div>
          
          {loading ? <div className={styles.loading}>Loading...</div> : (
            <>
              {leetcode?.error ? (
                <div className={styles.loading}>{leetcode.error}</div>
              ) : (
                <>
                  <div className={styles.statGrid}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Total Solved</span>
                      <span className={styles.statValue}>
                        {leetcode?.matchedUser?.submitStats?.acSubmissionNum?.find((s: any) => s.difficulty === "All")?.count || "N/A"}
                      </span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Ranking</span>
                      <span className={styles.statValue}>{leetcode?.matchedUser?.profile?.ranking || "N/A"}</span>
                    </div>
                  </div>
                  
                  <div className={styles.heatmapContainer} style={{ marginTop: '2rem' }}>
                    <div className={styles.statLabel} style={{ marginBottom: '1rem', width: '100%' }}>Activity Heatmap</div>
                    {generateLeetCodeHeatmap()}
                  </div>
                  
                  <div style={{ marginTop: '2rem' }}>
                    <div className={styles.statLabel} style={{ marginBottom: '1rem' }}>Recently Solved</div>
                    <div className={styles.questionList}>
                      {leetcode?.recentAcSubmissionList?.slice(0, 3).map((q: any) => (
                        <div key={q.id} className={styles.questionItem}>
                          <span className={styles.questionTitle}>{q.title}</span>
                          <span className={`${styles.questionDifficulty} ${styles.diffMedium}`}>Solved</span>
                        </div>
                      )) || <div className={styles.loading}>Data temporarily unavailable</div>}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* CodeChef Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Trophy size={20} />
            CodeChef
          </div>
          
          {loading ? <div className={styles.loading}>Loading...</div> : (
            <>
              {codechef?.error ? (
                <div className={styles.loading}>{codechef.error}</div>
              ) : (
                <>
                  <div className={styles.statGrid}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Rating</span>
                      <span className={styles.statValue}>{codechef?.rating || 1486}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Stars</span>
                      <span className={styles.statValue}>{codechef?.stars || "2★"}</span>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '2rem' }}>
                    <div className={styles.statLabel} style={{ marginBottom: '1rem' }}>Achievements</div>
                    <div className={styles.questionList}>
                      {codechef?.recent_achievements?.map((a: any, i: number) => (
                        <div key={i} className={styles.questionItem}>
                          <span className={styles.questionTitle}>{a.contest}</span>
                          <span className={`${styles.questionDifficulty} ${styles.diffEasy}`}>{a.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        
      </div>
    </section>
  );
}
