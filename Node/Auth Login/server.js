const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://shivshankarmunde91_db_user:4GOvDhIPtDs70Hf9@cluster0.hiitrfr.mongodb.net/?appName=Cluster0");

app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
