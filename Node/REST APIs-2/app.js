const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To read JSON data

let users = [
    { id: 1, name: "Shiv Bro" },
    { id: 2, name: "Hero" }
];

// GET -> Read All Users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST -> Add New User
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedData = req.body;

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = updatedData;
        res.json({ message: 'Updated successfully!', updatedData });
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
});


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const oldLength = users.length;
    users = users.filter(user => user.id !== userId);

    if (users.length < oldLength) {
        res.json({ message: 'Deleted successfully!' });
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
