let aleatorios;
let min, max, cantidad;
let disparador, listado;

function init(){
    aleatorios = [];
    min = parseInt(promt('Ingrese el limite inferior', ""));
    max = parseInt(promt('Ingrese el limite superior', ""));
    cantidad = parseInt(prompt('Indique lacantidad de numeros aleatorios a generar', ""));
    disparador = document.getElementById('generador');
    listado = document.getElementById('listanumeros');

    if(disparador.addEventListener){
        disparador.addEventListener('click',
            function(evt){
                aleatorio(min, max, cantidad);
                listado.innerHTML = 'Los numeros aleatorios son: " + aleatorios.toString()';
            }, false);
    }
    else if(disparador.attachEvent){
        disparador.attachEvent('onlick', function(evt){
            aleatorio(min, max, cantidad);
            listado.innerHTML = 'Los numeros aleatorios son:' + aleatorios.toString();
        });
    }
}

    function aleatorio(minimo, maximo, cantidad){
        let numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if(aleatorios.length < cantidad){
            aleatorios.push(numero);
            aleatorio(minimo, maximo, cantidad);
        }
    }
window.onload = init;
        

