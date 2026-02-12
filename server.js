const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the main tracker
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint (useful for Render's uptime checks)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'February 2026 Progress Tracker' });
});

// Catch-all: redirect unknown routes back to the app
app.use((req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});