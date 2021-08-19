let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/inst.png') {
      myImage.setAttribute('src','image/bob.png');
    } else {
      myImage.setAttribute('src','image/inst.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }в
  }

  if(!localStorage.getItem('name')) {
	setUserName();
  } else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
	setUserName();
  }