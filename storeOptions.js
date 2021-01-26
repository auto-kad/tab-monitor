 function saveOptions() {
    var milliseconds = 1000 * document.getElementById("durationValue").value;
    
    chrome.storage.sync.set({
        'maxIdleTime' : milliseconds
    });
}
    document.getElementById("saveChanges").addEventListener("click", saveOptions);
