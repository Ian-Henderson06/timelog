const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
    let display = screen.getPrimaryDisplay()
    let width = display.bounds.width
    let height = display.bounds.height

    const win = new BrowserWindow({
        width: 400,
        height: 400,
        x: width - 400,
        y: height - 400,
        frame: false
    })

    win.setAutoHideMenuBar(true) // Hides menubar by default
    win.setMenuBarVisibility(false) // Hides menubar - might not be Linux compatable 
    win.loadFile('mvc/view.html') //
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