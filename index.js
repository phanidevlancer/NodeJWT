const express = require('express')
const { authRoutes } = require('./routes')
const { mongoose } = require('mongoose')
const app = express()
const port = 8080

app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

let dbUrl = 'mongodb://localhost:27017/auth_project'
mongoose.connect(dbUrl).then(() => {
    console.log('MongoDB Connected!')
})

app.listen(port, () => {
    console.log('App listening on port ' + port)
})