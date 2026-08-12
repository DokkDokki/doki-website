"use client";

import { motion, useReducedMotion } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1];

export function FadeZoom({ children, className = "", delay = 0, as = "div" }) {
  const reduced = useReducedMotion();
  const Component = motion[as] || motion.div;
  return <Component className={className} initial={reduced ? false : { opacity: 0, y: 24, scale: 0.975 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-56px" }} transition={{ duration: 0.7, delay, ease: motionEase }}>{children}</Component>;
}

export function Stagger({ children, className = "" }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-56px" }} variants={{ hidden: {}, show: { transition: reduced ? {} : { staggerChildren: 0.08 } } }}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }) {
  return <motion.div className={className} variants={{ hidden: { opacity: 0, y: 18, scale: 0.985 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: motionEase } } }}>{children}</motion.div>;
}
