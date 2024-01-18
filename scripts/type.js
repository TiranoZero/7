typer = document.querySelector('.main')
cd = document.querySelector('.cdown')
txt = 'Projeto Alpha Iniciado...'
inputContainer = document.querySelector('.title')
i = 0


function Typing(show, onde, frase, velocidade=40) {
    if (i < frase.length) {
        onde.innerHTML += frase.charAt(i)
        i++
        setTimeout(Typing, vel)
    }    
    else {
        setTimeout(()=>{
            typer.style.display = "none"
            show.style.display = "block"
        }, 2000)
    }
}

window.addEventListener('load', Typing(cd, inputContainer, txt))
