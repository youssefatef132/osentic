import { useEffect, useRef } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  opacity: number;
  type: 'octahedron' | 'icosahedron' | 'diamond';
  delay: number;
}

function OctahedronSVG({ size, color }: { size: number; color: string }) {
  const s = size;
  const h = s * 0.7;
  return (
    <svg width={s * 2} height={s * 2} viewBox={`${-s} ${-s} ${s * 2} ${s * 2}`} fill="none">
      {/* Top to equator edges */}
      <line x1="0" y1={-h} x2={s} y2="0" stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={-h} x2={-s} y2="0" stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={-h} x2="0" y2={s * 0.6} stroke={color} strokeWidth="0.8" opacity="0.5" />
      <line x1="0" y1={-h} x2="0" y2={-s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      {/* Equator */}
      <line x1={s} y1="0" x2="0" y2={s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1={s} y1="0" x2="0" y2={-s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1={-s} y1="0" x2="0" y2={s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1={-s} y1="0" x2="0" y2={-s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      {/* Bottom */}
      <line x1="0" y1={h} x2={s} y2="0" stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={h} x2={-s} y2="0" stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={h} x2="0" y2={s * 0.6} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={h} x2="0" y2={-s * 0.6} stroke={color} strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function IcosahedronSVG({ size, color }: { size: number; color: string }) {
  const s = size;
  return (
    <svg width={s * 2.2} height={s * 2.2} viewBox={`${-s * 1.1} ${-s * 1.1} ${s * 2.2} ${s * 2.2}`} fill="none">
      {/* Simplified icosahedron wireframe approximation */}
      <polygon
        points={`0,${-s} ${s * 0.95},${-s * 0.3} ${s * 0.59},${s * 0.8} ${-s * 0.59},${s * 0.8} ${-s * 0.95},${-s * 0.3}`}
        stroke={color}
        strokeWidth="1.1"
        fill="none"
        opacity="0.9"
      />
      {/* Inner star */}
      <polygon
        points={`0,${-s * 0.45} ${s * 0.43},${-s * 0.14} ${s * 0.27},${s * 0.36} ${-s * 0.27},${s * 0.36} ${-s * 0.43},${-s * 0.14}`}
        stroke={color}
        strokeWidth="0.9"
        fill="none"
        opacity="0.6"
      />
      {/* Connect outer to inner */}
      <line x1="0" y1={-s} x2="0" y2={-s * 0.45} stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1={s * 0.95} y1={-s * 0.3} x2={s * 0.43} y2={-s * 0.14} stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1={s * 0.59} y1={s * 0.8} x2={s * 0.27} y2={s * 0.36} stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1={-s * 0.59} y1={s * 0.8} x2={-s * 0.27} y2={s * 0.36} stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1={-s * 0.95} y1={-s * 0.3} x2={-s * 0.43} y2={-s * 0.14} stroke={color} strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

function DiamondSVG({ size, color }: { size: number; color: string }) {
  const s = size;
  return (
    <svg width={s * 2} height={s * 2.4} viewBox={`${-s} ${-s * 1.2} ${s * 2} ${s * 2.4}`} fill="none">
      {/* Top crown */}
      <line x1="0" y1={-s * 1.2} x2={-s} y2={-s * 0.3} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={-s * 1.2} x2={s} y2={-s * 0.3} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1="0" y1={-s * 1.2} x2={-s * 0.4} y2={-s * 0.3} stroke={color} strokeWidth="0.9" opacity="0.7" />
      <line x1="0" y1={-s * 1.2} x2={s * 0.4} y2={-s * 0.3} stroke={color} strokeWidth="0.9" opacity="0.7" />
      {/* Girdle */}
      <line x1={-s} y1={-s * 0.3} x2={-s * 0.4} y2={-s * 0.3} stroke={color} strokeWidth="1" opacity="0.8" />
      <line x1={-s * 0.4} y1={-s * 0.3} x2={s * 0.4} y2={-s * 0.3} stroke={color} strokeWidth="1" opacity="0.8" />
      <line x1={s * 0.4} y1={-s * 0.3} x2={s} y2={-s * 0.3} stroke={color} strokeWidth="1" opacity="0.8" />
      {/* Pavilion */}
      <line x1={-s} y1={-s * 0.3} x2="0" y2={s} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1={s} y1={-s * 0.3} x2="0" y2={s} stroke={color} strokeWidth="1.2" opacity="0.9" />
      <line x1={-s * 0.4} y1={-s * 0.3} x2="0" y2={s} stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1={s * 0.4} y1={-s * 0.3} x2="0" y2={s} stroke={color} strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

const SHAPES: Shape[] = [
  { id: 1, x: 8, y: 12, size: 38, speed: 6, rotX: 15, rotY: 25, rotZ: 10, rotSpeedX: 0.4, rotSpeedY: 0.3, opacity: 0.7, type: 'octahedron', delay: 0 },
  { id: 2, x: 82, y: 10, size: 44, speed: 9, rotX: -20, rotY: 35, rotZ: -15, rotSpeedX: -0.3, rotSpeedY: 0.5, opacity: 0.65, type: 'icosahedron', delay: 1.5 },
  { id: 3, x: 5, y: 65, size: 32, speed: 7, rotX: 30, rotY: -20, rotZ: 25, rotSpeedX: 0.5, rotSpeedY: -0.4, opacity: 0.6, type: 'diamond', delay: 3 },
  { id: 4, x: 88, y: 62, size: 36, speed: 8, rotX: -10, rotY: 40, rotZ: -20, rotSpeedX: -0.4, rotSpeedY: 0.3, opacity: 0.65, type: 'octahedron', delay: 2 },
  { id: 5, x: 75, y: 78, size: 28, speed: 10, rotX: 20, rotY: -30, rotZ: 15, rotSpeedX: 0.3, rotSpeedY: -0.5, opacity: 0.5, type: 'icosahedron', delay: 4 },
  { id: 6, x: 15, y: 82, size: 30, speed: 11, rotX: -25, rotY: 15, rotZ: -10, rotSpeedX: -0.5, rotSpeedY: 0.4, opacity: 0.55, type: 'diamond', delay: 1 },
];

export default function WireframeShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {SHAPES.map((shape) => (
        <div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            animation: `float ${shape.speed}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
            transform: `rotate3d(${shape.rotX}, ${shape.rotY}, ${shape.rotZ}, 0deg)`,
          }}
        >
          {shape.type === 'octahedron' && <OctahedronSVG size={shape.size} color="#c9a84c" />}
          {shape.type === 'icosahedron' && <IcosahedronSVG size={shape.size} color="#c9a84c" />}
          {shape.type === 'diamond' && <DiamondSVG size={shape.size} color="#b8960c" />}
        </div>
      ))}
    </div>
  );
}
