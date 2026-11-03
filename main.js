/**
 * MOSCATH GARDEN APARTMENTS — Main Application Script
 * =====================================================
 * Requires: data.js loaded before this file.
 */

/* ============================================================
   HELPERS
   ============================================================ */

/** Build a WhatsApp wa.me URL for the given message */
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Resolve icons (feather-icon-like inline SVG) */
const ICONS = {
  wifi: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  zap: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  tv: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
  car: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  coffee: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  wind: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>',
  'user-check': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
  'map-pin': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  expand: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  whatsapp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.893 3.488"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.1 6.1l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.79 16l.13.92z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  location: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
};

function icon(name, size = 18) {
  const paths = ICONS[name] || '';
  // Replace width/height with size param
  return paths.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function initNavigation() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');

  // Scroll class
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  mobileClose.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(a => a.addEventListener('click', closeMobileMenu));

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}

/* ============================================================
   HERO
   ============================================================ */

function initHero() {
  // Parallax on desktop only (skip if reduced motion preferred)
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const heroImg = document.querySelector('.parallax-img');

  if (!heroImg || !mediaQuery.matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          heroImg.style.transform = `translateY(${scrollY * 0.25}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px 0px 0px' }
  );

  elements.forEach(el => observer.observe(el));

  // Force-trigger for elements already in viewport on page load
  setTimeout(() => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }, 100);
}

/* ============================================================
   APARTMENT TABS
   ============================================================ */

function initApartmentTabs() {
  const tabs = document.querySelectorAll('.apt-tab');
  const panels = document.querySelectorAll('.apt-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      panels.forEach(p => {
        p.classList.toggle('active', p.dataset.panel === target);
      });
    });
  });
}

/* ============================================================
   APARTMENT GALLERY (thumbnail switcher)
   ============================================================ */

function initApartmentGalleries() {
  document.querySelectorAll('.apt-panel').forEach(panel => {
    const main = panel.querySelector('.apt-gallery-main');
    const thumbs = panel.querySelectorAll('.apt-gallery-thumb');

    if (!main || !thumbs.length) return;

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        main.src = thumb.dataset.full;
        main.alt = thumb.alt;
        thumbs.forEach(t => t.classList.toggle('active', t === thumb));
      });
    });

    // Open lightbox on main image click
    main.addEventListener('click', () => {
      const srcs = Array.from(thumbs).map(t => t.dataset.full);
      openLightbox(srcs, Array.from(thumbs).map(t => t.alt), 0, main.src);
    });
  });
}

/* ============================================================
   FLOATING WHATSAPP BUTTON
   ============================================================ */

function initFloatingWA() {
  const btn = document.querySelector('.wa-float');
  if (!btn) return;

  // Show after short delay
  setTimeout(() => btn.classList.add('visible'), 1200);

  btn.href = waLink('Hello, I would like to enquire about booking an apartment at Moscath Garden Apartments. Could you please share availability and pricing?');
}

/* ============================================================
   LIGHTBOX
   ============================================================ */

let lightboxImages = [];
let lightboxAlts = [];
let lightboxIndex = 0;

function openLightbox(images, alts, startIndex, currentSrc) {
  lightboxImages = images;
  lightboxAlts = alts || images.map(() => '');
  // Find best starting match by src
  lightboxIndex = images.findIndex(s => s === currentSrc);
  if (lightboxIndex < 0) lightboxIndex = startIndex || 0;

  const overlay = document.querySelector('.lightbox-overlay');
  const img = overlay.querySelector('.lightbox-img');
  img.src = lightboxImages[lightboxIndex];
  img.alt = lightboxAlts[lightboxIndex] || '';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  const img = document.querySelector('.lightbox-overlay .lightbox-img');
  img.src = lightboxImages[lightboxIndex];
  img.alt = lightboxAlts[lightboxIndex] || '';
}

function initLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  if (!overlay) return;

  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  overlay.querySelector('.lightbox-prev').addEventListener('click', () => lightboxNav(-1));
  overlay.querySelector('.lightbox-next').addEventListener('click', () => lightboxNav(1));

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  // Gallery grid items
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      openLightbox(
        galleryImages.map(g => g.src),
        galleryImages.map(g => g.alt),
        i,
        item.querySelector('img').src
      );
    });
  });
}

/* ============================================================
   BOOKING FORM
   ============================================================ */

function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Populate apartment select
  const aptSelect = document.getElementById('bf-apartment');
  apartments.forEach(apt => {
    const opt = document.createElement('option');
    opt.value = apt.name;
    opt.textContent = apt.name;
    aptSelect.appendChild(opt);
  });

  // Validate helper
  function showError(fieldId, msg) {
    const el = document.getElementById(`err-${fieldId}`);
    if (el) {
      el.textContent = msg;
      el.classList.toggle('visible', !!msg);
    }
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(el => {
      el.textContent = '';
      el.classList.remove('visible');
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name = form.querySelector('#bf-name').value.trim();
    const apt  = form.querySelector('#bf-apartment').value;
    const checkin  = form.querySelector('#bf-checkin').value;
    const checkout = form.querySelector('#bf-checkout').value;
    const guests   = form.querySelector('#bf-guests').value;

    let valid = true;

    if (!name) { showError('name', 'Please enter your name.'); valid = false; }
    if (!apt)  { showError('apartment', 'Please select an apartment.'); valid = false; }
    if (!checkin)  { showError('checkin', 'Please select a check-in date.'); valid = false; }
    if (!checkout) { showError('checkout', 'Please select a check-out date.'); valid = false; }
    if (checkin && checkout && checkin >= checkout) {
      showError('checkout', 'Check-out must be after check-in.');
      valid = false;
    }

    if (!valid) return;

    const message = [
      `Hello, I would like to make a booking enquiry at Moscath Garden Apartments.`,
      ``,
      `Name: ${name}`,
      `Apartment: ${apt}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Guests: ${guests || '1'}`,
      ``,
      `Please confirm availability and next steps. Thank you.`,
    ].join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  });
}

/* ============================================================
   DOM BUILDERS
   ============================================================ */

function buildNavigation() {
  const nav = document.querySelector('.nav-links');
  const mobileNav = document.querySelector('.nav-mobile');
  const links = [
    { href: '#about',       label: 'About'      },
    { href: '#apartments',  label: 'Apartments' },
    { href: '#amenities',   label: 'Amenities'  },
    { href: '#gallery',     label: 'Gallery'    },
    { href: '#location',    label: 'Location'   },
    { href: '#testimonials',label: 'Reviews'    },
  ];

  nav.innerHTML = links
    .map(l => `<a href="${l.href}">${l.label}</a>`)
    .join('') +
    `<a href="#enquiry" class="nav-cta">Book Now</a>`;

  mobileNav.innerHTML = `
    <button class="nav-mobile-close" aria-label="Close menu">&times;</button>
    ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
    <a href="#enquiry" style="color:var(--gold)">Book Now</a>
  `;
}

function buildApartments() {
  const tabsEl = document.querySelector('.apt-tabs');
  const panelsEl = document.querySelector('.apt-panels');

  tabsEl.innerHTML = apartments.map((apt, i) => `
    <button
      class="apt-tab${i === 0 ? ' active' : ''}"
      data-tab="${apt.id}"
      role="tab"
      aria-selected="${i === 0}"
      aria-controls="panel-${apt.id}"
    >
      ${apt.name}
    </button>
  `).join('');

  panelsEl.innerHTML = apartments.map((apt, i) => `
    <div class="apt-panel${i === 0 ? ' active' : ''}" data-panel="${apt.id}" id="panel-${apt.id}" role="tabpanel">
      <div class="apt-layout">
        <div class="apt-gallery">
          <img
            class="apt-gallery-main"
            src="${apt.images[0]}"
            alt="${apt.name} interior view"
            loading="${i === 0 ? 'eager' : 'lazy'}"
          />
          <div class="apt-gallery-thumbs">
            ${apt.images.map((img, j) => `
              <img
                class="apt-gallery-thumb${j === 0 ? ' active' : ''}"
                src="${img}"
                data-full="${img}"
                alt="${apt.name} view ${j + 1}"
                loading="lazy"
                tabindex="0"
              />
            `).join('')}
          </div>
        </div>

        <div class="apt-info">
          <h3 class="apt-name">${apt.name}</h3>
          <div class="apt-price-row">
            <span class="apt-price">${apt.price}</span>
            <span class="apt-price-note">${apt.priceNote}</span>
          </div>
          <p class="apt-desc">${apt.desc}</p>
          <ul class="apt-features">
            ${apt.features.map(f => `
              <li class="apt-feature">
                ${icon('check', 14)}
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <a
            href="${waLink(`Hello, I would like to book ${apt.name} at Moscath Garden Apartments. Is it available?`)}"
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${icon('whatsapp', 16)}
            Book this apartment
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function buildAmenities() {
  const grid = document.querySelector('.amenities-wrap');
  grid.innerHTML = amenities.map(a => `
    <div class="amenity-item reveal">
      <div class="amenity-icon">${icon(a.icon, 22)}</div>
      <span class="amenity-label">${a.label}</span>
    </div>
  `).join('');
}

function buildGallery() {
  const grid = document.querySelector('.gallery-grid');
  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item reveal" tabindex="0" role="button" aria-label="View ${img.alt}">
      <img
        src="${img.src}"
        alt="${img.alt}"
        loading="lazy"
        width="600"
        height="400"
      />
      <div class="gallery-item-overlay">
        ${icon('expand', 22)}
      </div>
    </div>
  `).join('');

  // Keyboard support for gallery grid
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(
          galleryImages.map(g => g.src),
          galleryImages.map(g => g.alt),
          i,
          item.querySelector('img').src
        );
      }
    });
  });
}

function buildTestimonials() {
  const grid = document.querySelector('.testimonials-grid');
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${i + 1}">
      <p class="testimonial-text">${t.quote}</p>
      <div class="testimonial-author">${t.author}</div>
    </div>
  `).join('');
}

function buildNearby() {
  const list = document.querySelector('.location-nearby ul');
  list.innerHTML = nearbyHighlights.map(h => `<li>${h}</li>`).join('');
}

function buildFooter() {
  const foot = document.querySelector('ul.footer-links');
  const links = ['#about', '#apartments', '#amenities', '#gallery', '#location', '#enquiry'];
  const labels = ['About', 'Apartments', 'Amenities', 'Gallery', 'Location', 'Book Now'];
  foot.innerHTML = links.map((h, i) => `<li><a href="${h}">${labels[i]}</a></li>`).join('');

  const contact = document.querySelector('.footer-contact');
  contact.innerHTML = `
    <div class="footer-contact-item">
      ${icon('location', 14)}
      <span>${SITE.address}</span>
    </div>
    <div class="footer-contact-item">
      ${icon('phone', 14)}
      <span><a href="tel:${SITE.phone.replace(/\s/g, '')}">${SITE.phone}</a></span>
    </div>
    <div class="footer-contact-item">
      ${icon('mail', 14)}
      <span><a href="mailto:${SITE.email}">${SITE.email}</a></span>
    </div>
  `;
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  buildNavigation();
  buildApartments();
  buildAmenities();
  buildGallery();
  buildTestimonials();
  buildNearby();
  buildFooter();

  initNavigation();
  initHero();
  initReveal();
  initApartmentTabs();
  initApartmentGalleries();
  initFloatingWA();
  initLightbox();
  initBookingForm();
});
