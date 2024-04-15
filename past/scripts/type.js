txt = 'Bem vindo, seja você viajate ou não, como posso explicar... Talvez você já tenha escutado algo sobre viagem no tempo né? eu suponho que sim, se este tema te interessa faz sentido que tenha vindo parar aqui. Logo sua memória voltará aos poucos, a minha levou cerca de 15 anos para estabilizar. O site tem o intúito de entreter e atualizar os viajantes, para as pessoas desta era, será entretenimento, para nós será nossa missão, até breve.'
el = document.querySelector(".saud")

var i = 0;

var vel = 40;

function typer(frase, saida, speed=40) {
  if (i < frase.length) {
    saida.innerHTML += frase.charAt(i);
    i++;
    setTimeout(()=>{
      typer(frase, saida)
    }, speed);
  }
}

function main(){
  typer(txt, el)
}


window.addEventListener("load", main)
