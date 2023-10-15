const express = require('express')
const http = require('http')
const logger = require('morgan')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

/*
Import routes
 */
const userRoutes =require('./src/routes/userRoutes')

const PORT = process.env.PORT || 3000

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.disable('x-powered-by')

// Calling routes
userRoutes(app)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
app.get('/', (req, res) => {
    res.json({
        success: 'ok',
        message: 'Working'
    })
})

// Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    res.statusCode(err.statusCode || 500)
})