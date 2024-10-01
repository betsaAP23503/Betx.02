function saludar(){
    let nombre = document.getElementById('datoUsuario');
    let apellido = document.getElementById('datoApellido');

    // alert ('Hola ' + nombre.value + ' ' + apellido.value);

    let salida = document.getElementById('mostrarDatos');

    salida.textContent = 'Hola ' + nombre.value + ' ' + apellido.value;

}