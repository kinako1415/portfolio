"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RotatingBadgeProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function RotatingBadge({
  children,
  duration = 8,
  className = "",
}: RotatingBadgeProps) {
  const rotatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rotatingRef.current) {
      gsap.to(rotatingRef.current, {
        duration: duration,
        repeat: -1,
        rotation: 360,
        ease: "none",
      });
    }
  }, [duration]);

  return (
    <div ref={rotatingRef} className={className}>
      {children}
    </div>
  );
}
