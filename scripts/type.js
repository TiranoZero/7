typer = document.querySelector('.main')
cd = document.querySelector('.cdown')
frase = 'Projeto Alpha Iniciado...'
inputContainer = document.querySelector('.title')
vel = 40
i = 0

function show(){
        typer.style.display = "none"
        cd.style.display = "block"
}

function Typing() {
    if (i < frase.length) {
        inputContainer.innerHTML += frase.charAt(i)
        i++
        setTimeout(Typing, vel)
    }    
    else {
        setTimeout(show(), 1500)
    }
}

window.addEventListener('load', Typing)
