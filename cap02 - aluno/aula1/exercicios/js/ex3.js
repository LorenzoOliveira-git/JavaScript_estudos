function calcular_valor_final(){
    const inDescricao = document.getElementById("inDescricao");
    const inValorUnit = document.getElementById("inValorUnit").value;
    const inQuantidade = document.getElementById("inQuantidade").value;

    const quantidadePromo = Math.floor(inQuantidade/3);
    const produtoPromo = inValorUnit * 0.5;
    const total = (inQuantidade - quantidadePromo) * inValorUnit + produtoPromo * quantidadePromo;

    document.getElementById("outQuantPromo").textContent = "Total de "+quantidadePromo+" conquistadas.";
    document.getElementById("outValorTotal").textContent = "Valor total da compra: R$ "+total;
    document.getElementById("outTerceiroItem").textContent = "Valor dos itens com desconto: R$ "+produtoPromo;
}

const btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click",calcular_valor_final)