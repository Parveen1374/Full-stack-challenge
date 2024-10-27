const express = require('express')
const Task = require('../models/Task');
const router = express.Router()


router.post('/', async (req , res) =>{
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }               
})

router.get('/', async (req, res) =>{
    try{
        const tasks = await Task.find()
        res.status(201).json(tasks)
    } catch (error) {
        res.status(400).json({message:"Error :", error})
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({message:"Error :", error})
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Task deleted"})
    } catch (error) {
        res.status(400).json({message:"Error :", error})
    }
})


module.exports = router;