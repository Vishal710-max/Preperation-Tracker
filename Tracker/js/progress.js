// ─── PROGRESS SYSTEM ─────────────────────────────────────

function saveProgress(key, value) {
  localStorage.setItem('prog_' + key, JSON.stringify(value));
}

function loadProgress(key) {
  const val = localStorage.getItem('prog_' + key);
  return val !== null ? JSON.parse(val) : null;
}

function initCheckboxes() {
  document.querySelectorAll('[data-task]').forEach(cb => {
    const key = cb.getAttribute('data-task');
    const saved = loadProgress(key);
    if (saved) {
      cb.checked = true;
      cb.closest('li')?.classList.add('done');
    }

    cb.addEventListener('change', () => {
      saveProgress(key, cb.checked);
      cb.closest('li')?.classList.toggle('done', cb.checked);
      updateSectionProgress(cb);
    });
  });
}

function updateSectionProgress(changedCb) {
  const section = changedCb.closest('[data-section]');
  if (!section) return;
  const all = section.querySelectorAll('[data-task]');
  const done = Array.from(all).filter(c => c.checked).length;
  const pct = Math.round((done / all.length) * 100);
  const display = section.querySelector('.section-pct');
  if (display) display.textContent = pct + '%';

  // Update overall chart if exists
  updateOverallChart();
}

// Overall progress per page category
function getOverallProgress() {
  const keys = {
    azure: ['vm','storage','aad','rbac','aks','monitor','devops','vnet'],
    aptitude: ['quant','lr','verbal','di','ta'],
    coding: ['twosum','palindrome','revstr','fibseq','anagram'],
    essay: ['structure','keywords','practice1'],
    voice: ['intro','situational','hr','tech'],
  };

  const result = {};
  Object.entries(keys).forEach(([cat, tasks]) => {
    const done = tasks.filter(t => loadProgress(t)).length;
    result[cat] = Math.round((done / tasks.length) * 100);
  });
  return result;
}

function updateOverallChart() {
  if (window.overallChart) {
    const prog = getOverallProgress();
    window.overallChart.data.datasets[0].data = Object.values(prog);
    window.overallChart.update();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initCheckboxes();
});
