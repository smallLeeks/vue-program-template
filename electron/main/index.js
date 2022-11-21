const path = require('path')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false, // 是否开启隔离上下文
            nodeIntegration: true, // 渲染进程使用Node API
            preload: path.join(__dirname, './preload/index.js'), // 需要引用js文件
        },
    })

    // 开发者调试
    mainWindow.webContents.openDevTools({ mode: 'right' })

    // 如果打包了，渲染index.html
    if (app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, '../../index.html'))
    } else {
        let url = 'http://localhost:5173' // 本地启动的vue项目路径
        mainWindow.loadURL(url)
    }
}

app.whenReady().then(() => {
    createWindow() // 创建窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭窗口
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
