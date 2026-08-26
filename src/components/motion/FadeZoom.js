"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children, cloneElement, isValidElement } from "react";

export const motionEase = [0.22, 1, 0.36, 1];

export function FadeZoom({ children, className = "", delay = 0, as = "div" }) {
  const reduced = useReducedMotion();
  const Component = motion[as] || motion.div;
  return <Component className={className} initial={reduced ? false : { opacity: 0, y: 24, scale: 0.975 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-56px" }} transition={{ duration: 0.7, delay, ease: motionEase }}>{children}</Component>;
}

export function Stagger({ children, className = "", ...props }) {
  const reduced = useReducedMotion();
  const items = Children.map(children, (child, index) =>
    isValidElement(child) ? cloneElement(child, { staggerIndex: index }) : child,
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-56px" }}
      variants={{ hidden: {}, show: {} }}
      {...props}
    >
      {items}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", staggerIndex = 0 }) {
  const reduced = useReducedMotion();
  const visible = reduced
    ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.55,
          delay: staggerIndex * 0.08,
          ease: motionEase,
        },
      };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={visible}
      viewport={{ once: true, margin: "-56px" }}
    >
      {children}
    </motion.div>
  );
}
