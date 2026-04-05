// ─── DARK MODE ───────────────────────────────────────────
function toggleMode() {
  document.body.classList.toggle('light-mode');
  const btn = document.getElementById('modeToggle');
  const isLight = document.body.classList.contains('light-mode');
  btn.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('modeToggle');
    if (btn) btn.textContent = '🌙';
  }
}

// ─── ACCORDION (Interview Q&A) ────────────────────────────
function initAccordion() {
  document.querySelectorAll('.qa-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      // Close all
      document.querySelectorAll('.qa-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.qa-question').forEach(x => x.classList.remove('open'));
      // Open clicked
      if (!isOpen) {
        answer.classList.add('open');
        q.classList.add('open');
      }
    });
  });
}

// ─── STREAK TRACKER ──────────────────────────────────────
function initStreak() {
  const container = document.getElementById('streakRow');
  if (!container) return;

  const days = ['M','T','W','T','F','S','S'];
  const today = new Date().getDay(); // 0=Sun
  const streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
  const todayKey = new Date().toDateString();

  days.forEach((d, i) => {
    const dot = document.createElement('div');
    dot.className = 'streak-dot';
    dot.textContent = d;
    // Mark days before today as active (simulate streak)
    const dayIndex = i === 6 ? 0 : i + 1;
    if (dayIndex < today || streakData[todayKey]) {
      dot.classList.add('active');
    }
    container.appendChild(dot);
  });

  // Today's dot clickable
  const todayDot = container.children[today === 0 ? 6 : today - 1];
  if (todayDot) {
    todayDot.style.cursor = 'pointer';
    todayDot.title = 'Click to mark today!';
    todayDot.addEventListener('click', () => {
      streakData[todayKey] = true;
      localStorage.setItem('streakData', JSON.stringify(streakData));
      todayDot.classList.toggle('active');
    });
  }
}

// ─── ANIMATE PROGRESS BARS ───────────────────────────────
function animateProgressBars() {
  const fills = document.querySelectorAll('.prog-bar-fill');
  setTimeout(() => {
    fills.forEach(f => {
      const target = f.getAttribute('data-width');
      f.style.width = target + '%';
    });
  }, 300);
}

// ─── COUNTER ANIMATION ───────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 30);
  });
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAccordion();
  initStreak();
  animateProgressBars();
  animateCounters();
});
