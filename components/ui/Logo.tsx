'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Monogram Icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <rect width="38" height="38" rx="10" fill="#1C1917" />
        <path
          d="M19 9L27 27H23.5L21.8 23H16.2L14.5 27H11L19 9ZM17.4 19.5H20.6L19 15.5L17.4 19.5Z"
          fill="#C5A059"
        />
        <circle cx="28" cy="10" r="2.5" fill="#C5A059" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="font-display font-black text-xl tracking-tighter text-stone-900 group-hover:text-[#c5a059] transition-colors leading-none">
            ATELA STUDIO
          </span>
          <span className="text-[9px] tracking-[0.2em] text-stone-500 font-mono uppercase mt-1">
            DISEÑO WEB & IA
          </span>
        </div>
      )}
    </div>
  );
};
