function substitute() {
  chrome.tabs.executeScript({
    file: 'substitute.js'
  }); 
}

document.getElementById('submit').addEventListener('click', substitute);