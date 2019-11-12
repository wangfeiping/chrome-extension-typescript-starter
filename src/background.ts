
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.color) {
        console.log('Receive color = ' + msg.color);
        document.body.style.backgroundColor = msg.color;
        sendResponse(msg.color);
    } else {
        sendResponse('Color message is none.');
    }
});

function polling() {
    console.log('polling');
    setTimeout(polling, 1000 * 30);
}

polling();

