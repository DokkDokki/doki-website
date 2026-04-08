"use client";
import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "16px",
      padding: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      border: "1px solid rgba(255,255,255,0.05)",
      marginTop: "0.5rem",
      marginBottom: "2rem"
    }}>
      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          color: "white",
          display: "flex",
          flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: isPlaying ? "0 0 25px var(--accent-glow)" : "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        {isPlaying ? (
           <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
             <rect x="6" y="4" width="4" height="16" rx="1"/>
             <rect x="14" y="4" width="4" height="16" rx="1"/>
           </svg>
        ) : (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "4px" }}>
             <path d="M7 4.5v15a.5.5 0 0 0 .765.424l13-7.5a.5.5 0 0 0 0-.848l-13-7.5A.5.5 0 0 0 7 4.5z"/>
           </svg>
        )}
      </button>

      {/* Track Info & Fake Progress */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.2rem", fontWeight: 600 }}>Midnight Genesis (Demo)</h3>
          <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: "10px" }}>WIP</span>
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>Doki • Electronic / Synthwave</p>
        
        {/* Progress Bar Container */}
        <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
          {/* Animated fill when playing */}
          <div style={{ 
            width: isPlaying ? "45%" : "0%", 
            height: "100%", 
            background: "linear-gradient(90deg, #c4b5fd, #8b5cf6)",
            transition: isPlaying ? "width 15s linear" : "width 0.5s ease"
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-inter), monospace" }}>
          <span>{isPlaying ? "1:24" : "0:00"}</span>
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
}
