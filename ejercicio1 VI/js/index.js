const hour = new Date().getHours(); 
let greeting;

if (hour > 6) {
  greeting = "Buenos dias";
} else {
  greeting = "buenas noches";
}

document.querySelector("#salida").innerHTML = greeting;