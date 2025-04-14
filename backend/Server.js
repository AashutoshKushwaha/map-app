const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (replace with a database in production)
let locations = [];
let reviews = [];
let users = [];

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
};

// Authentication Routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Location CRUD Routes
app.get('/api/locations', (req, res) => {
  res.json(locations);
});

app.post('/api/locations', authenticateToken, (req, res) => {
  const { name, lat, lon } = req.body;
  const newLocation = { id: locations.length + 1, name, lat, lon };
  locations.push(newLocation);
  res.status(201).json(newLocation);
});

app.put('/api/locations/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { name, lat, lon } = req.body;
  const location = locations.find((loc) => loc.id === parseInt(id));
  if (location) {
    location.name = name;
    location.lat = lat;
    location.lon = lon;
    res.json(location);
  } else {
    res.status(404).send('Location not found');
  }
});

app.delete('/api/locations/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  locations = locations.filter((loc) => loc.id !== parseInt(id));
  res.status(204).send();
});

// Review CRUD Routes
app.post('/api/reviews', authenticateToken, (req, res) => {
  const { locationId, review } = req.body;
  const newReview = { id: reviews.length + 1, locationId, review, userId: req.user.id };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});