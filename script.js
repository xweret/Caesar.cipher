const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById("cifrador");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

//recursive function to encript the message
//funcion recursiva que encripa palabra por palabra

const printChar = (currentLetterIndex, wordArray) => {  
    if(wordArray.length === currentLetterIndex) return; 
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement('span');
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length]:
                charSinCodificar; 
            printChar(currentLetterIndex + 1, wordArray);
        });
}

// funcion que anima como aparece el resultado del cifrado
// cambiando cambiosDeLetra por un  valor mayor, el resultado se ve menos dinamico pero mas 'consola'

const animateChar = spanChar => {
    let cambiosDeLetra = 0; 
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 5) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50)
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage();
}

cifrador.onsubmit = submit;
