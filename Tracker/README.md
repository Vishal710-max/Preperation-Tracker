# 🚀 Wipro Prep Portal

A complete, self-hosted interview preparation system for Wipro placement — covering DWS (Digital Workspace Services) and Mass Hiring tracks.

## 📁 Project Structure

```
wipro-prep-portal/
├── index.html          ← Home Dashboard (charts, progress, streak)
├── dws.html            ← DWS Prep (Azure, Windows, Intune, AKS, Nexthink)
├── mass.html           ← Mass Hiring (Aptitude, Coding, Essay, Voice)
├── portfolio.html      ← Resume + Projects + Skills
├── css/
│   └── style.css       ← All styles (dark mode, animations, components)
├── js/
│   ├── main.js         ← Dark mode, accordion, streaks, animations
│   ├── progress.js     ← localStorage checkbox persistence
│   └── charts.js       ← Chart.js configurations
└── assets/
    └── resume.pdf      ← Add YOUR resume here!
```

## 🌐 Deploy to GitHub Pages (3 Steps)

1. **Create a GitHub repository** named `wipro-prep-portal`

2. **Upload all files** (drag and drop into GitHub UI, or use git):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/wipro-prep-portal.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo → **Settings** → **Pages**
   - Source: `Deploy from a branch`
   - Branch: `main`, Folder: `/ (root)`
   - Click **Save**

4. **Your site is live at:**
   ```
   https://YOUR_USERNAME.github.io/wipro-prep-portal/
   ```

## ✏️ Personalize It

### Change Your Name
Search for `Vishal Bhingarde` across all HTML files and replace with your name.

### Add Your Resume
Drop your resume PDF into the `assets/` folder named `resume.pdf`.

### Update Your Projects
Edit `portfolio.html` → find the `project-card` divs and replace with your actual projects.

### Update GitHub & LinkedIn Links
In `portfolio.html`, find:
```html
<a href="https://github.com" ...>GitHub ↗</a>
<a href="https://linkedin.com" ...>LinkedIn ↗</a>
```
Replace with your actual profile URLs.

### Update Progress Numbers
In `index.html`, update the `data-count` values in the stat bar to reflect your actual progress.

## ⚡ Features

- ✅ **Progress Tracking** — Checkboxes save to localStorage (persist after refresh)
- 📊 **Charts** — Bar chart, Radar chart, Doughnut chart (Chart.js)
- 🔥 **Streak Tracker** — Mark daily study sessions
- 🌙 **Dark/Light Mode** — Toggle with memory
- 🎯 **Interview Q&A** — Accordion with real DWS + HR questions
- 💻 **Code Snippets** — Python solutions with syntax highlighting
- 📱 **Responsive** — Works on mobile

## 🎨 Customization

The entire color system uses CSS variables in `css/style.css`:
```css
:root {
  --accent: #6c63ff;   /* Purple — primary accent */
  --accent2: #00d4ff;  /* Cyan — secondary */
  --green: #00e5a0;    /* Green — success */
  --accent3: #ff6b6b;  /* Red — alerts */
}
```
Change these to match your personal brand.

---

Built for Wipro Placement 2025 🎯
