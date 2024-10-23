const express = require('express');
const taskRoutes = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
