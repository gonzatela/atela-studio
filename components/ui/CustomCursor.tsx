'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 160, 89, 0.06), transparent 80%)`,
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-stone-400/40 bg-stone-900/5 backdrop-blur-[1px] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 12),
          y: mousePosition.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderColor: isHovered ? '#c5a059' : 'rgba(10, 10, 12, 0.3)',
          backgroundColor: isHovered ? 'rgba(197, 160, 89, 0.12)' : 'rgba(10, 10, 12, 0.03)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      />
    </>
  );
};
