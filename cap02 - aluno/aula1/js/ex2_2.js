
function calcular_tempo(){
    const inDuracao = Number(document.getElementById("inDuracao").value);
    const horas = Math.floor(inDuracao/60);
    const minutos = inDuracao%60;
    let outHoras = document.getElementById("horas")
    let outMinutos = document.getElementById("minutos")
    outHoras.textContent = `Horas: ${horas}`
    outMinutos.textContent = `Minutos: ${minutos}` 
}

const btConverter = document.getElementById("btConverter")
btConverter.addEventListener("click",calcular_tempo)

