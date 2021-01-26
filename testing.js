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
        console.log(new Date().toLocaleString());
        console.log(window.location.href);
    }

    function resetTimer() {
        /* clearTimeout(time);
        time = setTimeout(testing, 5000); */
        chrome.storage.local.get('maxIdleTime', function (result) {
            //time = setTimeOut(testing, maxIdleTime);
            var maxIdleTime = result.maxIdle;
            //console.log(789);
            clearTimeout(time);
            time = setTimeout(testing, maxIdleTime);
        } );
        
    }

};

checkInactivityTime();

//console.log(10);

