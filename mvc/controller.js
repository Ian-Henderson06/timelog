// renderer process
var ipcRenderer = require('electron').ipcRenderer;
const Store = require('electron-store');
var intervalID = -1

ipcRenderer.on('stored-address', function (event,store) {
    console.log(store);
});


//Store used to avoid re-entry of known information.
const store = new Store();
//store.set('test', true)
//console.log(store.get('test'))

store.delete('address')
store.delete('name')

// No address yet
if (store.get('address') == undefined) {
    SetupServerAddressInputView()
} else {
    if (store.get('name') == undefined) {
        SetupNameInputView()
    }
    else {//Both are already assigned
        SetupTimeSessionStartView()
    }
}



/////////////////////////////////* Functions called by view */////////////////////////////////////////

//Address entered into input box
function ControllerAddressEntered(addressEntered) {
    store.set('address', addressEntered)
    SetupNameInputView()
}

//Name entered into input box
function ControllerNameEntered(nameEntered) {
    store.set('name', nameEntered)
    SetupTimeSessionStartView()
}

//Time session started
function ControllerTimeSessionStarted() {
    SetupTimeView()
    intervalID = StartTimer()
}

//Time session ended
function ControllerTimeEnd(timeInView) {
    //Clear previous backups to make sure new saved backup is accurate
    store.delete('saved-time')
    store.delete('saved-description')

    clearInterval(intervalID)

    store.set('saved-time', timeInView)
    SetupDescriptionView();
}

function ControllerDescriptionEntered(descriptionEntered) {
    store.set('saved-description', descriptionEntered)

    //Loop back to allow a new session to be made
    SetupTimeSessionStartView()
}
