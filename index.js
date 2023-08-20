const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Define paths to HTML files
const publicPath = path.join(__dirname, 'public');
const indexPath = path.join(publicPath, 'index.html');
const aboutPath = path.join(publicPath, 'about.html');
const contactPath = path.join(publicPath, 'contact-me.html');
const notFoundPath = path.join(publicPath, '404.html');

// Serve static files from the "public" directory
app.use(express.static(publicPath));

// Define routes
app.get('/', (req, res) => res.sendFile(indexPath));
app.get('/about', (req, res) => res.sendFile(aboutPath));
app.get('/contact-me', (req, res) => res.sendFile(contactPath));

// 404 route
app.use((req, res) => res.status(404).sendFile(notFoundPath));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});