import React from 'react';

export default function Logo({ className = "h-11", showSubtext = true, lightMode = false }) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Aerodynamic Life Spiral Isotype */}
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
        {/* Subtle glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-emerald-400/20 to-amber-300/20 rounded-2xl transform rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-12"></div>
        
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 relative z-10 drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Cerulean Blue Spiral Gradient */}
            <linearGradient id="logoBlueGrad" x1="6" y1="6" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" />
              <stop offset="0.6" stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>

            {/* Lime / Mint Green Gradient */}
            <linearGradient id="logoGreenGrad" x1="48" y1="48" x2="16" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#84CC16" />
              <stop offset="0.5" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>

            {/* Subtle Yellow / Golden Sunrise Accent */}
            <linearGradient id="logoGoldGrad" x1="20" y1="12" x2="36" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Aerodynamic outer spiral arm (Blue) */}
          <path
            d="M27 6C15.402 6 6 15.402 6 27C6 38.598 15.402 48 27 48C38.598 48 48 38.598 48 27C48 18.2 41.5 11.5 32.5 11.5C23.5 11.5 17 18.5 17 26.5C17 33.5 22.5 38.5 29 38.5C34.5 38.5 38.5 34.5 38.5 29.5C38.5 25.5 35 22.5 31.5 22.5"
            stroke="url(#logoBlueGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner energetic breath arm (Lime Green) */}
          <path
            d="M27 19C32 17 37 18.5 38.5 23.5C39.5 27 37.5 31 33.5 32.5C30 33.8 26 32 24.5 28.5"
            stroke="url(#logoGreenGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Golden breath spark (Subtle yellow accent) */}
          <circle cx="29" cy="27" r="3" fill="url(#logoGoldGrad)" />
          <path
            d="M23 15C25 12 28 11.5 30 13"
            stroke="url(#logoGoldGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
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
          SOPLANDO <span className="text-sky-700 font-extrabold">VIDA</span>
        </span>
        {showSubtext && (
          <span
            className={`text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase ${
              lightMode ? 'text-sky-200' : 'text-slate-500'
            }`}
          >
            Hogar Protegido &bull; Fundación Social
          </span>
        )}
      </div>
    </div>
  );
}
