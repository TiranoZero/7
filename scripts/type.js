typer = document.querySelector('.main')
cd = document.querySelector('.cdown')
frase = 'Projeto Alpha Iniciado...'
inputContainer = document.querySelector('.title')
vel = 40
i = 0

function Typing() {
    if (i < frase.length) {
        inputContainer.innerHTML += frase.charAt(i)
        i++
        setTimeout(Typing, vel)
    }    
    else {
        show = ()=>{
        typer.style.display = "none"
        cd.style.display = "block"}
        setTimeout(show, 2000)
    }
}

window.addEventListener('load', Typing)
