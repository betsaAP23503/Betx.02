function tirarDado() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (min >= max) {
        alert("El valor mínimo debe ser menor que el máximo.");
        return;
    }

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('#resultado').textContent = `Resultado: ${resultado}`;
}