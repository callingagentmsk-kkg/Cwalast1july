/* ==========================================================================
   CWA SCIENCE CLASSES — Main JS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll shadow ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // back to top button
    if (window.scrollY > 500) backTop.classList.add('show');
    else backTop.classList.remove('show');
  });

  /* ---------- Mobile drawer ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  function openDrawer(){ mobileDrawer.classList.add('open'); drawerOverlay.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeDrawer(){ mobileDrawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow=''; }
  navToggle && navToggle.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay && drawerOverlay.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-links a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ---------- Active nav link highlighting ---------- */
  const navLinkEls = document.querySelectorAll('.nav-links a');
  const tabbarLinkEls = document.querySelectorAll('.mobile-tabbar a');
  const sectionsForNav = ['home','about','batches','result','contact'];
  function setActiveNav(){
    let current = 'home';
    sectionsForNav.forEach(id => {
      const el = document.getElementById(id);
      if (el){
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = id;
      }
    });
    navLinkEls.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
    tabbarLinkEls.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  /* ---------- Back to top ---------- */
  const backTop = document.getElementById('backTop');
  backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  /* ==========================================================================
     REVEAL ON SCROLL
     ========================================================================== */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     COUNTER ANIMATION
     ========================================================================== */
  function animateCounter(el){
    const target = +el.getAttribute('data-count');
    const isPercent = el.textContent.includes('%');
    const hasPlus = el.innerHTML.includes('<small>+</small>') || el.textContent.includes('+');
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();
    function tick(now){
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * target);
      el.textContent = val + (isPercent ? '%' : '') + (hasPlus && !isPercent ? '+' : '');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + (isPercent ? '%' : '') + (hasPlus && !isPercent ? '+' : '');
    }
    requestAnimationFrame(tick);
  }
  const counterEls = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counterEls.forEach(el => counterObserver.observe(el));

  /* ==========================================================================
     HERO SLIDER
     ========================================================================== */
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('slideDots');
  let currentSlide = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');
  function goToSlide(i){
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (i + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  document.getElementById('slideNext').addEventListener('click', () => goToSlide(currentSlide + 1));
  document.getElementById('slidePrev').addEventListener('click', () => goToSlide(currentSlide - 1));
  let heroInterval = setInterval(() => goToSlide(currentSlide + 1), 4500);
  const heroSlider = document.getElementById('heroSlider');
  heroSlider.addEventListener('mouseenter', () => clearInterval(heroInterval));
  heroSlider.addEventListener('mouseleave', () => { heroInterval = setInterval(() => goToSlide(currentSlide + 1), 4500); });

  /* ==========================================================================
     BATCH TABS + CHAPTER RENDER
     ========================================================================== */
  const subjectTagClass = { physics:'tag-physics', chemistry:'tag-chemistry', maths:'tag-maths' };
  const subjectLabel = { physics:'Physics', chemistry:'Chemistry', maths:'Maths' };

  function renderChapters(batchKey){
    const grid = document.getElementById('grid-' + batchKey);
    if (!grid || grid.dataset.rendered) return;
    const chapters = BATCH_DATA[batchKey] || [];
    grid.innerHTML = chapters.map((ch, idx) => `
      <div class="chapter-card reveal" data-idx="${idx}">
        <div class="chapter-thumb">
          <img src="${ch.img}" alt="${ch.title}" loading="lazy">
          <span class="chapter-subject-tag ${subjectTagClass[ch.subject]}">${subjectLabel[ch.subject]}</span>
          <button class="play-btn" data-video="${ch.video}" data-title="${ch.title}" aria-label="Play Video"><i class="fa-solid fa-play"></i></button>
        </div>
        <div class="chapter-body">
          <h4>${ch.title}</h4>
          <p>${ch.desc}</p>
          <div class="chapter-meta">
            <span><i class="fa-solid fa-clock"></i> ${ch.duration}</span>
            <span><i class="fa-solid fa-video"></i> ${ch.lessons}</span>
          </div>
          <div class="chapter-actions">
            <button class="btn btn-navy btn-play" data-video="${ch.video}" data-title="${ch.title}"><i class="fa-solid fa-play"></i> Video देखें</button>
            <a class="btn btn-primary" href="${ch.pdf}" download><i class="fa-solid fa-file-pdf"></i> PDF Notes</a>
          </div>
        </div>
      </div>
    `).join('');
    grid.dataset.rendered = "true";

    // Attach reveal observer to newly created cards
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Attach video modal triggers
    grid.querySelectorAll('[data-video]').forEach(btn => {
      btn.addEventListener('click', () => openVideoModal(btn.getAttribute('data-video'), btn.getAttribute('data-title')));
    });
  }

  const batchTabs = document.querySelectorAll('.batch-tab');
  batchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-batch');
      batchTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.batch-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + key).classList.add('active');
      renderChapters(key);
    });
  });
  // Render first (default active) batch on load
  renderChapters('c9');

  // Footer quick links to specific batch
  document.querySelectorAll('[data-batch-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const key = link.getAttribute('data-batch-link');
      const targetTab = document.querySelector(`.batch-tab[data-batch="${key}"]`);
      if (targetTab) targetTab.click();
    });
  });

  /* ==========================================================================
     VIDEO MODAL
     ========================================================================== */
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const videoModalClose = document.getElementById('videoModalClose');
  function openVideoModal(videoId, title){
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    videoFrame.title = title || 'Lecture Video';
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeVideoModal(){
    videoFrame.src = '';
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  videoModalClose.addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });

  /* ==========================================================================
     WEEKLY TEST RESULT FORM (Front-end Demo)
     ========================================================================== */
  const resultForm = document.getElementById('resultForm');
  const resClass = document.getElementById('resClass');
  const resMobile = document.getElementById('resMobile');
  const resError = document.getElementById('resError');
  const resultPlaceholder = document.getElementById('resultPlaceholder');
  const resultCard = document.getElementById('resultCard');

  resMobile.addEventListener('input', () => {
    resMobile.value = resMobile.value.replace(/\D/g, '').slice(0, 10);
  });

  function seededRandom(seed){
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function generateDemoResult(cls, mobile){
    const seedBase = parseInt(mobile, 10) + parseInt(cls, 10) * 999;
    const subjects = RESULT_META[cls].subjects;
    let total = 0, totalMax = 0;
    const rows = subjects.map((sub, i) => {
      const r = seededRandom(seedBase + i * 7 + 1);
      const marks = Math.floor(28 + r * 22); // 28-50 out of 50
      total += marks; totalMax += 50;
      return { sub, marks, max:50 };
    });
    const percent = Math.round((total / totalMax) * 100);
    const rank = Math.max(1, Math.floor(seededRandom(seedBase + 99) * 30) + 1);
    let remarkText = 'Average', remarkClass = 'remark-average';
    if (percent >= 85){ remarkText = 'Excellent'; remarkClass = 'remark-excellent'; }
    else if (percent >= 65){ remarkText = 'Good'; remarkClass = 'remark-good'; }
    return { rows, total, totalMax, percent, rank, remarkText, remarkClass };
  }

  resultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cls = resClass.value;
    const mobile = resMobile.value.trim();
    const valid = cls && /^[0-9]{10}$/.test(mobile);

    if (!valid){
      resError.style.display = 'block';
      resultCard.classList.remove('show');
      resultPlaceholder.style.display = 'flex';
      return;
    }
    resError.style.display = 'none';

    const data = generateDemoResult(cls, mobile);
    const meta = RESULT_META[cls];

    document.getElementById('resTestName').textContent = meta.testName;
    document.getElementById('resClassDisplay').textContent = 'Class ' + cls + 'th';
    document.getElementById('resMobileDisplay').textContent = mobile.replace(/(\d{5})(\d{5})/, '$1 $2');
    const today = new Date();
    document.getElementById('resDate').textContent = today.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
    document.getElementById('resRank').textContent = data.rank;

    const tbody = document.getElementById('resTableBody');
    tbody.innerHTML = data.rows.map(r => `
      <tr><td>${r.sub}</td><td class="marks">${r.marks}</td><td>${r.max}</td></tr>
    `).join('');

    document.getElementById('resTotal').textContent = data.total;
    document.getElementById('resPercentLabel').textContent = data.percent + '%';
    const remarkEl = document.getElementById('resRemark');
    remarkEl.textContent = data.remarkText;
    remarkEl.className = 'result-remark ' + data.remarkClass;

    resultPlaceholder.style.display = 'none';
    resultCard.classList.add('show');

    // animate progress bar
    const fill = document.getElementById('resProgressFill');
    fill.style.width = '0%';
    requestAnimationFrame(() => { setTimeout(() => { fill.style.width = data.percent + '%'; }, 60); });

    // smooth scroll into view on mobile
    if (window.innerWidth < 860){
      resultCard.scrollIntoView({ behavior:'smooth', block:'center' });
    }
  });

  /* ==========================================================================
     TESTIMONIAL SLIDER
     ========================================================================== */
  const testiTrack = document.getElementById('testiTrack');
  const testiCards = testiTrack.querySelectorAll('.testi-card');
  let testiIndex = 0;
  function getCardsPerView(){
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 980) return 2;
    return 3;
  }
  function updateTestiTrack(){
    const cardWidth = testiCards[0].offsetWidth + 22; // gap
    const maxIndex = Math.max(0, testiCards.length - getCardsPerView());
    testiIndex = Math.min(testiIndex, maxIndex);
    testiTrack.style.transform = `translateX(-${testiIndex * cardWidth}px)`;
  }
  document.getElementById('testiNext').addEventListener('click', () => {
    const maxIndex = Math.max(0, testiCards.length - getCardsPerView());
    testiIndex = testiIndex >= maxIndex ? 0 : testiIndex + 1;
    updateTestiTrack();
  });
  document.getElementById('testiPrev').addEventListener('click', () => {
    const maxIndex = Math.max(0, testiCards.length - getCardsPerView());
    testiIndex = testiIndex <= 0 ? maxIndex : testiIndex - 1;
    updateTestiTrack();
  });
  window.addEventListener('resize', updateTestiTrack);

  /* ==========================================================================
     SMOOTH SCROLL FOR ANCHOR LINKS (offset for sticky navbar)
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href.length > 1){
        const target = document.querySelector(href);
        if (target){
          e.preventDefault();
          const offset = window.innerWidth < 860 ? 70 : 90;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior:'smooth' });
        }
      }
    });
  });

});
