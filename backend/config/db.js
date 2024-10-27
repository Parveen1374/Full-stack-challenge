const mongoose = require('mongoose')

const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/CultureLinkr')
    .then(()=>{
        console.log("Database Connected!")
    }).catch((err)=>{
        console.log("Database Error :", err)
        process.exit(1)
    })
}

module.exports = connectDB;