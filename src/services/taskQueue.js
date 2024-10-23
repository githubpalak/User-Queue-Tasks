const Queue = require('bull');
const logger = require('./logger');

const taskQueue = new Queue('taskQueue', {
    redis: {
        host: 'localhost',
        port: 6379,
    },
});

// Process task queue
taskQueue.process(async (job) => {
    const { user_id } = job.data;
    await task(user_id);
});

// Function to enqueue task
async function queueTask(userId, callback) {
    await taskQueue.add({ user_id: userId }, {
        delay: 1000, // Delay of 1 second between tasks
    });

    // Ensure callback is executed after enqueuing
    callback();
}

// Task function
async function task(user_id) {
    console.log(`${user_id}-task completed at-${Date.now()}`);
    logger.log(`${user_id}-task completed at-${Date.now()}`);
}

module.exports = { queueTask };