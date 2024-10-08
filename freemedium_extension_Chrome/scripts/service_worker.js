chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        let url = currentTab.url;

        if(url.includes("medium.com")) {
            let newUrl = `https://freedium.cfd/${url}`;

            chrome.tabs.create({ url: newUrl, index: currentTab.index + 1 });
        } else {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: '../images/icon-128.png',
                title: 'Wrong site',
                message: 'This extension only works on medium.com',
                priority: 2
            });
        }
    });
});

