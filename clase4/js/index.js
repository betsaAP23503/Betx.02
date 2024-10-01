function sumar(){
    //const numero1 = document.getElementById('num1').value; método obsoleto

    const numero1 = +document.querySelector('#num1').value;
    const numero2 = +document.querySelector('#num2').value;
    document.querySelector('#salida').value = numero1 + numero2;


    //otro metodo para hacer la calculadora declarando variables
   // const display = document.querySelector('#salida');
    //display.value = numero1 + numero2;

}