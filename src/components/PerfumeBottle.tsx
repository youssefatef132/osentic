interface PerfumeBottleProps {
  className?: string;
  width?: number;
}

export default function PerfumeBottle({ className = '', width = 220 }: PerfumeBottleProps) {
  const scale = width / 220;
  const h = 380;

  return (
    <svg
      width={width}
      height={h * scale}
      viewBox={`0 0 220 ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Glass gradient - amber liquid */}
        <linearGradient id="liquidGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c97a" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#d4a843" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#c4922a" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#b37f1a" stopOpacity="0.82" />
        </linearGradient>
        {/* Glass overlay */}
        <linearGradient id="glassOverlay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="30%" stopColor="white" stopOpacity="0.08" />
          <stop offset="70%" stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0.18" />
        </linearGradient>
        {/* Gold neck gradient */}
        <linearGradient id="goldNeckGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a07820" />
          <stop offset="25%" stopColor="#d4a843" />
          <stop offset="55%" stopColor="#e8c97a" />
          <stop offset="80%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8a6218" />
        </linearGradient>
        {/* Cap gradient */}
        <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#e8e0d5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#d0c8bc" stopOpacity="0.8" />
        </linearGradient>
        {/* Label cream bg */}
        <linearGradient id="labelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdfaf5" stopOpacity="0.96" />
          <stop offset="50%" stopColor="#f5f0e8" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#ede5d5" stopOpacity="0.96" />
        </linearGradient>
        {/* Spray nozzle */}
        <linearGradient id="nozzleGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6218" />
          <stop offset="50%" stopColor="#d4a843" />
          <stop offset="100%" stopColor="#8a6218" />
        </linearGradient>
        {/* Bottle body clip */}
        <clipPath id="bottleClip">
          <rect x="28" y="90" width="164" height="262" rx="26" ry="26" />
        </clipPath>
        {/* Reflection shimmer */}
        <linearGradient id="shimmerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        {/* Iris logo gradients */}
        <linearGradient id="irisGoldLbl" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#F2DA6A" />
          <stop offset="20%" stopColor="#D4AF37" />
          <stop offset="55%" stopColor="#C49A28" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        <linearGradient id="irisGoldDkLbl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A030" />
          <stop offset="100%" stopColor="#8A6010" />
        </linearGradient>
      </defs>

      {/* === SPRAY NOZZLE === */}
      <rect x="97" y="40" width="6" height="18" rx="2" fill="url(#nozzleGrad)" />
      <rect x="100" y="38" width="20" height="5" rx="2" fill="url(#nozzleGrad)" />

      {/* === CAP (transparent/frosted) === */}
      <rect x="72" y="50" width="76" height="42" rx="8" fill="url(#capGrad)" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8" />
      {/* Cap highlight */}
      <rect x="76" y="53" width="28" height="36" rx="5" fill="white" fillOpacity="0.15" />
      <rect x="80" y="55" width="14" height="8" rx="3" fill="white" fillOpacity="0.3" />

      {/* === GOLD NECK === */}
      <rect x="66" y="88" width="88" height="18" rx="4" fill="url(#goldNeckGrad)" />
      <rect x="72" y="88" width="76" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
      {/* Neck bottom ridge */}
      <rect x="60" y="103" width="100" height="6" rx="2" fill="url(#goldNeckGrad)" />

      {/* === BOTTLE BODY === */}
      {/* Liquid fill */}
      <rect x="28" y="90" width="164" height="262" rx="26" fill="url(#liquidGrad)" />

      {/* Glass edge highlights */}
      <rect x="28" y="90" width="164" height="262" rx="26" fill="url(#glassOverlay)" />

      {/* Glass border (transparent glass effect) */}
      <rect x="28" y="90" width="164" height="262" rx="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <rect x="30" y="92" width="160" height="258" rx="24" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />

      {/* Left glass edge shimmer */}
      <rect x="28" y="90" width="22" height="262" rx="26" fill="white" fillOpacity="0.22" clipPath="url(#bottleClip)" />
      {/* Right glass edge shimmer */}
      <rect x="170" y="90" width="22" height="262" rx="26" fill="white" fillOpacity="0.12" clipPath="url(#bottleClip)" />

      {/* === LABEL === */}
      {/* Outer ornate border frame */}
      <rect x="46" y="116" width="128" height="180" rx="6" fill="url(#labelGrad)" />
      {/* Label border - outer */}
      <rect x="46" y="116" width="128" height="180" rx="6" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
      {/* Label border - inner double line */}
      <rect x="51" y="121" width="118" height="170" rx="4" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.6" />
      <rect x="54" y="124" width="112" height="164" rx="3" fill="none" stroke="#c9a84c" strokeWidth="0.4" strokeOpacity="0.4" />

      {/* Art Deco corner ornaments */}
      {/* Top-left corner */}
      <path d="M46 126 L46 116 L56 116" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M46 122 L50 122 L50 118" stroke="#c9a84c" strokeWidth="0.7" fill="none" strokeOpacity="0.6" />
      {/* Top-right corner */}
      <path d="M174 126 L174 116 L164 116" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M174 122 L170 122 L170 118" stroke="#c9a84c" strokeWidth="0.7" fill="none" strokeOpacity="0.6" />
      {/* Bottom-left corner */}
      <path d="M46 286 L46 296 L56 296" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M46 290 L50 290 L50 294" stroke="#c9a84c" strokeWidth="0.7" fill="none" strokeOpacity="0.6" />
      {/* Bottom-right corner */}
      <path d="M174 286 L174 296 L164 296" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M174 290 L170 290 L170 294" stroke="#c9a84c" strokeWidth="0.7" fill="none" strokeOpacity="0.6" />

      {/* Decorative top divider */}
      <line x1="60" y1="135" x2="160" y2="135" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.5" />
      <path d="M108 132 L110 135 L112 132" stroke="#c9a84c" strokeWidth="0.6" fill="none" strokeOpacity="0.7" />

      {/* === IRIS LOGO on label === */}
      <image
        href="/logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png"
        x="76"
        y="134"
        width="68"
        height="68"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Decorative bottom divider */}
      <line x1="65" y1="202" x2="155" y2="202" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* OSCENTIC text on label */}
      <text
        x="110"
        y="230"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="5"
        fill="#0a0a0a"
        fillOpacity="0.9"
      >
        OSCENTIC
      </text>

      {/* Subtitle text */}
      <text
        x="110"
        y="248"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="5.5"
        fontWeight="400"
        letterSpacing="2.5"
        fill="#0a0a0a"
        fillOpacity="0.55"
      >
        EAU DE PARFUM
      </text>

      {/* Floral decoration bottom of label */}
      <path d="M85 268 Q90 263 95 268 Q100 273 105 268 Q110 263 115 268 Q120 273 125 268 Q130 263 135 268" stroke="#c9a84c" strokeWidth="0.6" fill="none" strokeOpacity="0.45" />

      {/* ml text */}
      <text
        x="110"
        y="285"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="5"
        fontWeight="300"
        letterSpacing="1"
        fill="#0a0a0a"
        fillOpacity="0.4"
      >
        50 ml · 1.7 FL. OZ.
      </text>

      {/* Shimmer overlay for realism */}
      <rect x="28" y="90" width="42" height="262" rx="26" fill="url(#shimmerGrad)" clipPath="url(#bottleClip)" opacity="0.6" />

      {/* Bottom reflection */}
      <ellipse cx="110" cy="352" rx="70" ry="8" fill="rgba(180,140,40,0.08)" />
    </svg>
  );
}
