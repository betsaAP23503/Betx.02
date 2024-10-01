let resultado; 
function dado(){
    const resultado = Math.floor(Math.random() *2) +1;
    document.getElementById("dado").innerText = resultado; /*variable que llama el id dado*/
}
