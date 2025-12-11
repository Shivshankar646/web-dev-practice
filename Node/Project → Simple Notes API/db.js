const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://shivshankarmunde91_db_user:4GOvDhIPtDs70Hf9@cluster0.hiitrfr.mongodb.net/?appName=Cluster0");
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.log("Connection Failed", error);
    }
}

module.exports = connectDB;
