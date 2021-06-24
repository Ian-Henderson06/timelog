// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('store-data', function (event,store) {
    console.log(store);
});


SetupServerAddressInputView();