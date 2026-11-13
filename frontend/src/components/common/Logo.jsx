import React from 'react';

export default function Logo({ size = 'md', variant = 'full', theme = 'dark', className = '' }) {
  // Size classes
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: { title: 'text-sm font-bold tracking-tight', tag: 'text-[9px] tracking-wider' },
    md: { title: 'text-base font-extrabold tracking-tight', tag: 'text-[10px] tracking-widest' },
    lg: { title: 'text-2xl font-black tracking-tight', tag: 'text-xs tracking-widest' },
    xl: { title: 'text-3xl font-black tracking-wider', tag: 'text-sm tracking-widest' },
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aapdaGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="aapdaGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Outer Radar Rings (Wave pulses) */}
          <path
            d="M 12,50 A 38,38 0 0,1 88,50"
            stroke="url(#aapdaGradPrimary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 22,50 A 28,28 0 0,1 78,50"
            stroke="url(#aapdaGradAccent)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.95"
          />


          {/* Bottom protective cradling hands / basin */}
          <path
            d="M 16,52 C 22,78 40,88 50,88 C 60,88 78,78 84,52 C 76,68 60,78 50,78 C 40,78 24,68 16,52 Z"
            fill="url(#aapdaGradPrimary) "
            opacity="0.9"
          />

          {/* Protective Eye / Iris outer */}
          <ellipse cx="50" cy="46" rx="20" ry="12" fill="white" opacity="0.15" />
          <path
            d="M 30,46 Q 50,28 70,46 Q 50,64 30,46 Z"
            stroke="#38BDF8"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Center Alert Iris & Core Shield */}
          <circle cx="50" cy="46" r="7.5" fill="url(#shieldGrad)" />
          <path
            d="M 50,40 L 55,43 V 47 C 55,51 50,53 50,53 C 50,53 45,51 45,47 V 43, Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span
              className={`${textSizes[size].title} tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              AAPDA
            </span>
            <span
              className={`${textSizes[size].title} tracking-tight ${
                isLight ? 'text-sky-600' : 'text-sky-400'
              }`}
            >
              DRISHTI
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`mt-1 font-semibold uppercase ${textSizes[size].tag} ${
                isLight ? 'text-slate-500' : 'text-sky-200/70'
              }`}
            >
              Predict • Prepare • Protect
            </span>
          )}
        </div>
      )}
    </div>
  );
}
