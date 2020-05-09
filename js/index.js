let logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.2)'
    logo.style.transform = 'rotate(360deg)'
    logo.style.transition = 'all 0.3s'
})

let body = document.querySelector('body')
body.addEventListener('keydown', () => {
    body.style.backgroundColor = '#fbe8da'
    body.style.transition = 'all 0.9s'
})

let imgBus = document.querySelector('.container.home .intro img')

imgBus.addEventListener('wheel', (e) => {
    event.preventDefault()

    const upsideDown = Math.sign(event.deltaY);

    imgBus.style.transform = `scale(${upsideDown})`
    imgBus.style.transition = 'all 0.6s'
})

let pickElement = document.querySelector('section.content-destination h2')
console.log(pickElement)

let destination = document.querySelector('section.content-destination img')
destination.setAttribute('class', 'destination')

var dragged;
pickElement.addEventListener("drag", function(event) {

}, false);

pickElement.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.transform = 'scale(1.1)'
  event.target.style.transition = 'all 0.6s'
}, false);

pickElement.addEventListener("dragend", function(event) {
  event.target.style.transform = "scale(1)";
}, false);

pickElement.addEventListener("dragover", function(event) {
  event.preventDefault();
//   event.target.style.color = '#fff'
}, false);

pickElement.addEventListener("dragenter", function(event) {
  if (event.target.className == "destination") {
    event.target.style.background = "black";
  }
}, false);

pickElement.addEventListener("dragleave", function(event) {
  if (event.target.className == "destination") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "destination") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);