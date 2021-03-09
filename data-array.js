// Manipulando Arrays


// Um array pode conter qualquer tipo de dado, em seus elementos...
console.log([
    "a",
    {type:"array"},
    function(){
        return "Hello Word"
    }
]);


// Verificando o comprimento do array
console.log([
    "a",
    {type:"array"},
    function(){
        return "Hello Word"
    }
].length);

// Executando uma função dentro de um array
console.log([
    "a",
    {type:"array"},
    function(){
        return "Hello Word"
    }
][2]());

// Verificando o tipo de dado de um elemento
console.log([
    "a",
    {type:"array"},
    function(){
        return "Hello Word"
    }
][1].type);