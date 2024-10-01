let i, nota, notaactual, promedio;
num = parseInt(prompt("cuantas evaluaciones desea promediar", ""));
nota = 0;
header = "<header class=\"masked\">";
header += "<h1>Selectable Text</h1>";
header += "<header>";

document.write(header);
document.write("<section class = 'container'>");
for(i = 1; i <= num; i++){
    notaactual = parseFloat(promt("ingrese la nota" + i + ":", ""));
    document.write("<h3>La nota" + i + ":" + Math.round(notaactual * Math.pow(10, 2))
        / Math.pow(10, 2) + "</h3>");
        nota += notaactual;
}

promedio = nota / (i - 1);
document.write("<h3>El promedio de las notas es:" + Math.round(promedio * 
Math.pow(10, 2)) / Math.pow(10, 2) + "</h3>");
document.write("</article>");
document.write("</section>");
