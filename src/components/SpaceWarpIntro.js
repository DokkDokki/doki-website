"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpaceWarpIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState("warp"); // warp, bloom, exit

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = [];
    const numStars = 400;
    const speed = 0.05;
    let warpFactor = 0.01;
    let opacity = 1;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        prevZ: 0,
      });
    }

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Increase warp factor over time
      if (phase === "warp") {
        if (warpFactor < 60) {
          warpFactor *= 1.05;
        } else {
          setPhase("bloom");
        }
      }

      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 1.5;

      stars.forEach(star => {
        const oldX = (star.x / star.z) * 100 + width / 2;
        const oldY = (star.y / star.z) * 100 + height / 2;

        star.z -= speed * warpFactor;

        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const x = (star.x / star.z) * 100 + width / 2;
        const y = (star.y / star.z) * 100 + height / 2;

        ctx.beginPath();
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      if (phase === "exit") {
         opacity -= 0.1;
         if (opacity <= 0) {
            cancelAnimationFrame(animationFrameId);
            onComplete();
            return;
         }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "bloom") {
      // Stay in bloom for a moment then exit
      const timer = setTimeout(() => setPhase("exit"), 600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Bloom Overlay */}
      <AnimatePresence>
        {phase === "bloom" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white z-[1001]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "warp" && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative z-[1002] text-center"
            >
                <div className="flex flex-col items-center gap-4">              
                  <h2 className="text-white font-bold tracking-[1em] uppercase text-xs opacity-40">Loading...</h2>                  
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
