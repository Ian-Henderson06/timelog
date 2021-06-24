const { app, BrowserWindow, screen, ipcMain } = require('electron')

function createWindow() {
    let display = screen.getPrimaryDisplay()
    let width = display.bounds.width
    let height = display.bounds.height

    const win = new BrowserWindow({
        opacity: 0.94,

        //width: 300,
       // height: 5,
        
        width: 300,
        height: 15,
       
        x: 0,
        y: 0,

        frame: false,
        alwaysOnTop: true
    })

    win.height = 500
    
    win.setAutoHideMenuBar(true) // Hides menubar by default
    win.setMenuBarVisibility(false) // Hides menubar - might not be Linux compatable 
    //win.setResizable(false) // Can't resize
    win.loadFile('mvc/view.html') //
    //win.webContents.openDevTools(); //TO REMOVE


    // Resize on mouse over
    ipcMain.on("mouseover", () => {
        console.log('mouseover')
        win.setSize(300, 40)
    });
  
    ipcMain.on("mouseout", () => {
        console.log('mouseout')
        win.setSize(300, 5)
    });
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
  
