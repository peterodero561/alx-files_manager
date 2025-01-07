// Import the Redis library
const redis = require('redis');

class RedisClient {
    constructor() {
        // Create a Redis client
        this.client = redis.createClient();

        // Handle errors
        this.client.on('error', (err) => {
            console.error(`Redis client error: ${err}`);
        });
    }

    // Function to check if Redis is alive
    isAlive() {
        return this.client.connected;
    }

    // Asynchronous function to get a value by key
    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, value) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(value);
                }
            });
        });
    }

    // Asynchronous function to set a key-value pair with expiration
    async set(key, value, duration) {
        return new Promise((resolve, reject) => {
            this.client.setex(key, duration, value, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    // Asynchronous function to delete a key
    async del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();
module.exports = redisClient;
