const display = document.querySelector('#display');

function mostrarDisplay(input){
    display.value += input;
}

function calcular(){
    display.value= eval(display.value);
}

function borrar(){
    display.value = '';
}
