// get element
let myImage = document.querySelector('img');

// register image callback to anonymous function
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/FEwEhBsWQAILbHZ.jpg') {
        myImage.setAttribute('src', 'images/IMG_2175.JPG');
    } else {
        myImage.setAttribute('src', 'images/FEwEhBsWQAILbHZ.jpg');
    }
}

// get elements
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    // called if first time and no name stored locally
    setUserName();
} else {
    // subsequent runs retrieve stored name and change heading
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// register button callback
myButton.onclick = function () {
    setUserName();
}

// callback for myButton
function setUserName() {
    // prompts, stores and changes heading
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

// only executed once
console.log('ooof');