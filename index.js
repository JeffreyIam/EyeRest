
function saveChanges() {
    var box = document.createElement('div');
    box.textContent = "You've been using the computer for 30 minutes - Please take a 2 minute walk to rest your eyes.";
    box.setAttribute('class', 'popup');

    var i = 5;

    var intervalID = setInterval(function() {
        if (i === 0) {
            document.body.appendChild(box);
        }
        chrome.storage.sync.set({
            'value': i
        }, function() {
            console.log(i);
        });
        i--;
    }, 1000);
    chrome.storage.sync.get('value', function(obj) {
        console.log(obj);
    });

}