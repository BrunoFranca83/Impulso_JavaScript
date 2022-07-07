/*var Gabigol = 0;
var Kano = 0;
var placar;

if (Gabigol > 0){
    console.log(`Toca a Musica é gol do Mengão!!!!! ` + Gabigol);
} else if(Kano > 0){
    console.log('Gol do Fluminenseee... Juiz chamou o Var... Está marcado o Impedimento!!!');
}   else{
    console.log('0 x 0 no Estádio do Flamengo');
}*/

var flamengo = 0;
var minasRio = 0;
var placar;

//If Ternário

flamengo < 0 && minasRio < 0 ? console.log ('Os times são válidos'):
console.log('Jogadores Inválidos');

//Usando If
if(flamengo > 0){
    console.log ('Poonto do Mengão');
    placar = flamengo > minasRio;

} else if (minasRio > 0) {
    console.log ('Ponto do Minas Rio');
    placar = minasRio > flamengo;
} else{
    console.log('0 x 0 na quadra');
};

switch (placar) {
    case placar = flamengo > minasRio:
        console.log('Mengão Amassou!!!!');
        break;
    case placar = minasRio > flamengo:
        console.log('O jogo foi adiado');
        break;
    default:
        console.log('Empate')
}

//Estrotoras de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//For: executa uma ação até que ela seja falsa

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//For / In: Funciona como uma repetição a partir de uma propriedade
for (let i in array){{
    console.log(i);
}}

//Com Object
for (i of object.propriedades1){
    console.log(i);
}

//Executa uma instrução "enquanto" determinada condicão for verdadeira, a verificação é feita antes da execução
var a = 0;
while (a< 10){
    a++;
    console.log(a);
}

//Executa uma instrução "Até que" determinada condição seja falsa a verificação é feita depois da execução
do {
    a++;
    console.log (a);
}while(a < 10)





