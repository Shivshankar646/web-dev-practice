const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const port = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use(noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
