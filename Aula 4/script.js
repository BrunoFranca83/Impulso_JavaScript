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

//Parei em Estruturas Condicionais em 09:36













