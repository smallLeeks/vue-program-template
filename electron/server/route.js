const express = require('express')
const http = require('http')
const url = require('url')
const zkConfig = require('web-config')

const router = express.Router()

router.get('/', (req, res, next) => {
    const URL = url.parse(zkConfig.qiyuesuo.crmapi)
    console.log(2222, req.headers, URL)
    const options = {
        hostname: URL.hostname,
        path:
            URL.href +
            req.baseUrl.substring(4) +
            '?' +
            Object.keys(req.query)
                .map(x => x + '=' + req.query[x])
                .join('&'),
        method: 'GET',
        headers: req.headers,
    }
    const request = http.request(options, response => {
        let result = ''
        response.setEncoding('utf8')
        response.on('data', data => {
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
