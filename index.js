const { app, BrowserWindow, screen, ipcMain } = require('electron')
const Store = require('electron-store');

function createWindow() {
    let display = screen.getPrimaryDisplay()
    let width = display.bounds.width
    let height = display.bounds.height

    const win = new BrowserWindow({
        opacity: 0.96,

        //width: 300,
       // height: 5,
        
        width: 280,
        height: 15,
       
        x: 0,
        y: 0,

        frame: false,
        alwaysOnTop: true,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.on('blur', () => {
        win.minimize();
    })

    win.center()
    
    win.setAutoHideMenuBar(true) // Hides menubar by default
    //win.setMenuBarVisibility(false) // Hides menubar - might not be Linux compatable 
    //win.setResizable(false) // Can't resize
    win.loadFile('mvc/view.html') //
    //win.webContents.openDevTools(); //TO REMOVE

    Store.initRenderer()
   //win.webContents.send('store-data', store);
  //https://stackoverflow.com/questions/36773711/passing-data-to-windows-in-electron
}

app.whenReady().then(() => {
    createWindow()
    // Support for Mac to ensure window creation
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
      
})

// Helps support Linux window closing
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
  
