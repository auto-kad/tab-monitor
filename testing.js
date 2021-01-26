 var checkInactivityTime = function () {

    var time;
    window.onload = resetTimer;

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function testing() {
        chrome.runtime.sendMessage({
            date: new Date().toLocaleString(),
            url: window.location.href
        });
        chrome.tab.remove();
    }

    function resetTimer() {
        chrome.storage.sync.get(['maxIdleTime'], function (result) {
            var maxIdleTime = result.maxIdleTime;

            console.log(result);
            clearTimeout(time);
            time = setTimeout(testing, maxIdleTime);
        } );
        
    }

};

checkInactivityTime();

