// const pedidos = [
//   { id: 1, distribuidor: 'MercadoForte SP',   produto: 'Queijo Minas', qtd: 200, valorUnit: 18.90, entregue: true  },
//   { id: 2, distribuidor: 'AgroDistrib MG',    produto: 'Iogurte',      qtd: 500, valorUnit: 4.50,  entregue: false },
//   { id: 3, distribuidor: 'FreshFood RJ',      produto: 'Queijo Minas', qtd: 150, valorUnit: 18.90, entregue: true  },
//   { id: 4, distribuidor: 'NorteSupri PA',     produto: 'Manteiga',     qtd: 300, valorUnit: 12.00, entregue: true  },
//   { id: 5, distribuidor: 'SulDistrib RS',     produto: 'Iogurte',      qtd: 800, valorUnit: 4.50,  entregue: false },
//   { id: 6, distribuidor: 'CentroMercado GO',  produto: 'Manteiga',     qtd: 120, valorUnit: 12.00, entregue: true  },
// ];


// // Implementação da HOF:
// function transformarPedidos(arr, fn) {
//   arrayTransformado = []
//   for(let i = 0; i<arr.length;i++){
//     arrayTransformado[i] = Math.round(fn(arr[i]))
//   }
//   return arrayTransformado
// }

// // Uso — valor total por pedido:
// const totais = transformarPedidos(pedidos,function (obj){return obj.qtd * obj.valorUnit});
// console.log(totais)
// // esperado: [3780, 2250, 2835, 3600, 3600, 1440]

// const frota = [
//   { placa: 'ABC-1234', motorista: 'Jorge Leal',   rota: 'SP→MS', km: 1400, ativo: true  },
//   { placa: 'DEF-5678', motorista: 'Ana Ferreira', rota: 'MS→PA', km: 2100, ativo: false },
//   { placa: 'GHI-9012', motorista: 'Marcos Dias',  rota: 'SP→RJ', km: 430,  ativo: true  },
//   { placa: 'JKL-3456', motorista: 'Cláudia Rios', rota: 'RJ→BA', km: 1650, ativo: true  },
// ];


// const ativos  = frota.filter((f) => f.ativo === true);
// const mediaKm = ativos.reduce((actualValue,ativos) => ativos.km + actualValue,0) / ativos.length;
// console.log(mediaKm)
// esperado: (1400 + 430 + 1650) / 3 = 1160

const producao = [
    { usina: 'Sorriso', estado: 'MT', litros: 85000, meta: 80000, operando: true },
    { usina: 'Campo Novo', estado: 'MT', litros: 72000, meta: 90000, operando: true },
    { usina: 'Jataí', estado: 'GO', litros: 95000, meta: 90000, operando: true },
    { usina: 'Quirinópolis', estado: 'GO', litros: 0, meta: 85000, operando: false },
    { usina: 'Iturama', estado: 'MG', litros: 78000, meta: 75000, operando: true },
];
 
 
const gerarRelatorioFS = (producao) => {
 
    const totalUsinas = producao.length;
 
    const producaoTotal = producao.reduce((acumulador, valor) => acumulador + valor.litros, 0);
 
    const usinasBatendoMeta = producao
        .filter((industria) => industria.litros >= industria.meta)
        .map((industria) => industria.usina);
 
    const producaoPorEstado = producao.reduce((acc, { estado, litros }) => {
        if (!acc[estado]) {
            acc[estado] = 0;
        }
 
        acc[estado] += litros;
        return acc;
    }, {});
 
    return { totalUsinas, producaoTotal, usinasBatendoMeta, producaoPorEstado };
};

console.log(gerarRelatorioFS(producao))





