import React from 'react';

export default function WaveDivider({ fromColor = 'bg-white', toColor = 'text-slate-50', flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${fromColor} ${flip ? 'rotate-180' : ''} -my-px`}>
      <svg 
        className={`relative block w-full h-6 sm:h-10 ${toColor} fill-current`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}