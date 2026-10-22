const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
        return client.db(process.env.DB_NAME);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

}

module.exports = { connectDB };