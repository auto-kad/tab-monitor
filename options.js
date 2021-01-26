var testingInput = document.getElementById('durationValue');

//this eventhandler is meant to restrict the user input to being a valid number which is > 0 (and no floats)
testingInput.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}




