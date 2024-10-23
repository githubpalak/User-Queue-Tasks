const rateLimit = require('express-rate-limit');
const taskQueue = require('../services/taskQueue');

const limiter = (req, res, next) => {
    const userId = req.body.user_id;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    taskQueue.queueTask(userId, () => {
        next();
    });
};

module.exports = limiter;