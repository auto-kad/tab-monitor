 function saveOptions() {
    var x = 1000 * document.getElementById("durationValue").value;
    chrome.storage.sync.set({
        "maxIdleTime" : x
    });
}

    /* function print_something(){
        console.log(document.getElementById("durationValue").value);
    } */

    document.getElementById("saveChanges").addEventListener("click", saveOptions);
