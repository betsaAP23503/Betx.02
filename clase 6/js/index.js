function calcular(){
    let radio = +document.getElementById('radio1').value;
     let area = (Math.PI * (radio ** 2));
     console.log (area);
     document.getElementById('area').value = area;
}
