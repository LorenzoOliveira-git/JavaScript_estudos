function calcular_preco_final(){
    const inValorUnit = document.getElementById("inValorUnit").value;
    const inQuantidade = document.getElementById("inQuantidade").value;

    let valor_final = inValorUnit * inQuantidade;

    valor_final = Math.floor(valor_final);

    const outValorFinal = document.getElementById("outValorFinal");
    outValorFinal.textContent = "Valor final: R$ "+valor_final;
}

const btEnviar = document.getElementById("btEnviar")
btEnviar.addEventListener("click",calcular_preco_final)