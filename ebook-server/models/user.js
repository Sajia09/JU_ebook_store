const { ObjectId } = require('mongodb');

class User {
    constructor(db) {
        this.collection = db.collection('users');
    }

    async findByEmail(email) {
        return await this.collection.findOne({ email });
    }

    async findById(id) {
        return await this.collection.findOne({ _id: ObjectId(id) });
    }

    async createUser(user) {
        return await this.collection.insertOne(user);
    }
}

module.exports = User;
