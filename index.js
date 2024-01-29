const elementhoras = document.getElementById('hora')
        const elementminutos = document.getElementById('minutos')
        const elementsegundos = document.getElementById('segundos')


        function newtime(){
            const date = new Date();

            const hora = date.getHours()
            const minutos = date.getMinutes()
            const segundos = date.getSeconds()

            elementhoras.textContent = fixtime(hora)
            elementminutos.textContent = fixtime(minutos)
            elementsegundos.textContent = fixtime(segundos)
        
        }

        function fixtime(time){
            return time < 10 ? '0'+time : time
        }
            setInterval(newtime, 1000)