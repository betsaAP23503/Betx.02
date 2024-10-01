let nombres = {
    'personas':[
        {
            'nombre' : 'Juan',
            'apellido' : 'Robles',
            'edad' : 29,
            'profesion' : 'Licenciado',
        },

        {
            'nombre' : 'Juan',
            'apellido' : 'Robles',
            'edad' : 29,
            'profesion' : 'Licenciado',
        },

        {
            'nombre' : 'Juan',
            'apellido' : 'Robles',
            'edad' : 29,
            'profesion' : 'Licenciado',
        }

    ]
};

//Obteniendo el elmento contenedor donde se cargaran todos los datos del objeto JSON

let div = document.getElementById('info');
div.innerHTML = volcarDatos(nombres.personas);

function volcarDatos(datos){
    let total = datos.length;
    data = '<ul class=\"grid\"\n>';
    for(let i=0;    i<total;    i++){
        data += "<li class=\"box\">\n";
 data += "<div class=\"box-shadow\"></div>\n";
 data += "<div class=\"box-gradient\">\n";
data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
data += "<h4>\nNombre: " + datos[i].nombre + " " + datos[i].apellido +
"\n</h4>\n";
 data += "<p>\nEdad: " + datos[i].edad + "\n<br />\n";
 data += "Profesión: " + datos[i].profesion + "\n</p>\n";
 data += "</div>\n";
 data += "</li>\n";
 }
 data += "</ul>\n";
 return data;
}
