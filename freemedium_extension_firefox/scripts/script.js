browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        let url = currentTab.url;

        if(url.includes("medium.com")) {
            let newUrl = `https://freedium.cfd/${url}`;

            browser.tabs.create({ url: newUrl, index: currentTab.index + 1 });
        } else {
            browser.notifications.create({
                type: 'basic',
                iconUrl: '../images/icon-48.png',
                title: 'Wrong site',
                message: 'This extension only works on medium.com',
                priority: 2
            });
        }
    });
});