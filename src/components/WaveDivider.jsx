import React from 'react';

export default function WaveDivider({ 
  fillColor = "#F8FAFC", 
  flip = false,
  className = "" 
}) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 lg:h-14 block ${flip ? 'rotate-180' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 C300 45, 600 64, 900 35 C1050 20, 1150 40, 1200 48 L1200 64 L0 64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
