//variables a utilizar 
let i, num, nota, notaactual, promedio;


//obteniendo la cantidad de notas que se ingresaran
num = parseInt(prompt("¿Cuantas evaluaviones desea promediar?"));


//definiendo un valor de inicializacion para la variable que almacenara el promedio
nota = 0;
header = "<header class= \"masked\">";
header += "<h1>Selectable text</h1>";
header += "</hea der>";
document.write(header);


//ciclo o lazo que permitira ingresar cada nota 
document.write("<section class='container'>");
document.write("<article class='container'>");
for(i = 1; i<= num; i++){
    notaactual = parseFloat(prompt("ingrese la nota" + i + ": " ,""));
    document.write("h3>La nota" + i + ": " + Math.round(notaactual * Math.pow(10,2)) 
    /Math.pow(10, 2) + "<h3>");
    nota += notaactual;
    
}

//Obteniendo el calculo del promedio
promedio = nota / (i - 1);

//imprimir el valor redondeado a dos decimales del promedio
document.write("<h3>l promedio de las notas es: " + Math.round(promedio * 
    Math.pow(10, 2)) / Math.pow(10, 2) + "</h3>");

document.write("</article>");
document.write("</section>");