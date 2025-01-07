// Import dependencies
const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  // GET /status
  static async getStatus(req, res) {
    const redisAlive = redisClient.isAlive();
    const dbAlive = dbClient.isAlive();
    res.status(200).json({ redis: redisAlive, db: dbAlive });
  }

  // GET /stats
  static async getStats(req, res) {
    try {
      const usersCount = await dbClient.nbUsers();
      const filesCount = await dbClient.nbFiles();
      res.status(200).json({ users: usersCount, files: filesCount });
    } catch (err) {
      console.error(`Error getting stats: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = AppController;
