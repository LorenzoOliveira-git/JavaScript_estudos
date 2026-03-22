function calcular_valor_total(){
    let inTempo = document.getElementById("inTempo").value;
    const inValor = document.getElementById("inValor").value;

    inTempo = Math.ceil(inTempo/15);
    const outValorFinal = inTempo * inValor;

    document.getElementById("outValorTotal").textContent = "Valor final: R$ "+outValorFinal;
}

const btEnviar = document.getElementById("btEnviar")
btEnviar.addEventListener("click",calcular_valor_total)

