// Manipulando Array

let techs = ["html","css","js"];

console.log(techs);

// adicionar um item no fim
techs.push("node.js");
techs.push("react.js");
techs.push("python");
techs.push("power.bi");
techs.push("php");
techs.push("cloud aws");
techs.push("linux");
console.log(techs);

// adicionar no começo
techs.unshift("Discover");
techs.unshift("GoStack");
console.log(techs);

// remover do fim
techs.pop();
console.log(techs);

// remover do começo
techs.splice(0,1);
techs.shift();
console.log(techs);

// pegar somente alguns elementos do array
console.log(techs.slice(0,3));

// remover 1 ou mais itens em qualquer posição do array
techs.splice(6,1);      console.log(techs);
techs.splice(6,2);      console.log(techs);

// encontrar a posição de um elemento no array
console.log(techs.indexOf("css"));
// indexOf é caseSensitive
console.log(techs.indexOf("CSS"));


// Localiza um item e remove do array...
let iIndex = techs.indexOf("react.js");

techs.splice(iIndex,1);
console.log(techs);