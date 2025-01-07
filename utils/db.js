// Import the MongoDB library
const { MongoClient } = require('mongodb');

class DBClient {
    constructor() {
        // Set up MongoDB connection parameters
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';

        // Connection URI
        const uri = `mongodb://${host}:${port}`;

        // Create MongoDB client
        this.client = new MongoClient(uri, { useUnifiedTopology: true });
        this.dbName = database;

        // Connect to the database
        this.client.connect()
            .then(() => {
                console.log('MongoDB connected successfully');
            })
            .catch((err) => {
                console.error(`MongoDB connection error: ${err}`);
            });
    }

    // Function to check if MongoDB is alive
    isAlive() {
        return this.client && this.client.isConnected();
    }

    // Asynchronous function to get the number of users
    async nbUsers() {
        try {
            const db = this.client.db(this.dbName);
            const usersCollection = db.collection('users');
            return await usersCollection.countDocuments();
        } catch (err) {
            console.error(`Error counting users: ${err}`);
            return 0;
        }
    }

    // Asynchronous function to get the number of files
    async nbFiles() {
        try {
            const db = this.client.db(this.dbName);
            const filesCollection = db.collection('files');
            return await filesCollection.countDocuments();
        } catch (err) {
            console.error(`Error counting files: ${err}`);
            return 0;
        }
    }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
module.exports = dbClient;
