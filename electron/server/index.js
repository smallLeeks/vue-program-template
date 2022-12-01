const fs = require('fs')
const http = require('http')
const _url = require('url')
const webConfig = require('web-config')

const config = {
    '/api': {
        target: webConfig.qiyuesuo.crmapi,
    },
    '/ossapi': {
        target: webConfig.qiyuesuo.ossapi,
    },
}

// 创建 http 服务
const app = http.createServer((request, response) => {
    const url = Object.is(request, '/') ? 'index.html' : request.url

    // 存在代理地址
    if (hasProxy(url, request, response)) return

    // 普通请求和资源加载
    fs.readFile(__dirname + url, (err, data) => {
        if (err) {
            console.error('请求失败 ===>', err)
        } else {
            response.end(data)
        }
    })
})

// 判断代理地址
function hasProxy(url, request, response) {
    for (const key in config) {
        if (url.indexOf(key) < 0) continue

        const { target, port } = config[key]

        const opts = {
            hostname: _url.parse(target).hostname,
            method: request.method,
            path: target + url.replace(key, ''),
            json: true,
            headers: {
                ...request.headers,
                referer: target + url,
            },
        }
        proxy(opts, request, response)
        return true
    }
    return false
}

// 代理转发
function proxy(opts, request, response) {
    // 请求真实代理接口
    const proxyRequest = http.request(opts, proxyResponse => {
        // 代理接口返回数据，写入本地response
        proxyResponse.on('data', chunk => {
            response.write(chunk, 'binary')
        })
        // 代理接口结束，通知本地response结束
        proxyResponse.on('end', () => {
            response.end()
        })
        response.writeHead(proxyResponse.statusCode, proxyResponse.headers)
    })

    // 本地接口数据传输，通知代理接口请求
    request.on('data', chunk => {
        proxyRequest.write(chunk, 'binary')
    })

    // 本地请求结束，通知代理接口请求结束
    request.on('end', () => {
        proxyRequest.end()
    })
}

app.listen(8888)
console.log('server is listen on 8888....')
