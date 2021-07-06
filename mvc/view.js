
/* Wrappers */
function SetupServerAddressInputView() {
    SetupInputView('SERVER ADDRESS', ControllerAddressEntered)
}

function SetupNameInputView() {
    SetupInputView('NAME', ControllerNameEntered)
}


/* Util Functions */
function SetupTimeSessionStartView() {
    
    // Remove previous input view
    RemoveViewByID('MainInput')

    let sessionStart = document.createElement('h1');
    sessionStart.innerHTML = 'START SESSION'
    sessionStart.setAttribute('id', 'StartSessionButton')
    sessionStart.setAttribute('class', 'textbutton')
    sessionStart.addEventListener('click', function () {
        ControllerTimeSessionStarted()
    })

    document.getElementById('view').appendChild(sessionStart)
}

function SetupTimeView() {
    RemoveViewByID('StartSessionButton')

    let time = document.createElement('h1');
    time.innerHTML = '0 : 00'
    time.setAttribute('id', 'Time')
    time.setAttribute('class', 'textbutton')
    time.addEventListener('click', function () {
        ControllerTimeEnd(GetTimeInView())
    })

    document.getElementById('view').appendChild(time)
}

function SetupDescriptionView() {
    RemoveViewByID('Time')

    SetupInputView('DESCRIPTION', ControllerDescriptionEntered)
}


function SetupInputView(inputPlaceholder, controllerFunction) {
    
    //Remove previous input view
    RemoveViewByID('MainInput')

    let input = document.createElement('input');
    input.setAttribute('id', 'MainInput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', inputPlaceholder);

     //On server address pressed
     input.onkeypress = function (e) {
        if (!e) e = window.event; //if e is undefined then we will give value to e from window.event
        var keycode = e.code || e.key;

         if (keycode == 'Enter' || keycode == 'NumpadEnter')  //Enter pressed
            controllerFunction(input.value); //Passed verification
    }
    document.getElementById('view').appendChild(input);
}













function RemoveViewByID(viewID) {
    let elem = document.getElementById(viewID);
    if(elem != undefined)
        elem.remove()
}

function SetTimeInView(timeText, totalSeconds) {
    let time = document.getElementById('Time');
    time.innerHTML = timeText
    time.setAttribute('data-totalSeconds', totalSeconds)
}

function GetTimeInView() {
    let time = document.getElementById('Time');
    return time.getAttribute('data-totalSeconds')
}





