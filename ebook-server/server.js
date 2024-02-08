const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { login } = require('./controllers/authController');
const User = require('./models/User');
const config = require('./config');

const app = express();
const PORT = 3001;
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'ju_ebook_store';

app.use(bodyParser.json());

/**
 * Initialize server.
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when server is initialized.
 */
(async () => {
    try {
        const client = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(DB_NAME);
        const users = new User(db);

        console.log('Connected to MongoDB');

        app.post('/api/auth/login', async (req, res) => {
            const { email, password, userType } = req.body;

            try {
                const token = await login(email, password, userType);
                res.json({ token });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();
