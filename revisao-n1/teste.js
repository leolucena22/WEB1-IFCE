const mudarCor = document.querySelector('#btn-mudar-cor')
const resetarCor = document.querySelector('#btn-resetar-cor')
const mudarFonte = document.querySelector('#btn-mudar-fonte')
const aumentarFonte = document.querySelector('#btn-aumentar-fonte')
const diminuirFonte = document.querySelector('#btn-diminuir-fonte')

if (mudarCor) {
    mudarCor.addEventListener('click', () => {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    })
}

if (resetarCor) {
    resetarCor.addEventListener('click', () => {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    })
}

if (mudarFonte) {
    mudarFonte.addEventListener('click', () => {
        document.body.style.fontFamily = 'times, sans-serif'
    })
}

if (aumentarFonte) {
    aumentarFonte.addEventListener('click', () => {
        const tituloFonte = document.querySelector('h1')
        const fontSize = window.getComputedStyle(document.body).fontSize
        const fontSizeNumber = parseFloat(fontSize)
        document.body.style.fontSize = (fontSizeNumber + 2) + 'px'
        tituloFonte.style.fontSize = '3em'
    })
}

if (diminuirFonte) {
    diminuirFonte.addEventListener('click', () => {
        const tituloFonte = document.querySelector('h1')
        const fontSize = window.getComputedStyle(document.body).fontSize
        const fontSizeNumber = parseFloat(fontSize)
        document.body.style.fontSize = (fontSizeNumber - 2) + 'px'
        tituloFonte.style.fontSize = '1.5em'
    })
}
