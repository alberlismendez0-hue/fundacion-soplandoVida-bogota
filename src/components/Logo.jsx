import React from 'react';

export default function Logo({ className = "h-11", showSubtext = true, lightMode = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Spiral of Life Symbol */}
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-emerald-400/20 rounded-2xl transform rotate-6 scale-95 transition-transform group-hover:rotate-12"></div>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="logoSkyGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="logoMintGrad" x1="44" y1="44" x2="14" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Main outer breath swirl */}
          <path
            d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 16.5 36.5 11 29 11C21.5 11 16 16.5 16 23.5C16 29.5 20.5 34 26 34C30.5 34 34 30.5 34 26C34 22.5 31 20 28 20"
            stroke="url(#logoSkyGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner hopeful sprout / breath accent */}
          <path
            d="M25 18C28 16 32 17 33 21C34 24 32.5 28 29 29.5"
            stroke="url(#logoMintGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="27" cy="25" r="2.5" fill="#10B981" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-black tracking-tight text-lg leading-tight uppercase ${
            lightMode ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          SOPLANDO <span className="text-sky-600 font-extrabold">VIDA</span>
        </span>
        {showSubtext && (
          <span
            className={`text-[10.5px] font-medium tracking-wide uppercase ${
              lightMode ? 'text-sky-100/90' : 'text-slate-500'
            }`}
          >
            Hogar Protegido &bull; Fundación Social
          </span>
        )}
      </div>
    </div>
  );
}
