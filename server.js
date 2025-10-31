import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve PetCrew pages explicitly
app.get('/petcrew', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'petcrew', 'index.html'));
});

app.get('/petcrew/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'petcrew', 'privacy.html'));
});

app.get('/petcrew/support', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'petcrew', 'support.html'));
});

app.get('/petcrew/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'petcrew', 'terms.html'));
});

// For React SPA - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
