chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "URL_MISMATCH") {
      document.querySelector('.message').textContent = "This extension only works on medium.com";
    }
  });
  