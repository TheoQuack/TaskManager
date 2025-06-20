const express = require('express');
const app = express();
const PORT = 3000;
const taskRoutes = require('./routes/taskRoutes.js');
const loggerMiddle = require('./middleware/logger.js');


app.use(express.json());
app.use(loggerMiddle);

app.get('/api/tasks',  taskRoutes);
app.post('/api/tasks', taskRoutes);
app.put('/api/tasks/:id', taskRoutes);
app.delete('/api/tasks/:id', taskRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
