cd  = document.querySelector(".cdown")
dia = document.querySelector('.days')
hora = document.querySelector('.hours')
minuto = document.querySelector('.minutes')
segundos = document.querySelector('.seconds')

dDay = new Date(`January 12 2024 20:00:00`) 


const countdown =  ()=> {
const timer = new Date()
const counter = dDay - timer 

const days = Math.floor(counter / 1000 / 60 / 60 / 24 )
const hours = Math.floor(counter / 1000 / 60 / 60 ) % 24
const minutes = Math.floor(counter / 1000 / 60  ) % 60
const seconds = Math.floor(counter / 1000 ) % 60

dia.textContent = days < 10 ? '0' + days : days 
hora.textContent = hours < 10 ? '0' + hours : hours
minuto.textContent = minutes < 10 ? '0' + minutes : minutes
segundos.textContent = seconds < 10 ? '0' + seconds : seconds
}

setInterval(countdown, 1000)

setTimeout(()=>{
    if(dia.textContent == 0 && hora.textContent == 0 && minuto.textContent == 0 && segundos.textContent == 0 ){
        window.open("https://projetoalpha.tech/home/404.html", '_self') 
    }else{
        console.log("Falta muito pouco, aguente firme milord")
    }
}, 2000)
