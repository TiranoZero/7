txt = 'Bem vindo, seja você viajate ou não, como posso explicar... Talvez você já tenha escutado algo sobre viagem no tempo né? eu suponho que sim, se este tema te interessa faz sentido que tenha vindo parar aqui. Logo sua memória voltará aos poucos, a minha levou cerca de 15 anos para estabilizar. O site tem o intúito de entreter e atualizar os viajantes, para as pessoas desta era, será entretenimento, para nós será nossa missão, até breve.'

var i = 0;

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".saud").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

