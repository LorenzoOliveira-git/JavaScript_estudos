alert("Welcome to my project! I hope you enjoi it. Fell freee to explore and let me know if you have any questions or feedback. Have fun!");

console.log("Welcome to my project! I hope you enjoi it. Fell freee to explore and let me know if you have any questions or feedback. Have fun!");

const nome = "Lorenzo";
let idade = 25;
const cidade = "São Paulo";

console.log("Olá, "+ nome + "! Você tem " + idade + " anos e mora em "+ cidade + ".")
console.log(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`)

const acompanhada = true;

if (idade >= 18) {
    console.log("Você é maior de idade.")
}
else if (idade == 16 && acompanhada) {
    console.log("Você é menor de idade, mas você está acopanhada.")
}
 else{
    console.log("Você é menor de idade.")
}

console.log(typeof nome)