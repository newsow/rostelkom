const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const cors = require('cors')
const corsOption = {
    origin: 'http://localhost:3000',
    credentials:true
}

app.use(express.json())
app.use(cors(corsOption))
app.use('/auth',authRouter)

const start = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()