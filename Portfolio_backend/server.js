const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: [
    "https://portfolio-website-tau-drab-28.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  credentials: true
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message))

app.use('/api/contact', require('./server/routes/contactRoutes'))

app.listen(5000, () => {
  console.log('Server Running on Port 5000')
})