// ─── CHARTS (Chart.js) ───────────────────────────────────

function initDashboardChart() {
  const canvas = document.getElementById('progressChart');
  if (!canvas) return;

  const prog = getOverallProgress ? getOverallProgress() : {
    azure: 72, aptitude: 65, coding: 58, essay: 80, voice: 50
  };

  const ctx = canvas.getContext('2d');
  window.overallChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['☁️ Azure', '🧮 Aptitude', '💻 Coding', '📝 Essay', '🎙️ Voice'],
      datasets: [{
        label: 'Preparation %',
        data: Object.values(prog),
        backgroundColor: [
          'rgba(108,99,255,0.7)',
          'rgba(0,212,255,0.7)',
          'rgba(0,229,160,0.7)',
          'rgba(255,200,80,0.7)',
          'rgba(255,107,107,0.7)',
        ],
        borderColor: [
          'rgba(108,99,255,1)',
          'rgba(0,212,255,1)',
          'rgba(0,229,160,1)',
          'rgba(255,200,80,1)',
          'rgba(255,107,107,1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.parsed.y}% Complete`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: '#6b6b88',
            callback: v => v + '%'
          }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#6b6b88' }
        }
      },
      animation: { duration: 1000, easing: 'easeInOutQuart' }
    }
  });
}

function initRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Azure', 'Networking', 'Containers', 'IAM', 'Monitoring', 'DevOps'],
      datasets: [{
        label: 'Your Level',
        data: [85, 65, 70, 90, 60, 75],
        borderColor: 'rgba(108,99,255,0.9)',
        backgroundColor: 'rgba(108,99,255,0.15)',
        pointBackgroundColor: 'rgba(108,99,255,1)',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255,255,255,0.06)' },
          angleLines: { color: 'rgba(255,255,255,0.06)' },
          ticks: { display: false },
          pointLabels: { color: '#6b6b88', font: { size: 11 } }
        }
      }
    }
  });
}

function initDoughnutChart() {
  const canvas = document.getElementById('doughnutChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Done', 'Remaining'],
      datasets: [{
        data: [62, 38],
        backgroundColor: ['rgba(0,229,160,0.8)', 'rgba(42,42,58,0.8)'],
        borderColor: ['rgba(0,229,160,1)', 'rgba(42,42,58,1)'],
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` ${c.parsed}%` } }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboardChart();
  initRadarChart();
  initDoughnutChart();
});
