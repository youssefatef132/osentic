import { useEffect, useRef } from 'react';
import IrisLogo from './IrisLogo';

const PILLARS = [
  {
    number: '01',
    title: 'The Botanist\'s Archive',
    body:
      'We source from a curated network of family-owned distilleries — iris fields in Tuscany, rose farms in Grasse, wild oud harvesters in Cambodia. Every ingredient is chosen with the obsession of a collector.',
  },
  {
    number: '02',
    title: 'The Perfumer\'s Hand',
    body:
      'Our master perfumers work in silence, guided only by instinct and memory. No algorithmic shortcuts. No trend forecasting. Each formula is composed across seasons, refined across years.',
  },
  {
    number: '03',
    title: 'The Alchemist\'s Studio',
    body:
      'Maceration, distillation, absolute extraction — the ancient arts practiced to exacting modern standards. Our Paris atelier is both laboratory and sanctum, where patience is the primary ingredient.',
  },
];

export default function Atelier() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 180);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="atelier"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Part 1: Cream background with text */}
      <div
        className="py-28 lg:py-36"
        style={{ background: 'linear-gradient(180deg, #f5f0e8 0%, #ede5d5 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Decorative art deco panel */}
            <div className="animate-on-scroll order-2 lg:order-1">
              <div
                className="relative aspect-[3/4] max-w-sm mx-auto"
                style={{
                  background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                {/* Outer frame lines */}
                <div className="absolute inset-4 border pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.12)' }} />
                <div className="absolute inset-6 border pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.06)' }} />

                {/* Art Deco corner details */}
                {[
                  'top-4 left-4',
                  'top-4 right-4 rotate-90',
                  'bottom-4 left-4 -rotate-90',
                  'bottom-4 right-4 rotate-180',
                ].map((pos, i) => (
                  <div key={i} className={`absolute ${pos}`} aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M0 18 L0 0 L18 0" stroke="#c9a84c" strokeWidth="1.2" />
                      <path d="M4 18 L4 4 L18 4" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
                    </svg>
                  </div>
                ))}

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                  <IrisLogo size={80} id="atelier-panel" />

                  <div className="mt-6 text-center">
                    <p
                      className="font-serif text-2xl font-light tracking-brand"
                      style={{ color: '#f5f0e8', letterSpacing: '0.2em' }}
                    >
                      OSCENTIC
                    </p>
                    <div className="w-8 h-px mx-auto my-3" style={{ background: 'rgba(201,168,76,0.5)' }} />
                    <p className="text-[9px] tracking-ultra-wide uppercase font-sans" style={{ color: 'rgba(201,168,76,0.6)' }}>
                      Maison de Parfum
                    </p>
                    <p className="text-[8px] tracking-ultra-wide uppercase font-sans mt-1" style={{ color: 'rgba(201,168,76,0.35)' }}>
                      Paris · Est. MMXXIV
                    </p>
                  </div>

                  {/* Decorative horizontal line */}
                  <div className="mt-8 flex items-center gap-3 w-full max-w-[160px]">
                    <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                    <span className="text-xs font-serif" style={{ color: 'rgba(201,168,76,0.5)' }}>◇</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                  </div>

                  <p
                    className="mt-6 text-center font-serif italic text-sm font-light leading-relaxed"
                    style={{ color: 'rgba(245,240,232,0.35)', lineHeight: '1.7' }}
                  >
                    "To wear a fragrance<br />is to wear a memory<br />not yet made."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Story text */}
            <div className="animate-on-scroll order-1 lg:order-2">
              <p className="section-label mb-5">The Atelier</p>
              <h2 className="font-serif font-light text-5xl lg:text-6xl text-obsidian leading-none mb-6">
                A House Built<br />
                on <em className="italic" style={{ color: '#8a6218' }}>Devotion</em>
              </h2>
              <div className="w-14 h-px mb-8" style={{ background: '#c9a84c' }} />

              <div className="space-y-6 font-sans font-light text-sm text-obsidian/60" style={{ lineHeight: '1.9' }}>
                <p>
                  OSCENTIC was founded on a single conviction: that the highest form of luxury is something felt, not merely observed. In an industry saturated with celebrity collaborations and synthetic shortcuts, we chose the harder path — the ancient path.
                </p>
                <p>
                  Our Parisian atelier occupies a 19th-century building in the 6th arrondissement, its stone walls still fragrant with decades of maceration. Here, three master perfumers practice their craft with the quiet intensity of virtuoso musicians.
                </p>
                <p>
                  Every OSCENTIC fragrance requires a minimum of eighteen months from first concept to final formula. We do not rush. We do not compromise. We believe that true luxury is the product of extraordinary patience.
                </p>
              </div>

              <div className="mt-10">
                <a href="#collection" className="btn-dark group inline-flex">
                  <span>Explore the Collection</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Dark craftsmanship pillars */}
      <div
        className="py-24 lg:py-32"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="section-label mb-5" style={{ color: '#c9a84c' }}>Our Philosophy</p>
            <h2 className="font-serif font-light text-4xl lg:text-5xl text-cream-200 leading-none">
              The Three Pillars of Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.number}
                className="animate-on-scroll relative p-8 border"
                style={{
                  borderColor: 'rgba(201,168,76,0.12)',
                  background: 'rgba(255,255,255,0.02)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Number */}
                <p
                  className="font-serif font-light text-6xl leading-none mb-6"
                  style={{
                    color: 'rgba(201,168,76,0.15)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {pillar.number}
                </p>
                {/* Divider */}
                <div className="w-8 h-px mb-5" style={{ background: 'rgba(201,168,76,0.4)' }} />
                {/* Title */}
                <h3 className="font-serif font-light text-xl text-cream-200 mb-4 leading-tight">
                  {pillar.title}
                </h3>
                {/* Body */}
                <p
                  className="font-sans font-light text-xs text-cream-200/45"
                  style={{ lineHeight: '1.85' }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3: Full-width quote */}
      <div
        className="py-20 lg:py-28 text-center"
        style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #fdfaf5 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
            <IrisLogo size={36} id="atelier-quote" className="mx-6" />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
          </div>
          <blockquote className="font-serif font-light text-3xl lg:text-4xl xl:text-5xl text-obsidian leading-relaxed italic mb-8">
            "We do not create fragrances.<br />
            <span style={{ color: '#8a6218' }}>We compose memories</span><br />
            you haven't lived yet."
          </blockquote>
          <cite className="text-[10px] tracking-ultra-wide uppercase font-sans text-obsidian/40 not-italic">
            — Maison OSCENTIC, Paris
          </cite>
        </div>
      </div>
    </section>
  );
}
