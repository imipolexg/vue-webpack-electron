const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  const mainURL = 'file://' + path.join(__dirname, 'index.html')

  mainWindow.loadURL(mainURL)

  mainWindow.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
