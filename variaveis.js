
// Estudos a respeito do uso de variaveis
//primeiro exemplo com o uso do var
//O var foi a primeira forma de declarar variável e o seu usão não é mais recomedado

//Exemplo com var:
var formaVar = 'quadrado';
var alturaVar = 2;
var comprimentoVar = 5;

if (formaVar === 'quadrado') {
    areaVar = alturaVar * comprimentoVar;
} else {
    areaVar = (alturaVar * comprimentoVar) / 2;
}
console.log(areaVar);

//****************************
//Exemplo usando o let, que é o recomendo para variáveis que irão alterar de valor
//O uso do let pede que ele seja declarado antes de ser usado, para evitar erro
//e a variável ser declarada novamente sem perceber
//Observe que no exemplo anterior area não foi declarada antes de usa-lá
let formaLet = 'quadrado';
let alturaLet = 20;
let comprimentoLet = 2;
let areaLet;

if (formaLet === 'quadrado') {
    areaLet = alturaLet * comprimentoLet;
} else {
    areaLet = (alturaLet * comprimentoLet) / 2;
}
console.log(areaLet);

//Exemplo usando const, ela deve ser usada quando o falor não for ser alterado.
const formaConst = 'quadrado';
const alturaConst = 30;
const comprimentoConst = 5;
let areaConst;

if (formaConst === 'quadrado') {
    areaConst = alturaConst * comprimentoConst;
} else {
    areaConst = (alturaConst * comprimentoConst) / 2;
}
console.log(areaConst);

//O uso do typeof permite descobrir o que esta sendo armazenado em uma variável
//Exemplo
console.log(typeof formaLet);
console.log(typeof comprimentoConst);

//Conversões implicitas e explicitas

//Conversão implicita permite comparar numeros e strings
const numero = 456;
const nroString = "456";
//Comparando com 3 iguas retorna false
console.log(numero === nroString);
//Comparando com 2 iguais retorno true; Neste caso o js converteu o numero em string
console.log(numero == nroString);

//Lembrado que o uso dos 2 iguais compara apenas o valor, já os uso dos 3 iguais
//compara o tipo e o valor, precisando que ambos sejam igual para retornar true.
//Se vc tentar somar numero com nroString irá apenas concatenar os valores
console.log(numero + nroString);

//Conversão explicita;
//Para isso vamos utilizar as funções Number() ou String()
//Number() irá transformar uma string em numero
//String transforma um numero em String

console.log(numero + Number(nroString));
//Também poderia converter alterando a variável na declaração: 
//const nroString = Number("456");
//É importante que todo o valor seja do mesmo tipo senão apresenta NaN
//exemplo
let nro=10;
let nro1="20a";
console.log(nro+Number(nro1));