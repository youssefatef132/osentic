
import IrisLogo from './IrisLogo';

export default function Footer() {
  const links = {
    Collections: ['Signature Line', 'Seasonal Editions', 'Limited Editions', 'Gift Sets'],
    'The House': ['Our Story', 'The Atelier', 'Ingredients', 'Sustainability'],
    Services: ['Bespoke Consultation', 'Gift Wrapping', 'Fragrance Engraving', 'Corporate Gifting'],
    Contact: ['Paris Boutique', 'Online Boutique', 'Press Inquiries', 'Wholesale'],
  };

  return (
    <footer
      className="relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }}
    >
      {/* Top divider with pattern */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent)' }}
      />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <IrisLogo size={34} id="footer" />
              <span
                className="font-serif font-light text-xl tracking-brand"
                style={{ color: '#f5f0e8', letterSpacing: '0.2em' }}
              >
                OSCENTIC
              </span>
            </div>
            <p
              className="font-sans font-light text-xs leading-relaxed mb-8 max-w-xs"
              style={{ color: 'rgba(245,240,232,0.4)', lineHeight: '1.85' }}
            >
              A Parisian maison dedicated to the ancient art of fine perfumery.
              Every drop tells a story of rare botanicals, master craftsmanship,
              and uncompromising devotion to excellence.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-[9px] tracking-ultra-wide uppercase font-sans mb-3" style={{ color: 'rgba(201,168,76,0.6)' }}>
                Join the Circle
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 text-xs font-sans bg-transparent border-l border-t border-b outline-none placeholder-shown:text-cream-200/20 focus:text-cream-200"
                  style={{
                    borderColor: 'rgba(201,168,76,0.2)',
                    color: 'rgba(245,240,232,0.7)',
                    fontSize: '11px',
                  }}
                />
                <button
                  className="px-5 py-3 text-[9px] tracking-ultra-wide uppercase font-sans border transition-all duration-300"
                  style={{
                    borderColor: '#c9a84c',
                    background: 'rgba(201,168,76,0.1)',
                    color: '#c9a84c',
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-[9px] tracking-ultra-wide uppercase font-sans mb-5" style={{ color: '#c9a84c' }}>
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[11px] font-sans font-light transition-colors duration-300 hover:text-gold-400"
                      style={{ color: 'rgba(245,240,232,0.4)' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative center divider */}
        <div className="my-14 flex items-center gap-6">
          <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.1)' }} />
          <div className="flex items-center gap-4">
            {['◇', '◈', '◇'].map((sym, i) => (
              <span key={i} className="font-serif text-xs" style={{ color: 'rgba(201,168,76,0.25)' }}>
                {sym}
              </span>
            ))}
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.1)' }} />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans font-light" style={{ color: 'rgba(245,240,232,0.2)' }}>
            © 2024 Maison OSCENTIC. All rights reserved. Paris, France.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-sans font-light transition-colors duration-300"
                style={{ color: 'rgba(245,240,232,0.2)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
