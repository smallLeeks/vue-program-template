const express = require('express')
const path = require('path')

const router = require('./route')

const app = express()

app.use('/api/*', router)
app.listen(8888, () => {
    console.log('web server running at http://localhost:8888/index.html')
})

console.log(111111, path.join(__dirname, '../../dist'))

app.use(express.static(path.join(__dirname, '../../dist')))
