// Objetivo:
// TRansformar número com 02 casas decimais
// e trocar ponto por virgula.

let number = 125.849325;
console.log(String(number.toFixed(2)).replace(".",","));