/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/


/* 
retorna um valor com um número de dígitos definidos
Ao mesmo tempo que limita os dígitos que serão retornados,
também irá arrendondar o valor de acordo com as casas decimais permitidas...
*/
console.log(23.585485.toPrecision(2));

// retorna um valor arrendondando para 02 casas decimais
console.log(Number("45.585").toFixed(2));

// retorna um number no formato de string, com 02 casas decimais
console.log(Number("45.585").toFixed(2).toString());

// retorna o comprimento da cadeia de caracteres
console.log("Luis Fernando Machado".length);