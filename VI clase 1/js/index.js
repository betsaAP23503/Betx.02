function promediar(){
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const salida = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);
    
    if(promedio >= 6 && promedio <=10){
        salida.textContent = promedio.toFixed(2) + '-Esta aprobado';
    }if(promedio >=1 && promedio < 6){
        salida.textContent = promedio.toFixed(2) + '-Esta reprobado'
    }
    else{
        salida.textContent = 'Incluya unicamente notas del rango del 1 al 10';
    }

    
}
