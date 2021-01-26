chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            let x = document.createElement("P");
            x.innerText = message.url.toString() + message.date;
            //console.log(x);
            let y = document.getElementById("closedTabsBox");
            y.appendChild(x);
        }
    );