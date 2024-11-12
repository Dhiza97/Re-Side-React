import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import agentRouter from './routes/agentRoute.js'
import propertyRouter from './routes/propertyRoute.js'

dotenv.config()

// App Config
const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/agent', agentRouter)
app.use('/api/property', propertyRouter)

app.get('/', (req, res) => {
    res.send('Server is running...')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})