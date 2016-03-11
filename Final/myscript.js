function changeText(request, sender, sendResponse){

    var profileNames = [];
        var profileImages = [];
        var anchors = document.getElementsByClassName('fwb fcg');
        Array.prototype.forEach.call(anchors, function (element, index) {
            profileNames.push(element.firstChild.innerText);
        })

        var anchors = document.querySelectorAll('a[class="profileLink"');
        Array.prototype.forEach.call(anchors, function (element, index) {
            profileNames.push(element.innerText);
        })

        var anchors = document.getElementsByClassName('UFICommentActorName');
        Array.prototype.forEach.call(anchors, function (element, index) {
            profileNames.push(element.firstChild.innerText);
        }) 

        var images = document.getElementsByClassName('_s0 _5xib _5sq7 _44ma _rw img');
        Array.prototype.forEach.call(images, function (element, index) {
            profileImages.push(element.getAttribute('src'));
        })

        var images = document.getElementsByClassName('img UFIActorImage _54ru img');

        Array.prototype.forEach.call(images, function (element, index) {
            profileImages.push(element.getAttribute('src'));
        })
        console.log(profileNames);
        console.log(profileImages);


        var anchors = document.getElementsByClassName('fwb fcg');
        Array.prototype.forEach.call(anchors, function (element, index) {
            element.firstChild.innerText = profileNames[Math.floor(Math.random() * profileNames.length)];
        })

        var anchors = document.querySelectorAll('a[class="profileLink"');
        Array.prototype.forEach.call(anchors, function (element, index) {
        	if(Math.random()< 0.5){
            element.innerText = profileNames[Math.floor(Math.random() * profileNames.length)];
        }
        })

        var anchors = document.getElementsByClassName('UFICommentActorName');
        Array.prototype.forEach.call(anchors, function (element, index) {
        	if(Math.random()< 0.5){
            element.firstChild.innerText = profileNames[Math.floor(Math.random() * profileNames.length)];
            }
        }) 


        var images = document.getElementsByClassName('_s0 _5xib _5sq7 _44ma _rw img');
        Array.prototype.forEach.call(images, function (element, index) {
        	if(Math.random()< 0.5){
            element.setAttribute('src', profileImages[Math.floor(Math.random() * profileImages.length)]);
            }
        })

        var images = document.getElementsByClassName('img UFIActorImage _54ru img');

        Array.prototype.forEach.call(images, function (element, index) {
        	if(Math.random()< 0.5){
            element.setAttribute('src', profileImages[Math.floor(Math.random() * profileImages.length)]);
            }
        })

}


    chrome.runtime.onMessage.addListener(changeText);
