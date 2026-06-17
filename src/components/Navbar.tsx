import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import IrisLogo from './IrisLogo';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Our Story', href: '#atelier' },
    { label: 'Scent Finder', href: '#scent-finder' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <IrisLogo size={36} id="nav" />
              </div>
              <span
                className="font-serif font-light tracking-brand text-xl"
                style={{ color: scrolled ? '#0a0a0a' : '#0a0a0a', letterSpacing: '0.22em' }}
              >
                OSCENTIC
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-ultra-wide uppercase font-sans font-medium text-obsidian/70 hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-400 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onCartClick}
                className="relative flex items-center justify-center w-10 h-10 text-obsidian/70 hover:text-gold-400 transition-colors duration-300 group"
                aria-label="Shopping Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 text-obsidian text-[9px] font-medium flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 text-obsidian/70 hover:text-gold-400 transition-colors duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: 'rgba(245,240,232,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-ultra-wide uppercase font-sans font-medium text-obsidian/70 hover:text-gold-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
