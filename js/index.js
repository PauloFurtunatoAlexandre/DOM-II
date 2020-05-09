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
})
