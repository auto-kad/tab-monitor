 function saveOptions() {
    var milliseconds = 1000 * document.getElementById("durationValue").value;
    if(!(milliseconds >= 1000)) console.log("Your value must be 1 second or greater");
    chrome.storage.sync.set({
        'maxIdleTime' : milliseconds
    });
}

    /* function print_something(){
        console.log(document.getElementById("durationValue").value);
    } */

    document.getElementById("saveChanges").addEventListener("click", saveOptions);
