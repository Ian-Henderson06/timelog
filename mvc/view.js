function SetupServerAddressInputView() {
    let serverAddressInput = document.createElement('input');
    serverAddressInput.setAttribute('id', 'serverAddressInput');
    serverAddressInput.setAttribute('type', 'text');
    serverAddressInput.setAttribute('placeholder', 'SERVER ADDRESS');

     //On server address pressed
     serverAddressInput.onkeypress = function (e) {
        if (!e) e = window.event; //if e is undefined then we will give value to e from window.event
        var keycode = e.code || e.key;

         if (keycode == 'Enter' || keycode == 'NumpadEnter')  //Enter pressed
             console.log("Enter has been pressed");
    }
    document.getElementById('view').appendChild(serverAddressInput);
}

function SetupNameInputView() {
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'nameInput');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'NAME');

     //On server address pressed
     nameInput.onkeypress = function (e) {
        if (!e) e = window.event; //if e is undefined then we will give value to e from window.event
        var keycode = e.code || e.key;

         if (keycode == 'Enter' || keycode == 'NumpadEnter')  //Enter pressed
             console.log("Enter has been pressed");
    }
    document.getElementById('view').appendChild(nameInput);
}





