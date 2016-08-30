function substitute() {
	chrome.tabs.executeScript({
    	code: 'var sub = "whaaaaaaale";'
	}, function() {
	    chrome.tabs.executeScript({file: 'substitute.js'});
	});
}

document.getElementById('submit').addEventListener('click', substitute);