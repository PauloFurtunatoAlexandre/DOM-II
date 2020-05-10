let mainNavegation = document.querySelector('.main-navigation')
mainNavegation.style.zIndex = 999
//1
mainNavegation.addEventListener('dblclick', (e) => {
    e.stopPropagation()
    mainNavegation.style.backgroundColor = '#9ccbcf'
})

let logo = document.querySelector('.logo-heading')
//2
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.2)'
    logo.style.transform = 'rotate(360deg)'
    logo.style.transition = 'all 0.3s'
})
//3
logo.addEventListener('dblclick', (e) => {
    e.stopPropagation()
    e.target.textContent = 'Bus Leaving Now'
})

let imgBus = document.querySelector('.container.home .intro img')
//4
imgBus.addEventListener('wheel', () => {
    event.preventDefault()

    const upsideDown = Math.sign(event.deltaY);

    imgBus.style.transform = `scale(${upsideDown})`
    imgBus.style.transition = 'all 0.6s'
    stopPropagation()
})

let pickElement = document.querySelector('section.content-destination h2')

let dropDestination = document.querySelector('section.content-destination img')
//5
pickElement.addEventListener('dragstart', dragStart)
pickElement.addEventListener('dragend', dragEnd)

dropDestination.addEventListener('dragover', dragOver)
dropDestination.addEventListener('dragenter', dragEnter)
dropDestination.addEventListener('dragleave', dragLeave)
dropDestination.addEventListener('drop', dragDrop)

function dragStart() {
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
  this.className = 'dropDestination'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
}

function dragLeave() {
  this.className = 'dropDestination'
}

function dragDrop() {
  this.className = 'dropDestination'
  this.append(pickElement)
}

let body = document.querySelector('body')
//6
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 200) {
        body.style.backgroundColor = '#fbe8da'
        body.style.transition = 'all 0.9s'
    } else if(window.scrollY > 200 && window.scrollY < 400) {
        body.style.backgroundColor = '#fbe8dd'
        body.style.transition = 'all 0.9s'
    } else {
        body.style.backgroundColor = '#fbe8df'
        body.style.transition = 'all 0.9s'
    }
    e.stopPropagation()
})

//7
let protectedParagraph = document.querySelector('p')

protectedParagraph.addEventListener('contextmenu', e => {
    e.preventDefault()
})

// //8
// let header = document.querySelector('.container.home .intro h2')
// console.log(header)
// header.addEventListener('select', (e) => {
//     let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
//     console.log(selection)
//     selection.style.backgroundColor = 'yellow'
// })

//8
const logger = document.querySelector('.content-pick .destination .btn')
logger.textContent = 'Load it!'

logger.addEventListener('click', () => {
    runRequest('https://cors-anywhere.herokuapp.com/https://ichef.bbci.co.uk/news/1024/branded_news/12A9B/production/_111434467_gettyimages-1143489763.jpg')
})

function messageHandler(e) {
    alert(logger.textContent + `${e.type}: ${e.loaded} bytes transferred\n`)
}

function downloadHandler(request) {
    request.addEventListener('loadstart', messageHandler)
    request.addEventListener('progress', messageHandler)
    request.addEventListener('loadend', messageHandler)
}

function runRequest(url) {
    logger.textContent = ''

    const request = new XMLHttpRequest()
    downloadHandler(request)
    request.open("GET", url)
    request.send()
    return request
}

//9
window.addEventListener("offline", () => {
    alert('Oh oh, something is wrong, you are offline.')
})

//10
window.addEventListener("online", () => {
    alert('Phew! We thought we lost you! Welcome back :)')
})