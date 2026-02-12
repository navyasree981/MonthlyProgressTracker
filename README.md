# February 2026 Progress Tracker

A progress tracking app for managing daily Study and Wellness tasks throughout February 2026.

## Schedule

| Time | Mon–Fri | Saturday | Sunday |
|------|---------|----------|--------|
| 7:00 AM | Yoga (30 min) | Yoga | Yoga |
| 7:30 AM | Workout (1 hr) | Workout | Workout |
| 8:30 AM | Breakfast | Breakfast | Breakfast |
| 9:30 AM | Java (3 hrs) | Java | Build Session 1 |
| 12:30 PM | Lunch | Lunch | Lunch |
| 1:30 PM | MERN Stack (3 hrs) | MERN Stack | Build Session 2 |
| 4:30 PM | Mid-day Snack | Mid-day Snack | Mid-day Snack |
| 5:00 PM | AI/ML (3 hrs) | AI/ML | Build Session 3 |
| 8:00 PM | Dinner | Dinner | Dinner |
| 9:00 PM | Research *(Mon/Wed/Fri)* / IELTS *(Tue/Thu/Sat)* | IELTS | Build Session 4 |
| 10:40 PM | Sleep | Sleep | Sleep |

> **Sunday is Build Day** — all study slots are replaced with free-build sessions.

---

## Project Structure

```
february-progress-tracker/
├── index.html      # Main tracker app (all UI + logic)
├── server.js       # Express server
├── package.json    # Dependencies & scripts
└── README.md       # This file
```

---

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

For development with auto-restart (Node 18+):

```bash
npm run dev
```

---

## Deploy to Render

### Method 1: Deploy from GitHub (Recommended)

1. **Create a GitHub repository** and push all four files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Create a Web Service on Render**
   - Go to [render.com](https://render.com) → **New +** → **Web Service**
   - Connect your GitHub account and select your repository
   - Configure:
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free
   - Click **Create Web Service**

3. Your app will be live at `https://your-app-name.onrender.com`

> **Tip:** Render's free tier spins down after inactivity. The `/health` endpoint can be used with an uptime monitor (e.g. [UptimeRobot](https://uptimerobot.com)) to keep it warm.

### Method 2: Static Hosting (Simpler)

Since all logic runs in the browser, you can skip Node entirely and host `index.html` as a static site.

| Platform | Steps |
|----------|-------|
| **Netlify** | Drag & drop `index.html` at [netlify.com/drop](https://netlify.com/drop) |
| **GitHub Pages** | Settings → Pages → select branch → save |
| **Vercel** | Import GitHub repo → deploy with one click |
| **Render Static** | New + → Static Site → Publish directory: `.` |

---

## Features

- **Dual tracking** — separate Study and Wellness views
- **Smart scheduling** — tasks automatically vary by day of week:
  - Research on Mon / Wed / Fri
  - IELTS on Tue / Thu / Sat
  - Full Build Day on Sundays
- **Daily checklist** — check off tasks and log actual hours
- **Progress bars** — visual fill per task based on hours logged
- **Monthly calendar** — color-coded dot grid for each day
- **Statistics dashboard** — hours logged, consistency %, lazy hours, streak
- **Data persistence** — saved to browser `localStorage`
- **Export** — download full month's data as JSON
- **Reset** — clear all data and start fresh

---

## Notes

- All data is stored in your browser's `localStorage` — clearing browser data will reset progress
- Use **Export Data** regularly to back up your progress
- The tracker is fixed to February 2026 (28 days)
- Progress data is stored under the key `februaryProgress2026v2`

---

## Support

Open an issue on GitHub for bugs or questions.