/* ═══ DATA ═══════════════════════════════════════════════════════════ */

const PRODUCTS = [
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
    style: 'light',
    intensity: 'Intense',
    rating: 4.9,
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
    style: 'dark',
    intensity: 'Moderate',
    rating: 4.8,
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
    style: 'light',
    intensity: 'Sheer',
    rating: 5.0,
  },
];

const QUESTIONS = [
  {
    question: 'What mood does your ideal scent evoke?',
    subtitle: 'Choose the atmosphere that resonates with you',
    options: [
      { label: 'Fresh & Airy', desc: 'Like morning light through silk curtains', value: 'fresh', icon: '◇' },
      { label: 'Rich & Woody', desc: 'Like ancient forests after dark rain', value: 'woody', icon: '◈' },
    ],
  },
  {
    question: 'When do you wear your signature fragrance?',
    subtitle: 'Select the occasion that speaks to your ritual',
    options: [
      { label: 'Daylight Radiance', desc: 'Brunch, galleries, golden afternoons', value: 'day', icon: '◎' },
      { label: 'Evening Allure', desc: 'Private dinners, moonlit encounters', value: 'evening', icon: '◉' },
    ],
  },
  {
    question: 'Which essence captivates you most?',
    subtitle: 'Your instinctive choice reveals your olfactory soul',
    options: [
      { label: 'Floral Whispers', desc: 'Iris, rose, jasmine — the language of petals', value: 'floral', icon: '✦' },
      { label: 'Amber Depths', desc: 'Warm resins, musks — skin-close intimacy', value: 'amber', icon: '✧' },
    ],
  },
];

const RESULTS = {
  fresh_day_floral:    { name: 'Velours Blanc',   subtitle: 'Eau de Parfum Précieuse', description: 'Pure white musks and powdered iris — your luminous daylight companion.', price: 540 },
  fresh_day_amber:     { name: 'Lumière Dorée',   subtitle: 'Eau de Parfum Légère',    description: 'Effervescent neroli over warm amber — radiant, golden, utterly you.', price: 450 },
  fresh_evening_floral:{ name: 'Velours Blanc',   subtitle: 'Eau de Parfum Précieuse', description: 'Ethereal florals that bloom beautifully under evening light.', price: 540 },
  fresh_evening_amber: { name: 'Lumière Dorée',   subtitle: 'Eau de Parfum Légère',    description: 'Golden warmth that transforms into something magical after dark.', price: 450 },
  woody_day_floral:    { name: 'Iris Noire',       subtitle: 'Signature Eau de Parfum', description: 'Iris root and smoky depth — a daytime statement of rare confidence.', price: 490 },
  woody_day_amber:     { name: 'Lumière Dorée',   subtitle: 'Eau de Parfum Légère',    description: 'Sandalwood warmth softened by golden amber — effortlessly captivating.', price: 450 },
  woody_evening_floral:{ name: 'Iris Noire',       subtitle: 'Signature Eau de Parfum', description: 'A nocturnal iris — smoky, mysterious, utterly commanding.', price: 490 },
  woody_evening_amber: { name: 'Iris Noire',       subtitle: 'Signature Eau de Parfum', description: 'Obsidian oud and amber warmth — your evening signature.', price: 490 },
};

/* ═══ CART STATE ═════════════════════════════════════════════════════ */

let cartItems = [];

function addToCart(product) {
  const existing = cartItems.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  }
  renderCart();
  updateCartBadge();
}

function removeFromCart(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const count = cartItems.reduce((s, i) => s + i.quantity, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const foot = document.getElementById('cart-foot');
  const countEl = document.getElementById('cart-head-count');
  const totalEl = document.getElementById('cart-total');

  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  countEl.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;

  if (cartItems.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p class="cart-empty-title">Your cart is empty</p>
        <p class="cart-empty-sub">Discover our collection</p>
      </div>`;
    foot.style.display = 'none';
  } else {
    list.innerHTML = cartItems.map(item => `
      <div class="cart-item">
        <div class="cart-item-left">
          <div class="cart-item-icon">
            <img src="../logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png" alt="OSCENTIC"/>
          </div>
          <div>
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-meta">Qty ${item.quantity} · 50ml</p>
          </div>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">EGP ${item.price * item.quantity}</span>
          <button class="cart-remove" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
          </button>
        </div>
      </div>`).join('');
    foot.style.display = 'block';
    totalEl.textContent = `EGP ${total}`;
  }
}

/* ═══ CART DRAWER ════════════════════════════════════════════════════ */

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══ NAVBAR ═════════════════════════════════════════════════════════ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

let mobileMenuOpen = false;
function closeMobileMenu() {
  mobileMenuOpen = false;
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('menu-icon').style.display = '';
  document.getElementById('close-icon').style.display = 'none';
  document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'false');
}

function initMobileMenu() {
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    document.getElementById('mobile-menu').classList.toggle('open', mobileMenuOpen);
    document.getElementById('menu-icon').style.display = mobileMenuOpen ? 'none' : '';
    document.getElementById('close-icon').style.display = mobileMenuOpen ? '' : 'none';
    document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', String(mobileMenuOpen));
  });
}

/* ═══ HERO ANIMATIONS ════════════════════════════════════════════════ */

function initHero() {
  setTimeout(() => document.getElementById('hero-text').classList.add('visible'), 300);
  setTimeout(() => document.getElementById('hero-bottle').classList.add('visible'), 600);
  setTimeout(() => {
    const notes = document.getElementById('hero-notes');
    if (notes) notes.classList.add('visible');
  }, 900);

  document.getElementById('hero-discover-btn').addEventListener('click', () => {
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
  });
}

/* ═══ MINI BOTTLE SVG ════════════════════════════════════════════════ */

function miniBottleSVG(product) {
  const id = product.id;
  const isDark = product.style === 'dark';
  const liqStop2 = isDark ? '#5a3e08' : '#c9a84c';
  const labelDark = isDark ? '#1a1a1a' : '#fdfaf5';
  const labelLight = isDark ? '#0a0a0a' : '#ede5d5';
  const nameColor = isDark ? '#f5f0e8' : '#0a0a0a';
  const volColor = isDark ? '#c9a84c' : '#6b5210';

  return `<svg width="100" height="165" viewBox="0 0 100 165" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="liq-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e8c97a" stop-opacity=".9"/>
      <stop offset="50%" stop-color="${product.liquidColor}" stop-opacity=".92"/>
      <stop offset="100%" stop-color="${liqStop2}" stop-opacity=".85"/>
    </linearGradient>
    <linearGradient id="glass-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="white" stop-opacity=".3"/>
      <stop offset="40%" stop-color="white" stop-opacity=".06"/>
      <stop offset="100%" stop-color="white" stop-opacity=".15"/>
    </linearGradient>
    <linearGradient id="neck-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8a6218"/>
      <stop offset="50%" stop-color="#e8c97a"/>
      <stop offset="100%" stop-color="#8a6218"/>
    </linearGradient>
    <linearGradient id="cap-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,.9)"/>
      <stop offset="100%" stop-color="rgba(220,210,200,.8)"/>
    </linearGradient>
    <linearGradient id="label-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${labelDark}" stop-opacity=".97"/>
      <stop offset="100%" stop-color="${labelLight}" stop-opacity=".97"/>
    </linearGradient>
    <clipPath id="clip-${id}"><rect x="12" y="40" width="76" height="115" rx="12"/></clipPath>
  </defs>
  <rect x="45" y="12" width="3" height="10" rx="1.5" fill="url(#neck-${id})"/>
  <rect x="45" y="10" width="10" height="3" rx="1.5" fill="url(#neck-${id})"/>
  <rect x="31" y="20" width="38" height="22" rx="4" fill="url(#cap-${id})" stroke="rgba(201,168,76,.3)" stroke-width=".6"/>
  <rect x="34" y="22" width="14" height="18" rx="3" fill="white" fill-opacity=".12"/>
  <rect x="28" y="38" width="44" height="9" rx="2.5" fill="url(#neck-${id})"/>
  <rect x="12" y="40" width="76" height="115" rx="12" fill="url(#liq-${id})"/>
  <rect x="12" y="40" width="76" height="115" rx="12" fill="url(#glass-${id})"/>
  <rect x="12" y="40" width="76" height="115" rx="12" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
  <rect x="12" y="40" width="10" height="115" rx="12" fill="white" fill-opacity=".18" clip-path="url(#clip-${id})"/>
  <rect x="18" y="52" width="64" height="86" rx="3" fill="url(#label-${id})"/>
  <rect x="18" y="52" width="64" height="86" rx="3" fill="none" stroke="${product.accent}" stroke-width=".8"/>
  <rect x="21" y="55" width="58" height="80" rx="2" fill="none" stroke="${product.accent}" stroke-width=".3" stroke-opacity=".5"/>
  <path d="M18 59 L18 52 L25 52" stroke="${product.accent}" stroke-width=".9" fill="none"/>
  <path d="M82 59 L82 52 L75 52" stroke="${product.accent}" stroke-width=".9" fill="none"/>
  <path d="M18 131 L18 138 L25 138" stroke="${product.accent}" stroke-width=".9" fill="none"/>
  <path d="M82 131 L82 138 L75 138" stroke="${product.accent}" stroke-width=".9" fill="none"/>
  <image href="../logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png" x="26" y="56" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="50" y="112" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="9" font-weight="500" letter-spacing="2.5" fill="${nameColor}" fill-opacity=".95">OSCENTIC</text>
  <text x="50" y="126" text-anchor="middle" font-family="Inter, sans-serif" font-size="4.5" font-weight="300" letter-spacing="1.5" fill="${volColor}" fill-opacity=".7">EDP · 50 ML</text>
</svg>`;
}

/* ═══ STARS SVG ══════════════════════════════════════════════════════ */

function starsHTML(rating, accent) {
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    return `<svg class="star-svg" viewBox="0 0 24 24" fill="${filled ? accent : 'transparent'}" stroke="${accent}" stroke-width="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`;
  }).join('');
}

/* ═══ PRODUCTS ═══════════════════════════════════════════════════════ */

function renderProducts() {
  const grid = document.getElementById('products-grid');

  grid.innerHTML = PRODUCTS.map((product, index) => {
    const isDark = product.style === 'dark';
    const textColor = isDark ? '#f5f0e8' : '#0a0a0a';
    const subtitleColor = isDark ? `${product.accent}70` : '#8a621870';
    const descColor = isDark ? 'rgba(245,240,232,.55)' : 'rgba(10,10,10,.55)';
    const borderTopColor = isDark ? 'rgba(201,168,76,.1)' : 'rgba(201,168,76,.15)';
    const ratingColor = isDark ? `${product.accent}90` : '#8a621880';
    const priceUnitColor = isDark ? 'rgba(245,240,232,.4)' : 'rgba(10,10,10,.4)';
    const noteValColor = isDark ? 'rgba(245,240,232,.6)' : 'rgba(10,10,10,.6)';
    const qvBg = isDark ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.6)';
    const qvColor = isDark ? product.accent : '#0a0a0a';
    const overlayBg = isDark ? 'rgba(10,10,10,.4)' : 'rgba(245,240,232,.4)';

    return `
    <div class="animate-on-scroll" style="transition-delay:${index * 100}ms">
      <div class="product-card ${product.style}" data-product-id="${product.id}">
        <div class="card-bag-handle"><div class="card-bag-handle-arc"></div></div>
        <div class="card-intensity-badge" style="border-color:${product.accent}50;color:${isDark ? product.accent : '#8a6218'};background:${isDark ? 'rgba(201,168,76,.08)' : 'rgba(201,168,76,.06)'}">
          ${product.intensity}
        </div>
        <div class="card-bottle-area">
          <div class="card-bottle-inner">
            ${miniBottleSVG(product)}
          </div>
          <div class="card-quick-view" style="background:${overlayBg}">
            <button class="quick-view-btn" style="border-color:${product.accent};color:${qvColor};background:${qvBg}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Quick View
            </button>
          </div>
        </div>
        <div class="card-info" style="border-top-color:${borderTopColor}">
          <div class="card-stars">
            ${starsHTML(product.rating, product.accent)}
            <span class="card-rating" style="color:${ratingColor}">${product.rating.toFixed(1)}</span>
          </div>
          <h3 class="card-name" style="color:${textColor}">${product.name}</h3>
          <p class="card-subtitle" style="color:${subtitleColor}">${product.subtitle}</p>
          <p class="card-desc" style="color:${descColor}">${product.description}</p>
          <div class="card-notes">
            ${Object.entries(product.notes).map(([key, val]) => `
            <div class="card-note-row">
              <span class="note-key" style="color:${product.accent}">${key}</span>
              <div class="note-line" style="background:${product.accent}25"></div>
              <span class="note-val" style="color:${noteValColor}">${val}</span>
            </div>`).join('')}
          </div>
          <div class="card-footer">
            <div>
              <span class="card-price" style="color:${textColor}">EGP ${product.price}</span>
              <span class="card-price-unit" style="color:${priceUnitColor}">/ ${product.volume}</span>
            </div>
            <button class="card-add-btn"
              style="border-color:${product.accent}60;color:${isDark ? product.accent : '#6b5210'}"
              data-add-id="${product.id}"
              data-accent="${product.accent}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Quick Add
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  // Wire up add-to-cart buttons
  grid.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.addId);
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      addToCart(product);
      const accent = btn.dataset.accent;
      btn.textContent = '✓ Added';
      btn.style.background = accent;
      btn.style.color = '#0a0a0a';
      btn.style.borderColor = accent;
      setTimeout(() => {
        btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Quick Add`;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = `${accent}60`;
      }, 2000);
    });
  });
}

/* ═══ SCENT FINDER ═══════════════════════════════════════════════════ */

let quizStep = 0;
let quizAnswers = [];
let quizSelected = null;
let quizComplete = false;

function renderQuiz() {
  renderQuizDots();
  renderQuizContent();
}

function renderQuizDots() {
  const dotsEl = document.getElementById('quiz-dots');
  const stepEl = document.getElementById('quiz-step-text');
  const progressEl = document.getElementById('quiz-progress');

  if (quizComplete) {
    progressEl.style.display = 'none';
    return;
  }

  progressEl.style.display = '';
  stepEl.textContent = `${quizStep + 1} / ${QUESTIONS.length}`;

  dotsEl.innerHTML = QUESTIONS.map((_, i) => {
    const width = i === quizStep ? 24 : 8;
    const active = i <= quizStep;
    return `<div class="quiz-dot ${active ? 'active' : ''}" style="width:${width}px"></div>`;
  }).join('');
}

function transitionQuizContent(fn) {
  const content = document.getElementById('quiz-content');
  content.classList.add('fade-out');
  setTimeout(() => {
    fn();
    renderQuizDots();
    content.classList.remove('fade-out');
  }, 350);
}

function renderQuizContent() {
  const content = document.getElementById('quiz-content');

  if (quizComplete) {
    const key = quizAnswers.join('_');
    const result = RESULTS[key] || RESULTS['woody_evening_amber'];
    content.innerHTML = `
      <div class="quiz-result">
        <div class="result-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Your Signature Fragrance
        </div>
        <div class="result-logo">
          <img src="../logo/Gemini_Generated_Image_3geh913geh913geh-removebg-preview.png" alt="OSCENTIC"/>
        </div>
        <h3 class="result-name">${result.name}</h3>
        <p class="result-subtitle">${result.subtitle}</p>
        <div class="result-divider"></div>
        <p class="result-desc">${result.description}</p>
        <div class="result-actions">
          <button class="result-shop-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Shop ${result.name} — EGP ${result.price}
          </button>
          <button class="result-reset-btn" id="quiz-reset-btn">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.1"/></svg>
            Start Again
          </button>
        </div>
      </div>`;
    document.getElementById('quiz-reset-btn').addEventListener('click', () => {
      quizStep = 0; quizAnswers = []; quizSelected = null; quizComplete = false;
      transitionQuizContent(renderQuizContent);
    });
    return;
  }

  const q = QUESTIONS[quizStep];
  content.innerHTML = `
    <div class="quiz-question">
      <h3 class="quiz-q-text">${q.question}</h3>
      <p class="quiz-q-sub">${q.subtitle}</p>
    </div>
    <div class="quiz-options">
      ${q.options.map(opt => `
        <button class="quiz-option${quizSelected === opt.value ? ' selected' : ''}" data-value="${opt.value}">
          <div class="quiz-option-check">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="quiz-option-icon">${opt.icon}</div>
          <p class="quiz-option-label">${opt.label}</p>
          <p class="quiz-option-desc">${opt.desc}</p>
        </button>`).join('')}
    </div>
    <div class="quiz-next-wrap">
      <button class="quiz-next-btn${quizSelected ? ' ready' : ''}" id="quiz-next-btn">
        ${quizStep < QUESTIONS.length - 1 ? 'Next Question' : 'Reveal My Scent'}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>`;

  // Option selection
  content.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      quizSelected = btn.dataset.value;
      content.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const nextBtn = document.getElementById('quiz-next-btn');
      nextBtn.classList.add('ready');
    });
  });

  // Next/Reveal button
  document.getElementById('quiz-next-btn').addEventListener('click', () => {
    if (!quizSelected) return;
    const newAnswers = [...quizAnswers, quizSelected];
    if (quizStep < QUESTIONS.length - 1) {
      quizAnswers = newAnswers;
      quizStep++;
      quizSelected = null;
      transitionQuizContent(renderQuizContent);
    } else {
      quizAnswers = newAnswers;
      quizComplete = true;
      transitionQuizContent(renderQuizContent);
    }
  });
}

/* ═══ SCROLL ANIMATIONS ══════════════════════════════════════════════ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
          setTimeout(() => el.classList.add('in-view'), i * 150);
        });
        // Also check if the element itself has the class
        if (entry.target.classList.contains('animate-on-scroll')) {
          entry.target.classList.add('in-view');
        }
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section, footer').forEach(section => observer.observe(section));

  // Also observe individual elements that aren't in sections
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => io2.observe(el));
}

/* ═══ INIT ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initHero();
  renderProducts();
  renderQuiz();
  initScrollAnimations();
  renderCart();

  document.getElementById('cart-open-btn').addEventListener('click', openCart);
  document.getElementById('cart-close-btn').addEventListener('click', closeCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
});
