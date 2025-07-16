const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Signup Data:', { name, email, password });
    res.send({ message: 'Signup successful' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
