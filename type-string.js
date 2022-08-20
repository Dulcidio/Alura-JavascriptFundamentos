const text1 = "ola";

//exemplo de sitação com string
const citacao = "O Gamba falou 'miau'";
console.log(citacao);

/*
Como transformar todas as strings minuscula
*/
const cidade = "Belo Horizondte"
const inputMinusculo = cidade.toLocaleLowerCase();
const inputMaiusculo = cidade;//.toLocaleUpperCase();

console.log(inputMinusculo);
console.log(inputMaiusculo.toLocaleUpperCase());
//ver o tamanho da String
console.log(inputMaiusculo.length);


//carregando dados iniciais

const idade = 2;
const nome = "Lara";
const sobrenome = "Ayumi";
const bacharel = false;
const dezAnosDepois = "12";

const nomeCompleto = nome + sobrenome;
const resultado = idade + dezAnosDepois;

console.log(nomeCompleto);
console.log(resultado);
console.log(bacharel == 1);


// considerações finais aula 1.

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(soma);
console.log(multiplicacao);
console.log(operacao);