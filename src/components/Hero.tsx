import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import WireframeShapes from './WireframeShapes';
import PerfumeBottle from './PerfumeBottle';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const bottleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (textRef.current) textRef.current.classList.add('opacity-100', 'translate-y-0');
    }, 300);
    const timer2 = setTimeout(() => {
      if (bottleRef.current) bottleRef.current.classList.add('opacity-100', 'translate-y-0');
    }, 600);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fdfaf5 0%, #f5f0e8 45%, #ede5d5 100%)',
      }}
    >
      {/* Floating wireframe shapes */}
      <WireframeShapes />

      {/* Silk ribbon decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* Left text content */}
          <div
            ref={textRef}
            className="flex-1 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <p className="section-label mb-6">Est. MMXXIV — Paris</p>

            <h1 className="font-serif font-light text-obsidian leading-none mb-6">
              <span className="block text-6xl lg:text-7xl xl:text-8xl tracking-brand">
                OSCENTIC
              </span>
              <span
                className="block text-2xl lg:text-3xl xl:text-4xl font-light mt-3 italic"
                style={{ color: '#7a6208', letterSpacing: '0.05em' }}
              >
                The Art of Scent
              </span>
            </h1>

            <div className="divider-gold" />

            <p
              className="font-sans font-light text-obsidian/60 text-sm leading-relaxed max-w-md mx-auto mb-10"
              style={{ lineHeight: '1.8' }}
            >
              Where ancient botanical alchemy meets contemporary luxury.
              Each fragrance is an intimate story — crafted from the world's
              most coveted essences in our Parisian atelier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={onDiscoverClick}
                className="btn-gold-solid group"
              >
                <span className="flex items-center gap-3">
                  Discover the Collection
                  <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </span>
              </button>
              <a href="#scent-finder" className="btn-gold group">
                <span>Find Your Scent</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-10 justify-center">
              {[
                { value: '12', label: 'Bespoke Fragrances' },
                { value: '47', label: 'Rare Botanicals' },
                { value: '8', label: 'Years of Craft' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-serif text-3xl font-light gold-text"
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-obsidian/50 font-sans mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center / Right: Bottle */}
          <div
            ref={bottleRef}
            className="flex-1 flex flex-col items-center justify-center opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow behind bottle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(201,168,76,0.18) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
                aria-hidden="true"
              />

              {/* Floating bottle */}
              <div
                style={{
                  animation: 'float 7s ease-in-out infinite',
                  filter: 'drop-shadow(0 32px 48px rgba(10,10,10,0.14)) drop-shadow(0 4px 12px rgba(201,168,76,0.2))',
                }}
              >
                <PerfumeBottle width={220} />
              </div>
            </div>

            {/* Bottle platform */}
            <div className="mt-4 text-center">
              <p className="text-[9px] tracking-ultra-wide uppercase font-sans text-obsidian/40">
                Signature Collection — 50ml
              </p>
            </div>
          </div>

          {/* Right text (desktop balance) */}
          <div
            className="hidden xl:flex flex-1 flex-col items-end text-right opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500"
            style={{ animationDelay: '0.9s' }}
            ref={(el) => {
              if (el) setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 900);
            }}
          >
            <div className="space-y-8">
              {[
                { label: 'Top Notes', notes: 'Bergamot · Neroli · Cardamom' },
                { label: 'Heart Notes', notes: 'Iris · Rose de Mai · Jasmine' },
                { label: 'Base Notes', notes: 'Amber · Sandalwood · Vetiver' },
              ].map((note) => (
                <div key={note.label} className="border-r-2 border-gold-400/30 pr-6">
                  <p className="text-[9px] tracking-ultra-wide uppercase text-gold-400 font-sans mb-1">
                    {note.label}
                  </p>
                  <p className="font-serif italic text-obsidian/60 text-sm">
                    {note.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] tracking-ultra-wide uppercase font-sans text-obsidian">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
