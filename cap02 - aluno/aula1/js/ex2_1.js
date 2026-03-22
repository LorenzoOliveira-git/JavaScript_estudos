function mostrarOla(){
    const inNome = document.getElementById("inNome");
    const outResposta = document.getElementById("outResposta");
    const nome = inNome.value;
    outResposta.textContent = "Olá " + nome;
}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",mostrarOla);