"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./TerminalCard.module.css";

interface CommandOutput {
  command: string;
  lines: string[];
}

const COMMANDS: Record<string, string[]> = {
  "about.sh": [
    "Running about.sh...",
    "--------------------------------------------------",
    "Name:       Debajyoti Dutta",
    "Role:       Senior Full Stack Developer",
    "Location:   Bangalore, KA, India",
    "Company:    Kibbcom India Pvt. Ltd.",
    "Mission:    Building high-performance, secure,",
    "            and beautifully-designed web & mobile apps.",
    "--------------------------------------------------"
  ],
  "skills.sh": [
    "Running skills.sh...",
    "--------------------------------------------------",
    "Languages:  JavaScript, TypeScript, Python, SQL, SASS",
    "Backend:    Node.js, Express.js, REST APIs, Microservices",
    "Frontend:   React, Next.js, HTML5, CSS3, Flexbox/Grid",
    "DevOps:     Docker, Azure DevOps, AWS, GCP, Linux, CI/CD",
    "Databases:  MongoDB, PostgreSQL, SQLite, Firebase",
    "Mobile:     React Native",
    "--------------------------------------------------"
  ],
  "certs.sh": [
    "Running certs.sh...",
    "--------------------------------------------------",
    "AZ-400:     Azure DevOps Engineer Expert",
    "AZ-204:     Azure Developer Associate",
    "AZ-900:     Azure Fundamentals",
    "HackerRank: 5 Star Developer (Python & Java)",
    "LeetCode:   Solved 500+ algorithmic problems",
    "--------------------------------------------------"
  ]
};

const TerminalCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about.sh");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState<number>(0);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Run initial command
    runCommand("about.sh");
  }, []);

  useEffect(() => {
    if (lineIndex < currentLines.length) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 120); // Delay between typing lines
      return () => clearTimeout(timer);
    }
  }, [lineIndex, currentLines]);

  useEffect(() => {
    // Auto-scroll to bottom of terminal content locally (not scrolling the whole browser window)
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lineIndex, history]);

  const runCommand = (cmd: string) => {
    setActiveTab(cmd);
    if (cmd === "clear") {
      setHistory([]);
      setCurrentLines([]);
      setLineIndex(0);
      return;
    }

    const lines = COMMANDS[cmd] || [];
    setHistory((prev) => [
      ...prev,
      { command: cmd, lines: lines }
    ]);
    setCurrentLines(lines);
    setLineIndex(0);
  };

  return (
    <div className={styles.terminal}>
      {/* Terminal Title Bar */}
      <div className={styles.titleBar}>
        <div className={styles.windowControls}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
        <div className={styles.title}>debajyoti@dutta: ~ (zsh)</div>
        <div className={styles.spacer}></div>
      </div>

      {/* Terminal Tab Bar */}
      <div className={styles.tabBar}>
        {["about.sh", "skills.sh", "certs.sh", "clear"].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => runCommand(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className={styles.body} ref={terminalBodyRef}>
        <div className={styles.crtOverlay}></div>
        <div className={styles.content}>
          <div className={styles.systemInfo}>
            Last login: {new Date().toDateString()} on ttys001
            <br />
            Welcome to Debajyoti's Developer Shell.
          </div>

          {/* Render historical executed commands */}
          {history.slice(0, -1).map((item, idx) => (
            <div key={idx} className={styles.commandBlock}>
              <div className={styles.promptLine}>
                <span className={styles.promptPrefix}>debajyoti@portfolio:~$</span>{" "}
                <span className={styles.commandText}>./{item.command}</span>
              </div>
              {item.lines.map((line, lIdx) => (
                <div key={lIdx} className={styles.outputText}>
                  {line}
                </div>
              ))}
            </div>
          ))}

          {/* Render actively typing command */}
          {activeTab !== "clear" && currentLines.length > 0 && (
            <div className={styles.commandBlock}>
              <div className={styles.promptLine}>
                <span className={styles.promptPrefix}>debajyoti@portfolio:~$</span>{" "}
                <span className={styles.commandText}>./{activeTab}</span>
              </div>
              {currentLines.slice(0, lineIndex).map((line, lIdx) => (
                <div key={lIdx} className={styles.outputText}>
                  {line}
                </div>
              ))}
            </div>
          )}

          {/* Active prompt with blinking cursor */}
          <div className={styles.promptLine}>
            <span className={styles.promptPrefix}>debajyoti@portfolio:~$</span>{" "}
            <span className={styles.cursor}></span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
