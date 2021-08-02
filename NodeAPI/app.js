'use strict'
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        "message": "Connected to the API"
    })
})

const server = app.listen(port, () => {
    console.log(`API Listening at http://localhost:${port}`)
    console.log(`ENV VAR: ${process.env.TEST_VAR}`)
})