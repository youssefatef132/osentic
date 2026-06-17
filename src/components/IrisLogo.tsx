const LOGO_SRC = '/logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png';

interface IrisLogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  className?: string;
  id?: string;
}

export default function IrisLogo({
  size = 64,
  showText = false,
  textColor = '#0a0a0a',
  className = '',
}: IrisLogoProps) {
  if (!showText) {
    return (
      <img
        src={LOGO_SRC}
        alt="OSCENTIC iris emblem"
        width={size}
        height={size}
        style={{ objectFit: 'contain', display: 'block' }}
        className={className}
      />
    );
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <img
        src={LOGO_SRC}
        alt="OSCENTIC iris emblem"
        width={size}
        height={size}
        style={{ objectFit: 'contain', display: 'block' }}
      />
      <span
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: `${Math.max(8, size * 0.18)}px`,
          fontWeight: 600,
          letterSpacing: '0.22em',
          color: textColor,
          display: 'block',
        }}
      >
        OSCENTIC
      </span>
    </div>
  );
}
