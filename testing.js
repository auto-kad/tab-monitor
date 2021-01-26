 var checkInactivityTime = function () {
    console.log(5);

    var time;
    window.onload = resetTimer;

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function testing() {
        chrome.runtime.sendMessage({
            date: new Date().toLocaleString(),
            url: window.location.href
        });
        //console.log(new Date().toLocaleString());
        //console.log(window.location.href);
    }

    function resetTimer() {
        /* clearTimeout(time);
        time = setTimeout(testing, 5000); */
        chrome.storage.sync.get(['maxIdleTime'], function (result) {
            //time = setTimeOut(testing, maxIdleTime);
            var maxIdleTime = result.maxIdleTime;

            console.log(result);
            //console.log(789);
            clearTimeout(time);
            //console.log("I am supposed to wait " + maxIdleTime.toString() + " seconds before executing the setTimeout function");
            time = setTimeout(testing, maxIdleTime);
        } );
        
    }

};

checkInactivityTime();

