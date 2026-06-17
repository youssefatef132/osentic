import { useState } from 'react';
import IrisLogo from './IrisLogo';
import { ChevronRight, RefreshCw, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: { label: string; desc: string; value: string; icon: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What mood does your ideal scent evoke?',
    subtitle: 'Choose the atmosphere that resonates with you',
    options: [
      { label: 'Fresh & Airy', desc: 'Like morning light through silk curtains', value: 'fresh', icon: '◇' },
      { label: 'Rich & Woody', desc: 'Like ancient forests after dark rain', value: 'woody', icon: '◈' },
    ],
  },
  {
    id: 2,
    question: 'When do you wear your signature fragrance?',
    subtitle: 'Select the occasion that speaks to your ritual',
    options: [
      { label: 'Daylight Radiance', desc: 'Brunch, galleries, golden afternoons', value: 'day', icon: '◎' },
      { label: 'Evening Allure', desc: 'Private dinners, moonlit encounters', value: 'evening', icon: '◉' },
    ],
  },
  {
    id: 3,
    question: 'Which essence captivates you most?',
    subtitle: 'Your instinctive choice reveals your olfactory soul',
    options: [
      { label: 'Floral Whispers', desc: 'Iris, rose, jasmine — the language of petals', value: 'floral', icon: '✦' },
      { label: 'Amber Depths', desc: 'Warm resins, musks — skin-close intimacy', value: 'amber', icon: '✧' },
    ],
  },
];

const RESULTS: Record<string, { name: string; subtitle: string; description: string; price: number }> = {
  // Combinations to results
  fresh_day_floral: { name: 'Velours Blanc', subtitle: 'Eau de Parfum Précieuse', description: 'Pure white musks and powdered iris — your luminous daylight companion.', price: 540 },
  fresh_day_amber: { name: 'Lumière Dorée', subtitle: 'Eau de Parfum Légère', description: 'Effervescent neroli over warm amber — radiant, golden, utterly you.', price: 450 },
  fresh_evening_floral: { name: 'Velours Blanc', subtitle: 'Eau de Parfum Précieuse', description: 'Ethereal florals that bloom beautifully under evening light.', price: 540 },
  fresh_evening_amber: { name: 'Lumière Dorée', subtitle: 'Eau de Parfum Légère', description: 'Golden warmth that transforms into something magical after dark.', price: 450 },
  woody_day_floral: { name: 'Iris Noire', subtitle: 'Signature Eau de Parfum', description: 'Iris root and smoky depth — a daytime statement of rare confidence.', price: 490 },
  woody_day_amber: { name: 'Lumière Dorée', subtitle: 'Eau de Parfum Légère', description: 'Sandalwood warmth softened by golden amber — effortlessly captivating.', price: 450 },
  woody_evening_floral: { name: 'Iris Noire', subtitle: 'Signature Eau de Parfum', description: 'A nocturnal iris — smoky, mysterious, utterly commanding.', price: 490 },
  woody_evening_amber: { name: 'Iris Noire', subtitle: 'Signature Eau de Parfum', description: 'Obsidian oud and amber warmth — your evening signature.', price: 490 },
};

export default function ScentFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [complete, setComplete] = useState(false);

  const currentQuestion = QUESTIONS[step];

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setTransitioning(true);
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setAnswers(newAnswers);
        setStep(step + 1);
        setSelected(null);
      } else {
        setAnswers(newAnswers);
        setComplete(true);
      }
      setTransitioning(false);
    }, 400);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setComplete(false);
    setTransitioning(false);
  };

  const getResult = () => {
    const key = answers.join('_');
    return RESULTS[key] || RESULTS['woody_evening_amber'];
  };

  return (
    <section
      id="scent-finder"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #141414 50%, #0f0f0f 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Art Deco corner ornaments */}
      <div className="absolute top-8 left-8 opacity-15" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 40 L0 0 L40 0" stroke="#c9a84c" strokeWidth="1" />
          <path d="M8 40 L8 8 L40 8" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-15" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 40 L60 0 L20 0" stroke="#c9a84c" strokeWidth="1" />
          <path d="M52 40 L52 8 L20 8" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-15" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 60 L40 60" stroke="#c9a84c" strokeWidth="1" />
          <path d="M8 20 L8 52 L40 52" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-15" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 20 L60 60 L20 60" stroke="#c9a84c" strokeWidth="1" />
          <path d="M52 20 L52 52 L20 52" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <IrisLogo size={52} id="finder-header" />
          </div>
          <p className="section-label mb-5" style={{ color: '#c9a84c' }}>Scent Finder</p>
          <h2 className="font-serif font-light text-5xl lg:text-6xl text-cream-200 leading-none mb-6">
            Discover Your{' '}
            <em className="italic" style={{ color: '#c9a84c' }}>Essence</em>
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: 'rgba(201,168,76,0.4)' }} />
          <p className="font-sans font-light text-cream-200/40 text-sm max-w-md mx-auto mt-6" style={{ lineHeight: '1.8' }}>
            Answer three questions. We'll reveal the OSCENTIC fragrance that was made for you.
          </p>
        </div>

        {/* Quiz container */}
        <div
          className="relative border"
          style={{
            borderColor: 'rgba(201,168,76,0.18)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Progress indicator */}
          {!complete && (
            <div className="flex items-center justify-between px-8 pt-8 pb-0">
              <div className="flex gap-2">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      width: i === step ? '24px' : '8px',
                      height: '2px',
                      background: i <= step ? '#c9a84c' : 'rgba(201,168,76,0.2)',
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] tracking-ultra-wide uppercase font-sans" style={{ color: 'rgba(201,168,76,0.5)' }}>
                {step + 1} / {QUESTIONS.length}
              </span>
            </div>
          )}

          <div
            className="px-8 lg:px-14 py-12"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            {!complete ? (
              <>
                {/* Question */}
                <div className="text-center mb-10">
                  <h3 className="font-serif font-light text-3xl lg:text-4xl text-cream-200 leading-tight mb-3">
                    {currentQuestion.question}
                  </h3>
                  <p className="font-sans font-light text-xs text-cream-200/40 tracking-wide">
                    {currentQuestion.subtitle}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selected === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className="group relative text-left p-7 border transition-all duration-400"
                        style={{
                          borderColor: isSelected ? '#c9a84c' : 'rgba(201,168,76,0.15)',
                          background: isSelected
                            ? 'rgba(201,168,76,0.08)'
                            : 'rgba(255,255,255,0.02)',
                        }}
                      >
                        {/* Selected indicator */}
                        {isSelected && (
                          <div
                            className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: '#c9a84c' }}
                          >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}

                        {/* Icon */}
                        <div
                          className="text-2xl mb-4 font-serif leading-none"
                          style={{ color: isSelected ? '#c9a84c' : 'rgba(201,168,76,0.35)' }}
                        >
                          {option.icon}
                        </div>

                        <p
                          className="font-serif text-xl font-light mb-2 leading-tight"
                          style={{ color: isSelected ? '#f5f0e8' : 'rgba(245,240,232,0.7)' }}
                        >
                          {option.label}
                        </p>
                        <p
                          className="font-sans font-light text-xs italic"
                          style={{ color: isSelected ? 'rgba(201,168,76,0.8)' : 'rgba(245,240,232,0.35)' }}
                        >
                          {option.desc}
                        </p>

                        {/* Hover border animation */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.3)' }}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Next button */}
                <div className="text-center">
                  <button
                    onClick={handleNext}
                    disabled={!selected}
                    className="inline-flex items-center gap-3 text-xs tracking-ultra-wide uppercase font-sans px-10 py-4 transition-all duration-500"
                    style={{
                      background: selected ? 'linear-gradient(135deg, #c9a84c, #e0b84e)' : 'rgba(201,168,76,0.08)',
                      color: selected ? '#0a0a0a' : 'rgba(201,168,76,0.3)',
                      cursor: selected ? 'pointer' : 'not-allowed',
                      transform: selected ? 'translateY(0)' : 'none',
                    }}
                  >
                    {step < QUESTIONS.length - 1 ? 'Next Question' : 'Reveal My Scent'}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </>
            ) : (
              /* Result */
              <div className="text-center py-4">
                <div
                  className="inline-flex items-center gap-2 text-[10px] tracking-ultra-wide uppercase font-sans px-4 py-2 mb-8"
                  style={{ background: 'rgba(201,168,76,0.1)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.25)' }}
                >
                  <Sparkles size={10} />
                  Your Signature Fragrance
                </div>

                <div className="mb-6">
                  <IrisLogo size={72} id="finder-result" className="mx-auto" />
                </div>

                <h3 className="font-serif font-light text-4xl lg:text-5xl text-cream-200 leading-none mb-3">
                  {getResult().name}
                </h3>
                <p className="text-[11px] tracking-ultra-wide uppercase font-sans mb-6" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  {getResult().subtitle}
                </p>

                <div className="w-12 h-px mx-auto mb-6" style={{ background: 'rgba(201,168,76,0.35)' }} />

                <p className="font-sans font-light text-sm text-cream-200/55 max-w-md mx-auto mb-10" style={{ lineHeight: '1.8' }}>
                  {getResult().description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button
                    className="inline-flex items-center gap-3 text-xs tracking-ultra-wide uppercase font-sans px-10 py-4"
                    style={{ background: 'linear-gradient(135deg, #c9a84c, #e0b84e)', color: '#0a0a0a' }}
                  >
                    <ShoppingBagIcon />
                    Shop {getResult().name} — EGP {getResult().price}
                  </button>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-3 text-xs tracking-ultra-wide uppercase font-sans px-8 py-4 border transition-colors duration-300 hover:border-gold-400"
                    style={{
                      borderColor: 'rgba(201,168,76,0.25)',
                      color: 'rgba(245,240,232,0.5)',
                    }}
                  >
                    <RefreshCw size={11} />
                    Start Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShoppingBagIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
