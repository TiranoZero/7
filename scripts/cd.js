cd  = document.querySelector(".cdown")
dia = document.querySelector('.days')
hora = document.querySelector('.hours')
minuto = document.querySelector('.minutes')
segundos = document.querySelector('.seconds')

dDay = new Date(`January 12 2024 00:00:00`) 


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
