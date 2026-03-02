const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const { db, init } = require('./db');

const app = express();
app.use(bodyParser.json());

init();

// utility functions
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// authentication middleware
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Missing Authorization header' });

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Invalid Authorization format' });
  }

  const token = parts[1];

  db.get('SELECT * FROM users WHERE token = ?', [token], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(401).json({ error: 'Invalid token' });

    req.user = user;
    next();
  });
}

// signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password required' });
  }

  const hashed = hashPassword(password);
  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashed],
    function (err) {
      if (err) {
        if (err.message.includes('UNIQUE')) {
          return res.status(409).json({ error: 'username already exists' });
        }
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ id: this.lastID, username });
    }
  );
});

// signin
app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password required' });
  }

  const hashed = hashPassword(password);
  db.get(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, hashed],
    (err, user) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });

      const token = generateToken();
      db.run('UPDATE users SET token = ? WHERE id = ?', [token, user.id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ token });
      });
    }
  );
});

// CRUD for items
app.get('/items', authenticate, (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    // convert inStock to boolean
    const items = rows.map((r) => ({ ...r, inStock: !!r.inStock }));
    res.json(items);
  });
});

app.get('/items/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM items WHERE id = ?', [id], (err, item) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!item) return res.status(404).json({ error: 'Not found' });
    item.inStock = !!item.inStock;
    res.json(item);
  });
});

app.post('/items', authenticate, (req, res) => {
  const { name, quantity, price, inStock, description } = req.body;
  if (name == null || quantity == null || price == null || inStock == null) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const inStockInt = inStock ? 1 : 0;
  db.run(
    'INSERT INTO items (name, quantity, price, inStock, description) VALUES (?, ?, ?, ?, ?)',
    [name, quantity, price, inStockInt, description || null],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.put('/items/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, inStock, description } = req.body;
  db.run(
    'UPDATE items SET name = ?, quantity = ?, price = ?, inStock = ?, description = ? WHERE id = ?',
    [name, quantity, price, inStock ? 1 : 0, description, id],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
      res.json({ id });
    }
  );
});

app.delete('/items/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM items WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.status(204).end();
  });
});

// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
