import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'  
import app from './app.js'

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log('Failed to connect to the database:', error)
})