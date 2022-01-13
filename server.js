// get express server up and running
const express = require('express')
const connectDB = require('./config/db')
const usersRouter = require('./routes/api/users')
const authRouter = require('./routes/api/auth')
const profileRouter = require('./routes/api/profile')
const postsRouter = require('./routes/api/posts')

const app = express()

//  Connect Database
connectDB()

// Init Middleware
app.use(express.json({extended: false}))


app.get('/', (req, res) => res.send('API Running'))

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)
app.use('/api/posts', postsRouter)

// looks for port environment variable
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

console.log('test')

// app.get vs router.get 

// 