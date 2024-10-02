
const contadorDisplay = document.querySelector('#contador');
const iniciarB = document.querySelector('#iniciarB');
const alarmaAudio = document.querySelector('#alarma');


let interval;
let tiempoRestante = 10; 


function iniciarCuentaRegresiva() {
    clearInterval(interval); 
    tiempoRestante = 10; 
    contadorDisplay.textContent = tiempoRestante;

    interval = setInterval(() => {
        tiempoRestante--;
        contadorDisplay.textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            clearInterval(interval); 
            alarmaAudio.play(); 
            setTimeout(() => {
                alert('Tiempo terminado');
            }, 1000); 
        }
    }, 1000); 

}
iniciarB.addEventListener('click', iniciarCuentaRegresiva);
