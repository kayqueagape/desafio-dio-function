const prompt = require("prompt-sync")();



console.log("Calculadora de partidas Rankeadas")


const Vitoria = prompt("Quantidade de Vitórias: ")

const Derrota = prompt("Quantidade de Derrotas: ")

function calculadoraNivel(Vitoria , Derrota) {
    var saldoVitorias= (Vitoria- Derrota);
    var Nivel = ""

    if (saldoVitorias < 10){
        Nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        Nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        Nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        Nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        Nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        Nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        Nivel = "Imortal";
    }

    return `O Herói tem de saldo: ${saldoVitorias}  está no nível:  ${Nivel} `;
}

console.log(calculadoraNivel(Vitoria , Derrota))
