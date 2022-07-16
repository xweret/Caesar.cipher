const alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
const inputOriginal = document.getElementById("inputOriginal");
const cifrador = document.getElementById("cifrador");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");

// Caesar cipher funtion


const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    alert(wordArray);

}

cifrador.onsubmit = e => {
    e.preventDefault();
    resultado.innerHTML = "";
}

cifrador.onsubmit = submit;
