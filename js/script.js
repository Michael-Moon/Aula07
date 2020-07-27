
var num1 = -10;
var num2 = 20;
var num3 = 5.75;
var nome = "joão";
var sobrenome = "Silva"
var vNome = true;

var valorNulo = null;
var naodefinido;

var texto = "Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam";

var frutas = ["Maça","Laranja","Uva","Abacaxi","Manga"];

var digitalHouse = "Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam";

console.log (num1);
console.log (num2);
console.log (num3);
console.log (nome);
console.log (sobrenome);
console.log (vNome);
console.log (texto);
console.log ("Olá, Mundo ");
console.log (nome + " " + sobrenome);
console.log (frutas);
console.log (digitalHouse);

var n1 = 18;
var s = 18;

if (n1 === s) {
    console.log ("foi");
    
}else {
    console.log ("nao");
}

var obj ={
    nomeObj: "joão",
    sobrenomeObj: "Silva"
};
for (var x in obj){
    console.log(x + ": " + obj[x]);
}