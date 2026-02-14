// Ejercicio 1 – Área de triángulos múltiples

/*
const calculateTriangleArea = (a,b) => (a * b) / 2 // (base*height) / 2

for (let times = 0; times < 3; times++) {
    let base = parseInt(prompt(`Ingresa la base de triangulo ${times+1}:`))
    let height = parseInt(prompt(`Ingresa la altura de triangulo ${times+1}:`))
    if(base > 0 && height > 0) {
        console.log(`Area de Triangulo ${times+1} es: ${calculateTriangleArea(base, height)}`)
        }else {
        alert(`Valor incorrecto. Ingrese el valor del triangulo ${times+1} nuevamente`)
        times --
        }
    }
*/

//##############################################################
// Ejercicio 2 – Conversión de Celsius a Fahrenheit

/*
const convertToFahrenheit = c => (c*1.8) + 32 // (celsius*1.8) + 32

for (let times = 0; times < 5; times++) {
    let temperature = parseFloat(prompt(`Ingrese la temperatura #${times+1}`))
    if (temperature < 0 || temperature >= 0 ) {
        console.log(`La Temperatura de ${temperature} Celsius en Fahrenheit es: ${convertToFahrenheit(temperature)}`)
    } else {
        alert(`Valor incorrecto. Intente nuevamente`)
        times--
    }
}
*/

//##############################################################
// Ejercicio 3 – Contar vocales en un texto

/*
const countingVowel = function(frase) {
    let counter = 0
    for (let letter of frase.toLowerCase()){
        if (letter === "a" || letter ===  "e" || letter ===  "i" || letter ===  "o" || letter ===  "u"){
            counter++
        }
    }return counter
}

for (let i = 0; i < 3; i++){
    let frases = prompt(`Ingresa la frase #${i+1}: `)
    console.log(`Frase #${i+1} tiene: ${countingVowel(frases)} vocales`)
}
*/

//##############################################################
//Ejercicio 4 – Pares e impares en un rango

/*
const classifyEvenOdd = function(begining, ending) {
    for(let counter = begining; counter <= ending; counter++){
        if(counter % 2 === 0 ) {
            console.log(`El numero: ${counter} es par`)
        } else {
            console.log(`El numero: ${counter} es inpar`)
        }
    }
}

let beginingNumber = parseInt(prompt(`Ingresa el Numero inicial: `))
let endingNumber = parseInt(prompt(`Ingresa el numero final: `))

if (beginingNumber > endingNumber){
    alert(`Por favor ingrese valores correctos`)
}else if  (!isNaN(beginingNumber) && !isNaN(endingNumber)) {
    classifyEvenOdd(beginingNumber, endingNumber)
} else {
    alert(`Por favor ingrese valores correctos`)
}
*/

//##############################################################
//Ejercicio 5 – Número mayor y suma

/*
const greatestAndSum = function(number1, number2, number3, number4, number5) {
    let greatest = number1
    if(greatest < number2){
        greatest = number2
    }
    if (greatest < number3){
        greatest = number3
    }
    if(greatest < number4){
        greatest = number4
    }
    if(greatest < number5){
        greatest = number5
    }
    let total = number1 + number2 + number3 + number4 + number5
    console.log(`
        El numero mas grande es: ${greatest}
        La suma total de los 5 numeros es: ${total}
        `)
}

let num1
let num2
let num3
let num4
let num5

for (let i = 0; i < 5; i++) { 
    let number = parseInt(prompt(`${i+1} Ingresa el numero: `))
    if (!isNaN(number)) {
        switch (i) {
        case 0: 
            num1 = number
            break;
        case 1:
            num2 = number
            break;
        case 2: 
            num3 = number
            break;
        case 3: 
            num4 = number
            break;
        case 4: 
            num5 = number
            break;
    }
    } else {
        alert(`Ingrese Valores correctos`)
    }
}
greatestAndSum(num1, num2, num3, num4, num5)
*/

