const os = require('os')
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    platform: os.platform(),
})
