"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Each line typed out in sequence, CLI boot-screen style.
const BOOT_LINES = [
  { text: "booting dokimachine.sys v4.0 ...", tag: null },
  { text: "loading kernel modules", tag: "OK" },
  { text: "mounting /doki         [ engineering, photography ]", tag: "OK" },
  { text: "mounting /dokimachine  [ music, dj sets ]", tag: "OK" },
  { text: "initializing display", tag: "OK" },
  { text: "welcome, operator_", tag: null },
];

const LINE_PAUSE = 200; // ms pause after a line finishes typing
const CHAR_SPEED = 14; // ms per character

export default function TerminalBootIntro({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typing, setTyping] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const doneTimer = setTimeout(onComplete, 450);
      return () => clearTimeout(doneTimer);
    }

    const fullText = BOOT_LINES[lineIndex].text;
    let charIndex = 0;
    setTyping("");

    const typeInterval = setInterval(() => {
      charIndex += 1;
      setTyping(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
          setLineIndex((i) => i + 1);
        }, LINE_PAUSE);
      }
    }, CHAR_SPEED);

    return () => clearInterval(typeInterval);
  }, [lineIndex, onComplete]);

  // Let impatient visitors skip with a click or key press.
  useEffect(() => {
    window.addEventListener("keydown", onComplete);
    return () => window.removeEventListener("keydown", onComplete);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center px-6 cursor-pointer"
      onClick={onComplete}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
    >
      <div className="w-full max-w-xl font-mono text-xs sm:text-sm text-teal-300/90 space-y-2">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <span>{line.text}</span>
            {line.tag && <span className="text-teal-400 ml-auto pl-4">[ {line.tag} ]</span>}
          </div>
        ))}
        {lineIndex < BOOT_LINES.length && (
          <div className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <span>{typing}</span>
            <span className="inline-block w-2 h-4 bg-teal-300 animate-pulse" />
          </div>
        )}
      </div>

      <p className="absolute bottom-8 text-[10px] tracking-widest uppercase text-white/20 font-mono">
        click or press any key to skip
      </p>
    </motion.div>
  );
}
