console.log("Qual seu nivel heroi?") 
for(let heroi = 10; heroi = 0; heroi--){
    console.log(" você precisa treinar mais para ter um rank")
    break
}

function calculoDeHeroi(vitorias, derrotas) {
    let resultado;
    let nivel;

    if (vitorias <= 10) {
        nivel = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendario";
    } else {
        nivel = "Imortal";
    }

    resultado = vitorias - derrotas; 

    return { "resultado": resultado, "nivel": nivel };
}

let resultadoHeroi = calculoDeHeroi(15, 5);
console.log(`Olá heroi seu nivel é de ${resultadoHeroi.nivel} e sua quantidade de vitorias é ${resultadoHeroi.resultado}`);
