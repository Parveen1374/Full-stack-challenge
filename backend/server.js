const express = require('express')
const nodemon = require('nodemon')
const connectDB = require('./config/db')
const taskRoutes = require('./routes/tasks');
const app = express()
const cors = require('cors')
const port =  5000
app.use(express.json())
app.use(cors())

connectDB()

app.use('/tasks', taskRoutes)




app.listen(port, ()=>{
    console.log(`Server running on this port : ${port}`)
})