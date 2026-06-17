import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Eye, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  volume: string;
  description: string;
  notes: { top: string; heart: string; base: string };
  accent: string;
  liquidColor: string;
  style: 'cream-label' | 'gold-stamp';
  intensity: string;
  rating: number;
  pexelsId: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Iris Noire',
    subtitle: 'Signature Eau de Parfum',
    price: 490,
    volume: '50ml',
    description: 'A commanding chiaroscuro of smoky iris root and obsidian oud, softened by a whisper of rose absolute.',
    notes: { top: 'Bergamot, Black Pepper', heart: 'Iris Root, Rose Absolute', base: 'Oud, Amber, Musk' },
    accent: '#c9a84c',
    liquidColor: '#8B6914',
    style: 'cream-label',
    intensity: 'Intense',
    rating: 4.9,
    pexelsId: '3059609',
  },
  {
    id: 2,
    name: 'Lumière Dorée',
    subtitle: 'Eau de Parfum Légère',
    price: 450,
    volume: '50ml',
    description: 'Golden sunlight crystallized into fragrance — effervescent neroli dances above a warm amber heart.',
    notes: { top: 'Neroli, Yuzu, Cardamom', heart: 'Iris, Jasmine Sambac', base: 'Amber, Sandalwood, Vetiver' },
    accent: '#e0b84e',
    liquidColor: '#D4A843',
    style: 'gold-stamp',
    intensity: 'Moderate',
    rating: 4.8,
    pexelsId: '3993449',
  },
  {
    id: 3,
    name: 'Velours Blanc',
    subtitle: 'Eau de Parfum Précieuse',
    price: 540,
    volume: '50ml',
    description: 'An ode to absolute refinement — pure white musks and powdered iris veiled in rare orris butter.',
    notes: { top: 'White Aldehydes, Lemon Blossom', heart: 'Orris Butter, Magnolia', base: 'White Musk, Cashmere Wood' },
    accent: '#c9a84c',
    liquidColor: '#C4922A',
    style: 'cream-label',
    intensity: 'Sheer',
    rating: 5.0,
    pexelsId: '6663359',
  },
];

function MiniBottle({ product, hovered }: { product: Product; hovered: boolean }) {
  const isDark = product.style === 'gold-stamp';

  return (
    <svg
      width="100"
      height="165"
      viewBox="0 0 100 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: hovered
          ? `drop-shadow(0 20px 36px rgba(10,10,10,0.2)) drop-shadow(0 0 16px ${product.accent}30)`
          : 'drop-shadow(0 12px 24px rgba(10,10,10,0.12))',
        transition: 'filter 0.5s ease',
      }}
    >
      <defs>
        <linearGradient id={`liq-${product.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c97a" stopOpacity="0.9" />
          <stop offset="50%" stopColor={product.liquidColor} stopOpacity="0.92" />
          <stop offset="100%" stopColor={isDark ? '#5a3e08' : '#c9a84c'} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={`glass-${product.id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="40%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={`neck-${product.id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6218" />
          <stop offset="50%" stopColor="#e8c97a" />
          <stop offset="100%" stopColor="#8a6218" />
        </linearGradient>
        <linearGradient id={`cap-${product.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(220,210,200,0.8)" />
        </linearGradient>
        <linearGradient id={`label-${product.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={isDark ? '#1a1a1a' : '#fdfaf5'} stopOpacity="0.97" />
          <stop offset="100%" stopColor={isDark ? '#0a0a0a' : '#ede5d5'} stopOpacity="0.97" />
        </linearGradient>
        <clipPath id={`clip-${product.id}`}>
          <rect x="12" y="40" width="76" height="115" rx="12" />
        </clipPath>
        <linearGradient id={`irisG-${product.id}`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#F2DA6A" />
          <stop offset="22%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#C49A28" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        <linearGradient id={`irisDk-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A030" />
          <stop offset="100%" stopColor="#8A6010" />
        </linearGradient>
      </defs>

      {/* Nozzle */}
      <rect x="45" y="12" width="3" height="10" rx="1.5" fill={`url(#neck-${product.id})`} />
      <rect x="45" y="10" width="10" height="3" rx="1.5" fill={`url(#neck-${product.id})`} />

      {/* Cap */}
      <rect x="31" y="20" width="38" height="22" rx="4" fill={`url(#cap-${product.id})`} stroke="rgba(201,168,76,0.3)" strokeWidth="0.6" />
      <rect x="34" y="22" width="14" height="18" rx="3" fill="white" fillOpacity="0.12" />

      {/* Neck */}
      <rect x="28" y="38" width="44" height="9" rx="2.5" fill={`url(#neck-${product.id})`} />

      {/* Body */}
      <rect x="12" y="40" width="76" height="115" rx="12" fill={`url(#liq-${product.id})`} />
      <rect x="12" y="40" width="76" height="115" rx="12" fill={`url(#glass-${product.id})`} />
      <rect x="12" y="40" width="76" height="115" rx="12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

      {/* Left shimmer */}
      <rect x="12" y="40" width="10" height="115" rx="12" fill="white" fillOpacity="0.18" clipPath={`url(#clip-${product.id})`} />

      {/* Label */}
      <rect x="18" y="52" width="64" height="86" rx="3" fill={`url(#label-${product.id})`} />
      <rect x="18" y="52" width="64" height="86" rx="3" fill="none" stroke={product.accent} strokeWidth="0.8" />
      <rect x="21" y="55" width="58" height="80" rx="2" fill="none" stroke={product.accent} strokeWidth="0.3" strokeOpacity="0.5" />

      {/* Corner marks */}
      <path d="M18 59 L18 52 L25 52" stroke={product.accent} strokeWidth="0.9" fill="none" />
      <path d="M82 59 L82 52 L75 52" stroke={product.accent} strokeWidth="0.9" fill="none" />
      <path d="M18 131 L18 138 L25 138" stroke={product.accent} strokeWidth="0.9" fill="none" />
      <path d="M82 131 L82 138 L75 138" stroke={product.accent} strokeWidth="0.9" fill="none" />

      {/* OSCENTIC Iris Logo */}
      <image
        href="/logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png"
        x="26"
        y="56"
        width="48"
        height="48"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Name text */}
      <text
        x="50"
        y="112"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="2.5"
        fill={isDark ? '#f5f0e8' : '#0a0a0a'}
        fillOpacity="0.95"
      >
        OSCENTIC
      </text>

      {/* Volume */}
      <text
        x="50"
        y="126"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="4.5"
        fontWeight="300"
        letterSpacing="1.5"
        fill={isDark ? '#c9a84c' : '#6b5210'}
        fillOpacity="0.7"
      >
        EDP · 50 ML
      </text>
    </svg>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const isDark = product.style === 'gold-stamp';

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className={`${isDark ? 'card-dark' : 'card-luxury'} group cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bag texture overlay (nod to black matte shopping bag aesthetic) */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Gold rope handle accent (top) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 flex items-start justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
        style={{ top: '-2px' }}
        aria-hidden="true"
      >
        <div className="w-16 h-3 border-l-2 border-r-2 border-t-2 rounded-t-full"
          style={{ borderColor: 'rgba(201,168,76,0.4)' }} />
      </div>

      {/* Intensity badge */}
      <div className="absolute top-5 right-5 z-10">
        <span
          className="text-[9px] tracking-ultra-wide uppercase font-sans px-2.5 py-1 border"
          style={{
            borderColor: `${product.accent}50`,
            color: isDark ? product.accent : '#8a6218',
            background: isDark ? 'rgba(201,168,76,0.08)' : 'rgba(201,168,76,0.06)',
          }}
        >
          {product.intensity}
        </span>
      </div>

      {/* Bottle display */}
      <div className="relative flex items-center justify-center pt-12 pb-4 px-8">
        <div
          style={{
            transform: hovered ? 'scale(1.05) translateY(-6px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <MiniBottle product={product} hovered={hovered} />
        </div>

        {/* Quick view overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: isDark ? 'rgba(10,10,10,0.4)' : 'rgba(245,240,232,0.4)' }}
        >
          <button
            className="flex items-center gap-2 text-[10px] tracking-ultra-wide uppercase font-sans px-4 py-2 border backdrop-blur-sm"
            style={{
              borderColor: product.accent,
              color: isDark ? product.accent : '#0a0a0a',
              background: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)',
            }}
            onClick={(e) => { e.stopPropagation(); }}
          >
            <Eye size={10} />
            Quick View
          </button>
        </div>
      </div>

      {/* Card content */}
      <div className={`px-7 pb-8 ${isDark ? 'border-t border-gold-400/10' : 'border-t border-gold-400/15'} pt-5`}>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              fill={i < Math.floor(product.rating) ? product.accent : 'transparent'}
              color={product.accent}
              strokeWidth={1}
            />
          ))}
          <span className="text-[9px] font-sans ml-1.5" style={{ color: isDark ? '#c9a84c90' : '#8a621880' }}>
            {product.rating.toFixed(1)}
          </span>
        </div>

        <h3
          className="font-serif text-2xl font-light mb-1 leading-tight"
          style={{ color: isDark ? '#f5f0e8' : '#0a0a0a' }}
        >
          {product.name}
        </h3>
        <p
          className="text-[10px] tracking-widest uppercase font-sans mb-4"
          style={{ color: isDark ? '#c9a84c70' : '#8a621870' }}
        >
          {product.subtitle}
        </p>

        <p
          className="font-sans font-light text-xs leading-relaxed mb-5"
          style={{ color: isDark ? 'rgba(245,240,232,0.55)' : 'rgba(10,10,10,0.55)', lineHeight: '1.7' }}
        >
          {product.description}
        </p>

        {/* Scent notes */}
        <div className="space-y-2 mb-6">
          {Object.entries(product.notes).map(([key, value]) => (
            <div key={key} className="flex items-start gap-3">
              <span
                className="text-[9px] tracking-ultra-wide uppercase font-sans w-12 flex-shrink-0 pt-0.5"
                style={{ color: product.accent }}
              >
                {key}
              </span>
              <div className="flex-1 h-px mt-2" style={{ background: `${product.accent}25` }} />
              <span
                className="text-[10px] font-sans font-light text-right"
                style={{ color: isDark ? 'rgba(245,240,232,0.6)' : 'rgba(10,10,10,0.6)' }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span
              className="font-serif text-2xl font-light"
              style={{ color: isDark ? '#f5f0e8' : '#0a0a0a' }}
            >
              EGP {product.price}
            </span>
            <span
              className="text-[10px] font-sans ml-1.5"
              style={{ color: isDark ? 'rgba(245,240,232,0.4)' : 'rgba(10,10,10,0.4)' }}
            >
              / {product.volume}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans px-5 py-3 transition-all duration-400"
            style={{
              background: added
                ? product.accent
                : (isDark ? 'transparent' : 'transparent'),
              border: `1px solid ${added ? product.accent : product.accent + '60'}`,
              color: added
                ? '#0a0a0a'
                : (isDark ? product.accent : '#6b5210'),
              transform: added ? 'scale(0.97)' : 'scale(1)',
            }}
          >
            <ShoppingBag size={11} strokeWidth={1.5} />
            {added ? 'Added' : 'Quick Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProductGridProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="py-28 lg:py-36"
      style={{ background: 'linear-gradient(180deg, #f5f0e8 0%, #fdfaf5 50%, #f5f0e8 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="section-label mb-5">The Collection</p>
          <h2 className="font-serif font-light text-5xl lg:text-6xl text-obsidian leading-none mb-6">
            Olfactory Portraits
          </h2>
          <div className="divider-gold" />
          <p className="font-sans font-light text-obsidian/55 text-sm max-w-lg mx-auto mt-6" style={{ lineHeight: '1.8' }}>
            Three distinct compositions, each an intimate dialogue between rare
            botanical essences and the art of the perfumer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className={`animate-on-scroll`} style={{ transitionDelay: `${i * 100}ms` }}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16 animate-on-scroll">
          <button className="btn-gold group">
            <span className="flex items-center gap-3">
              View Full Collection
              <span className="text-gold-400 group-hover:text-obsidian transition-colors duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
