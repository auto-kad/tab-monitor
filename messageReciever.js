chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            let newParagraphElement = document.createElement("P");
            newParagraphElement.innerText = message.url.toString() + message.date;
            let optionsPageTabEntries = document.getElementById("closedTabsBox");
            optionsPageTabEntries.appendChild(newParagraphElement);
            chrome.tabs.remove(sender.tab.id);

        }
    );