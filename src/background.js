// Chrome v24+
var myWin = null;

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'bounds': {
			width: 400, 
    		height: 500
		}
	});

    chrome.app.window.create('sandboxed.html', {
    	'bounds': {
    		width: 400, 
    		height: 500
    	}
    }, function(win) {
    	myWin = win;
    	myWin.contentWindow.postMessage('Message from window', '*');
    });
});