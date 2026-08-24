"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const ANIMATION_COMPLETE_TIME = 2350;
const AUTO_COMPLETE_TIME = 5000;
const SIGNATURE_SRC = "/images/brand/doki-signature-new.svg";
const SIGNATURE_ANIMATION_SRC = "/images/brand/doki-logo-animation-new-alpha.webp";
const EASE_OUT = [0.22, 1, 0.36, 1];
const WARP_EASE = [0.7, 0, 0.84, 0];
const WARP_RAYS = Array.from({ length: 12 }, (_, index) => index * 30);

export default function TerminalBootIntro({ onComplete }) {
  const { copy } = useLandingLocale();
  const skipButtonRef = useRef(null);
  const animationTimerRef = useRef(null);
  const [animationFailed, setAnimationFailed] = useState(false);

  useEffect(() => {
    skipButtonRef.current?.focus();
    const finishTimer = window.setTimeout(onComplete, AUTO_COMPLETE_TIME);

    const handleKeyDown = (event) => {
      if (!["Escape", "Enter", " "].includes(event.key)) return;
      event.preventDefault();
      onComplete();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(finishTimer);
      window.clearTimeout(animationTimerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(7px)" }}
      transition={{ duration: 0.65, ease: WARP_EASE }}
      className="fixed inset-0 z-[1000] flex cursor-pointer items-center justify-center overflow-hidden bg-[var(--claris-ink)] px-5 text-white"
      onClick={onComplete}
      role="dialog"
      aria-modal="true"
      aria-label={copy.intro.label}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(103,232,209,0.12),transparent_34%),radial-gradient(circle_at_72%_42%,rgba(192,132,252,0.11),transparent_28%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8, scale: 3.2, transition: { duration: 0.65, ease: WARP_EASE } }}
        transition={{ duration: 0.45 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-[42vw] max-h-[28rem] w-[42vw] max-w-[28rem] rounded-full border border-white/[0.035]"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 4.8, opacity: 0, transition: { duration: 0.65, ease: WARP_EASE } }}
        transition={{ duration: 1.25, ease: EASE_OUT }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0">
        {WARP_RAYS.map((rotation) => (
          <motion.span
            key={rotation}
            className="absolute left-0 top-0 h-px w-[38vmax] origin-left bg-gradient-to-r from-white/55 via-sky-300/25 to-transparent"
            style={{ rotate: rotation }}
            initial={{ opacity: 0, scaleX: 0.1 }}
            exit={{ opacity: [0, 0.55, 0], scaleX: [0.1, 1.25, 3] }}
            transition={{ duration: 0.65, ease: WARP_EASE, times: [0, 0.38, 1] }}
          />
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        exit={{ opacity: [0, 0.16, 0] }}
        transition={{ duration: 0.65, times: [0, 0.42, 1] }}
      />

      <div className="relative w-full max-w-[46rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.975 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 5.5, filter: "blur(9px)", transition: { duration: 0.65, ease: WARP_EASE } }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="relative aspect-video w-full"
        >
          <Image
            src={SIGNATURE_SRC}
            alt="Doki handwritten signature"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 736px"
            unoptimized
            className={`object-contain brightness-0 invert transition-opacity duration-300 [filter:brightness(0)_invert(1)_drop-shadow(0_0_7px_rgba(255,255,255,0.3))_drop-shadow(0_0_18px_rgba(103,232,209,0.42))] ${animationFailed ? "opacity-100" : "opacity-0"}`}
          />
          <Image
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${animationFailed ? "opacity-0" : "opacity-100"}`}
            src={SIGNATURE_ANIMATION_SRC}
            alt=""
            fill
            preload
            sizes="(max-width: 768px) 100vw, 736px"
            unoptimized
            aria-hidden="true"
            onLoad={() => {
              window.clearTimeout(animationTimerRef.current);
              animationTimerRef.current = window.setTimeout(onComplete, ANIMATION_COMPLETE_TIME);
            }}
            onError={() => setAnimationFailed(true)}
          />
        </motion.div>
      </div>

      <motion.button
        ref={skipButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-7 right-7 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--claris-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--claris-ink)] sm:bottom-9 sm:right-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
        transition={{ duration: 0.35, delay: 0.25 }}
        aria-label={copy.intro.skipLabel}
      >
        {copy.intro.skip}
      </motion.button>
    </motion.div>
  );
}
