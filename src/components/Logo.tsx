import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "h-14", variant = "dark" }: LogoProps) {
  const isDark = variant === 'dark';
  
  // Colors based on the uploaded brand image
  // Dark mode (light variant): White letters, gold scale & details
  // Light mode (dark variant): Dark charcoal letters, gold scale & details
  const primaryColor = isDark ? "#111111" : "#FFFFFF";
  const goldColor = isDark ? "#C88A1A" : "#DFAC4B";
  const accentColor = isDark ? "#111111" : "#FFFFFF";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <svg 
        viewBox="0 0 500 500" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Monogram and Scale of Justice Group */}
        <g transform="translate(10, 0)">
          {/* Main Monogram loop (The giant calligraphic P loop) */}
          {/* Sweeps from top-left, curves around right, and swoops under bottom-left */}
          <path 
            d="M 185,120 C 290,120 370,185 370,245 C 370,305 285,345 185,345 C 135,345 95,320 80,290 C 72,274 78,258 92,266 C 112,278 142,292 185,292 C 255,292 320,260 320,215 C 320,170 255,138 185,138 C 165,138 145,142 130,150 L 120,132 C 140,124 162,120 185,120 Z" 
            fill={primaryColor} 
            opacity="0.95"
          />

          {/* Bottom Calligraphic Swoop (Left-to-right tail) */}
          <path 
            d="M 115,295 C 185,348 320,348 395,302 C 285,325 185,315 115,295 Z" 
            fill={goldColor} 
          />

          {/* Elegant Serif Letter E (Left side of monogram) */}
          {/* Features highly detailed classic serif brackets and terminals */}
          <path 
            d="M 140,160 H 215 V 182 H 180 V 215 H 205 V 236 H 180 V 280 H 220 V 302 H 140 V 280 H 155 V 182 H 140 Z" 
            fill={primaryColor} 
          />

          {/* Elegant Serif Letter P (Center-right of monogram) */}
          {/* Stem and bowl with serif brackets, overlapping the E */}
          <path 
            d="M 198,160 H 265 C 298,160 318,174 318,204 C 318,232 298,246 265,246 H 218 V 302 H 198 V 280 H 213 V 182 H 198 Z M 218,182 V 224 H 260 C 278,224 290,216 290,204 C 290,192 278,182 260,182 H 218 Z" 
            fill={accentColor}
            stroke={primaryColor}
            strokeWidth="1.5"
          />

          {/* Detailed Scale of Justice (Positioned on the right, overlapping the loop) */}
          <g transform="translate(42, 18) scale(0.92)">
            {/* Scale Base */}
            <path d="M 320,260 L 360,260 L 355,252 L 325,252 Z" fill={primaryColor} />
            <path d="M 315,260 L 365,260 L 365,264 L 315,264 Z" fill={primaryColor} />
            
            {/* Scale Pillar (Central column) */}
            <path d="M 338,175 H 342 V 252 H 338 Z" fill={primaryColor} />
            <circle cx="340" cy="170" r="4.5" fill={goldColor} />
            <path d="M 335,163 L 340,148 L 345,163 Z" fill={goldColor} />
            
            {/* Scale Crossbeam */}
            <path d="M 295,182 C 315,178 365,178 385,182" stroke={goldColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="340" cy="181" r="2.5" fill={primaryColor} />
            
            {/* Left Pan and Hanging Strings */}
            <line x1="295" y1="182" x2="283" y2="228" stroke={goldColor} strokeWidth="1" />
            <line x1="295" y1="182" x2="307" y2="228" stroke={goldColor} strokeWidth="1" />
            <path d="M 280,228 C 280,237 310,237 310,228 Z" fill={goldColor} />
            <circle cx="295" cy="182" r="1.5" fill={primaryColor} />
            
            {/* Right Pan and Hanging Strings */}
            <line x1="385" y1="182" x2="373" y2="228" stroke={goldColor} strokeWidth="1" />
            <line x1="385" y1="182" x2="397" y2="228" stroke={goldColor} strokeWidth="1" />
            <path d="M 370,228 C 370,237 400,237 400,228 Z" fill={goldColor} />
            <circle cx="385" cy="182" r="1.5" fill={primaryColor} />
          </g>
        </g>
      </svg>
      
      <div className="flex flex-col">
        <span className={`font-sans text-lg sm:text-xl tracking-wider font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
          Eribaldo Pinheiro
        </span>
        <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] font-medium text-[#C88A1A] uppercase mt-0.5">
          — ADVOGADO —
        </span>
      </div>
    </div>
  );
}
