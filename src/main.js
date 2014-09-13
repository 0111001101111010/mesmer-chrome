// Chrome v24+
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('tracker.html',
        {width: 1190, height: 709});
});