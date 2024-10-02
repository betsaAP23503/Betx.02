function calcularP() {
    const act1 = document.querySelector("#act1").value;
    const act2 = document.querySelector("#act2").value;
    const act3 = document.querySelector("#act3").value;
  
    if (!act1 || !act2 || !act3) {
      alert("Por favor, ingrese todos los valores");
      return;
    }
  
    const sum = parseFloat(act1) + parseFloat(act2) + parseFloat(act3);
    const promedio = (sum / 3) * 100;
    
    const total = 0.35; 
    
    if (promedio >= total) {
      document.querySelector("#notaT").innerHTML = `Felicidades, tu promedio es de ${promedio.toFixed(2)}%`;
    } else {
      document.querySelector("#notaT").innerHTML = `Tu promedio es ${promedio.toFixed(2)}%. Necesitas un promedio de ${total * 100}% para alcanzar 35%.`;
    }
  }

  document.querySelector("#boton").addEventListener("click", calcularP);