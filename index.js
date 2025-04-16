const express = require('express')
const { authRoutes } = require('./routes')
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log('App listening on port')
})