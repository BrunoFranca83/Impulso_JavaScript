//Booleanos
var vOuF = false;
console.log(typeof(vOuF));

//Numero
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = "Bruno";
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'Bruno';
variavel = 'França';
console.log(variavel);

let variavel2 = 'Heloisa';
console.log(variavel2);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopolocalInterno = 'Local';
    console.log(escopolocalInterno);
}

escopoLocal();