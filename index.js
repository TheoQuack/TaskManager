const express = require('express');
const sequelize = require('./config/database.js');
const Task = require('./models/task.js');

const app = express();
const PORT = 3000;
const taskRoutes = require('./routes/taskRoutes.js');
const loggerMiddle = require('./middleware/logger.js');


app.use(express.json());
app.use(loggerMiddle);


sequelize.sync()
    .then(()=>console.log("Database Synced"))
    .catch(err=>console.error("DB Sync Error", err));


app.get('/api/tasks',  taskRoutes);
app.post('/api/tasks', taskRoutes);
app.get('/api/tasks/:id',  taskRoutes);
app.put('/api/tasks/:id', taskRoutes);
app.delete('/api/tasks/:id', taskRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
