
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
    RemoveInputView()

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
    RemoveTimeSessionStartView()

    let time = document.createElement('h1');
    time.innerHTML = '0 : 00'
    time.setAttribute('id', 'Time')
    time.setAttribute('class', 'textbutton')
    time.addEventListener('click', function () {
        ControllerTimeEnd()
    })

    document.getElementById('view').appendChild(time)
}


function SetupInputView(inputPlaceholder, controllerFunction) {
    
    //Remove previous input view
    RemoveInputView()

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

function RemoveInputView() {
    let input = document.getElementById('MainInput');
    if(input != undefined)
        input.remove()
}

function RemoveTimeSessionStartView() {
    let input = document.getElementById('StartSessionButton');
    if(input != undefined)
        input.remove()
}

function SetTimeInView(timeText) {
    let time = document.getElementById('Time');
    time.innerHTML = timeText
}





