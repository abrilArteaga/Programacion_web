/*ACTIVIDAD 3
const numbers =[1, 2, 3, 4];
let suma = 0;
function sumaPares(numeros){
    for(let i = 0; i < numeros.length; i++){
      if(numeros[i] % 2 === 0){
        suma += numeros[i];
      }  
    }
    console.log(suma);
}
sumaPares(numbers);*/

/*ACTIVIDAD 4
const palabra =["hola","chau","ventana","campera","mesa"];
function terminanEnA(palabras){
const todosSonPares = palabras.every(palabra) => palabra.endwith("a"));
return todosSonPares;
}
console.log(terminanEnA(palabra)); */

/*ACTIVIDAD 5
const numeros = [2, 1, -3, -4];
function sortAbsoluteNumbers(numbers) {
  const del = [];
  for (let i = 0; i < numbers.length; i++) {
    const abs = Math.abs(numbers[i]);
    del.push(abs);
  }
  const sorted = del.sort((a, b) => a - b);
  return sorted;
}

console.log(sortAbsoluteNumbers(numeros)); */

//ACTIVIDAD 6
const words = ["hola", "ventana", "campera", "chau", "mesa"];
const word = ["chau"];
function buscaPalabras(words, word) {
  const arr = [];
  const i = words.indexOf(word);
  for (let word of words) {
    if (word.length < i) {
      arr.push(word);
    }
  }
  return arr;
}
console.log(buscaPalabras(words, word));
