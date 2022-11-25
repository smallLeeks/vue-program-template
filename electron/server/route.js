const express = require('express')
const http = require('http')
const url = require('url')
const zkConfig = require('web-config')

const router = express.Router()

router.get('/', (req, res, next) => {
    const URL = url.parse(zkConfig.qiyuesuo.crmapi)
    const options = {
        hostname: URL.hostname,
        path: ``, // 路径
        method: 'GET',
        headers: {}, // 头部信息
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
