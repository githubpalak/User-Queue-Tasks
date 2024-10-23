const express = require('express');
const limiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.post('/task', limiter, (req, res) => {
    res.status(202).json({ message: 'Task is being processed' });
});

module.exports = router;