const btn1 = document.querySelector("#modelo") 
const btn2 = document.querySelector("#bot") 
const btn3 = document.querySelector("#custom")

const btn = document.querySelectorAll('.buy')

const nm = document.querySelector("#nome")
const comprar = document.querySelector("#buy")

const ent = document.querySelector(".field")

let nome, produto, msg
const link = 'https://wa.me/555181524732?text=';





btn1.addEventListener('click', ()=>{
    produto = "site de templates"
    ent.style.display = "flex"
})

btn2.addEventListener('click', ()=>{
    produto = "bot discord"
    ent.style.display = "flex"
})

btn3.addEventListener('click', ()=>{
    produto = "site customizado"
    ent.style.display = "flex"
})


comprar.addEventListener("click", ()=>{
    nome = nm.value;
    msg = "Pedido: "+ produto + `%0ANome: `+ nome
  
    open(link+msg)
    ent.style.display = "none";
    console.log(msg)
  

});


