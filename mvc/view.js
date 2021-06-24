document.getElementById('serveraddress').onkeypress = function (e) {
    if (!e) e = window.event; //if e is undefined then we will give value to e from window.event
    var keycode = e.code || e.key;

    if (keycode == 'Enter' || keycode == 'NumpadEnter')  //Enter pressed
      
}