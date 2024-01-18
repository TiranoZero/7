txt = 'Projeto Alpha Iniciado...'
inputContainer = document.querySelector('.saud')

vel = 40
i = 0

function Typing(onde,frase) {
    if (i < frase.length) {
        onde.innerHTML += frase.charAt(i)
        i++
        setTimeout(Typing(onde, frase), vel)
    }    
}

window.addEventListener('load', Typing(inputContainer, txt))