require('dotenv').config();

module.exports = {
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
    LOG_FILE: process.env.LOG_FILE || 'task_logs.txt',
};
