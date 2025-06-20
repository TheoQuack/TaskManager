const express = require('express');
const router = express.Router();

let tasks = [];
let end = 0;


router.get('/api/tasks', (req,res)=>{
    res.json(tasks);
})


router.post('/api/tasks', (req,res)=>{

    if (tasks.length > 0) {
    end = tasks[tasks.length - 1].id;
    }

    else{
    end = 0;
    }
    
    const task = {id: end + 1, ...req.body};
    tasks.push(task);
    res.status(201).json(task);
    
})



router.put('/api/tasks/:id', (req,res)=>{

    const id = req.params.id;
    const newTask = req.body

    const CTasks = tasks.map((t, i)=> {

        if (t.id == id) {
            ti = {id : t.id, ...newTask};
            tasks.splice(i, 1, ti);
            res.status(200).send("");
        }
      
    })

    if (id >= biggest){
        res.status(404).send("Resource not Found");
    }
})



router.delete('/api/tasks/:id', (req,res)=>{
    
    const id = req.params.id;

    const CTasks = tasks.map((t, i)=> {
        if (t.id == id) {
            tasks.splice(i, 1);
            res.status(200).send("");
        }
    })


    if (id >= biggest){
        res.status(404).send("Resource not Found");
    }
})









module.exports = router;