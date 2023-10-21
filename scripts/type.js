        i = 0
        cont = 'Projeto Alpha Iniciado...'
        txt = document.querySelector('.title')
        vel = 50
        
        function Typing() {
            if (i < cont.length) {
                txt.innerHTML += cont.charAt(i)
                i++
                setTimeout(Typing, vel)
            }
        }

        window.addEventListener('load', Typing)
