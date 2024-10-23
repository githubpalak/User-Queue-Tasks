const fs = require('fs');
const { LOG_FILE } = require('../config/config');

const logger = {
    log: (message) => {
        const logMessage = `${new Date().toISOString()} - ${message}\n`;
        fs.appendFile(LOG_FILE, logMessage, (err) => {
            if (err) console.error('Error writing log:', err);
        });
    },
};

module.exports = logger;