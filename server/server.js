import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import incomeRoutes from './routes/income.routes.js'

const app = express()
dotenv.config()

connectDB()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())


app.use('/api/v1/users', authRoutes)
app.use('/api/v1/income', incomeRoutes)


app.get('/', (req, res)=>{
    res.send("API Running")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})