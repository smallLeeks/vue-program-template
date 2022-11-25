const path = require('path')
const { app, BrowserWindow } = require('electron')

const childProcess = require('child_process')
const exec = childProcess.exec
let openExec

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false, // 允许跨域
            contextIsolation: true, // 是否开启隔离上下文
            nodeIntegration: true, // 渲染进程使用Node API
            preload: path.join(__dirname, '../preload/index.js'), // 需要引用js文件
        },
    })

    // 如果打包了，渲染index.html
    if (app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, '../../dist/index.html'))
    } else {
        let url = 'http://localhost:5173' // 本地启动的vue项目路径
        mainWindow.loadURL(url)
        // 开发者调试
        mainWindow.webContents.openDevTools({ mode: 'right' })
    }

    // 创建node web server子进程
    openExec = exec('node ./electron/server/index.js', (error, stdout, stderr) => {
        if (error) {
            console.log(error.stack)
            console.log('Error code: ' + error.code)
            return
        }
        console.log('使用exec方法输出: ' + stdout)
        console.log(`stderr: ${stderr}`)
        console.log(process.pid)
    })
}

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

app.commandLine.appendSwitch('disable-web-security') // 开启跨域

app.whenReady().then(() => {
    createWindow() // 创建窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 当全部窗口关闭时退出时，杀死node进程
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.exit()
        // 判断openExec是否存在，存在就杀掉node进程
        if (!openExec) {
            // console.log('openExec is null')
        } else {
            exec('taskkill /f /t /im node.exe', (error, stdout, stderr) => {
                if (error) {
                    console.log(error.stack)
                    console.log('Error code: ' + error.code)
                    return
                }
                console.log('使用exec方法输出: ' + stdout)
                console.log(`stderr: ${stderr}`)
            })
        }
    }
})
