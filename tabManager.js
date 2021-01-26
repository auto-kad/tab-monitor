    
    chrome.storage.onChanged.addListener(function(changes, namespace) {

        chrome.tabs.query({}, function(tabs) {
    
            console.log('before the loop');
    
            for(var i = 0; i < tabs.length; i++){
                if(!tabs[i].url || !tabs[i].url.startsWith('http')){
                    console.log('rejected');
                    continue;
                }
                console.log('not rejected');
                chrome.tabs.executeScript(tabs[i].id, {file: 'testing.js'});
            }
              
        });


    });


    


  /*   chrome.tabs.onCreated.addListener(function () {
        console.log(5);
    
        var time;
        window.onload = resetTimer;
    
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
    
        function testing() {
            //chrome.storage.local.set({})
            chrome.runtime.sendMessage({
                date: new Date().toLocaleString(),
                url: window.location.href
            });
            
            console.log(new Date().toLocaleString());
            console.log(window.location.href);

        }
    
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(testing, 5000);
        }
    
    });

    chrome.tabs.onUpdated.addListener(function () {
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
            clearTimeout(time);
            time = setTimeout(testing, 5000);
        }
    
    }); */

 

