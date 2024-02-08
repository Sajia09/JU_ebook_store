const { ObjectId } = require('mongodb');

/**
 * Represents a user.
 * @class
 */
class User {
    /**
     * Creates a new User instance.
     * @param {import('mongodb').Db} db - The MongoDB database instance.
     */
    constructor(db) {
        this.collection = db.collection('users');
    }

    /**
     * Find a user by email.
     * @param {string} email - The email of the user.
     * @returns {Promise<object|null>} A promise that resolves with the user object if found, or null if not found.
     */
    async findByEmail(email) {
        return await this.collection.findOne({ email });
    }

    /**
     * Find a user by ID.
     * @param {string} id - The ID of the user.
     * @returns {Promise<object|null>} A promise that resolves with the user object if found, or null if not found.
     */
    async findById(id) {
        return await this.collection.findOne({ _id: ObjectId(id) });
    }

    /**
     * Create a new user.
     * @param {object} user - The user object containing email, password, and userType.
     * @returns {Promise<object>} A promise that resolves with the inserted user object.
     */
    async createUser(user) {
        return await this.collection.insertOne(user);
    }
}

module.exports = User;
