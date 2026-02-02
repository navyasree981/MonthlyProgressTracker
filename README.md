# February 2026 Progress Tracker

A beautiful progress tracking application for managing study and wellness tasks throughout February 2026.

## Deploy to Render

Follow these steps to deploy this application to Render:

### Method 1: Deploy from GitHub (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `february-progress-tracker`
   - Keep it public or private (your choice)

2. **Upload Your Files**
   - Upload all three files to your GitHub repository:
     - `index.html`
     - `server.js`
     - `package.json`
   - You can do this via GitHub's web interface or using Git commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

3. **Deploy on Render**
   - Go to [Render](https://render.com) and sign up/log in
   - Click "New +" → "Web Service"
   - Connect your GitHub account if you haven't already
   - Select your repository
   - Configure the service:
     - **Name**: `february-progress-tracker` (or any name you want)
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Select "Free" plan
   - Click "Create Web Service"

4. **Wait for Deployment**
   - Render will automatically build and deploy your app
   - Once complete, you'll get a URL like: `https://your-app-name.onrender.com`

### Method 2: Deploy without GitHub

1. **Go to Render Dashboard**
   - Visit [Render](https://render.com) and sign up/log in

2. **Create a New Web Service**
   - Click "New +" → "Web Service"
   - Choose "Build and deploy from a Git repository" and connect your GitHub
   - OR use Render's manual deployment if available in your region

3. **Alternative: Use Static Site (Simpler)**
   - Since this is just HTML/CSS/JS, you can use Render's Static Site option
   - Click "New +" → "Static Site"
   - Connect your GitHub repo
   - Set:
     - **Build Command**: (leave empty)
     - **Publish Directory**: `.` (current directory)
   - This will serve your `index.html` directly without needing Node.js

### Method 3: Alternative Static Hosting Options

If you want even simpler deployment, consider these alternatives:

**Netlify** (Easiest):
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your `index.html` file
3. Done! You get instant hosting

**Vercel**:
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

**GitHub Pages** (Free):
1. Push to GitHub
2. Go to Settings → Pages
3. Select your branch and save
4. Access at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Local Development

To run locally:

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Features

- **Dual Tracking**: Separate views for Study and Wellness tasks
- **Daily Task Management**: Check off tasks and log hours
- **Monthly Calendar**: Visual overview of your progress
- **Statistics Dashboard**: Track hours, consistency, and streaks
- **Data Persistence**: All progress saved in browser localStorage
- **Export Functionality**: Download your progress as JSON

## Notes

- All data is stored in your browser's localStorage
- Clear browser data will reset your progress
- Use the Export button to backup your data regularly
- The app is set for February 2026 (28 days)

## Support

For issues or questions, please open an issue on GitHub.