let myName = "Luis Fernando Machado";

// Trabalhando com Maiúsculas e Minúsculas
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// procurando a posição de um caracter sem modificar seu "tipo": Maiúsculo/Minúculo
console.log(myName.indexOf("o"));
console.log(myName.lastIndexOf("o"));

// procurando a posição de um caracter modificando seu "tipo" para maiúsculo...
console.log(myName.toUpperCase().indexOf("O"));

// Cria um array com N elementos, de acordo com o Nº de separadores
// encontrados na String.
console.log(myName.split(" "));
// Perceba que o caracter informado será removido da string ao criar o array...
console.log("Eu estou fazendo um teste com a letra 'o' no conteúdo".split("o"));

// retorna um fragmento da String, determinado pela Start Position e End Position...
console.log(myName.slice(5,10));



/*
  Após obter um array da String, faremos um Join através de um char...
*/
let myArrayName = myName.split(" ");

console.log(myArrayName.join("_"));

/*
  Repare que o Replace, não atua sobre toda a string...
*/
console.log(myName.replace(" ", "_"));
