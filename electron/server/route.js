const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const url = require('url')
const zkConfig = require('web-config')

const router = express.Router()

const app = express()

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
    const URL = url.parse(zkConfig.qiyuesuo.crmapi)
    const options = {
        hostname: URL.hostname,
        path: URL.href + req.originalUrl.substring(4),
        method: 'GET',
        headers: req.headers,
    }
    const request = http.request(options, response => {
        let result = ''
        response.setEncoding('utf8')
        response.on('data', data => {
            console.log('get ===>', data)
            result = data
        })
        response.on('end', data => {
            res.status(200).json(result)
        })
    })
    request.on('error', e => {
        console.error(`problem with request: ${e.message}`)
        res.status(500)
    })
    request.end()
})

router.post('/', bodyParser.json(), (req, res, next) => {
    const URL = url.parse(zkConfig.qiyuesuo.crmapi)
    const options = {
        hostname: URL.hostname,
        path: URL.href + req.originalUrl.substring(4),
        method: 'POST',
        headers: req.headers,
        body: req.body,
    }
    const request = http.request(options, response => {
        let result = ''
        response.on('data', data => {
            console.log('post ===>', data)
            result = data
        })
        response.on('end', data => {
            res.status(200).json(result)
        })
    })
    request.on('error', e => {
        console.error(`problem with request: ${e.message}`)
        res.status(500)
    })
    request.end()
})

module.exports = router
