// const arrNumeros = [46,34,23,12]

// arrNumeros[1] = 36;
// arrNumeros[4] = 100;

// console.log(arrNumeros);

// for(let i = 0; i < arrNumeros.length; i++){
//     arrNumeros[i] = arrNumeros[i] * 10
// }

// console.log(arrNumeros)

// const estudantes = ["JUliana","aline","SOLANGE"]

// for(let i = 0; i < estudantes.length; i++){
//     estudantes[i] = estudantes[i].toUpperCase();
// }

// console.log(estudantes);

// const arrayNumeros = [18,95,45,76,23,99]

// for(let numero of arrayNumeros){
//     if(numero + 10 > 100 || numero > 100) continue;
//     console.log(numero+10);
// }

// const arrNumeros = [12,23,34,45,56]

// arrNumeros.push(67)
// console.log(arrNumeros)

// arrNumeros.pop();
// console.log(arrNumeros)

// const elem = arrNumeros.indexOf(12);
// console.log(elem)

// Pega tudo até a posição 2 (inclusive o caracter na posição 2)
// const novoArr = arrNumeros.slice(2);
// console.log(novoArr)

const arrNumeros = [12,23,34,45,56]

// const arrCalculado = arrNumeros.map((num) =>{
//     return num * 10;
// })

// console.log(arrCalculado)

// const arrCalculado = arrNumeros.forEach((num,i) =>{
//     console.log(`o número ${num} está no índice ${i}`)
// })

// lambda
const arrFiltrado = arrNumeros.filter(num => num % 5 === 0);

console.log(arrFiltrado)