typer = document.querySelector('.main')
cd = document.querySelector('.cabec')
txt = 'Projeto Alpha Iniciado...'
inputContainer = document.querySelector('.title')

vel = 40
i = 0

function Typing(onde,frase,loader,content) {
    if (i < frase.length) {
        onde.innerHTML += frase.charAt(i)
        i++
        setTimeout(Typing(onde, frase,loader, content), vel)
    }    
    else {         
        setTimeout(()=>{
            loader.style.display = "none"
            content.style.display = "block"},
            2000)
    }
}

window.addEventListener('load', Typing(inputContainer, txt, typer, cd))