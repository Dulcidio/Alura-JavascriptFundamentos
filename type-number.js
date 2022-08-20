//tipo number

const meuNumber = 3;

const primeiroNumero = 1;
const segunoNumero = 2;

const operacaoMatematica = primeiroNumero + segunoNumero;

console.log(operacaoMatematica);


//Ponto flutante
const numeroPontoFlutante = 3.3;
const pontFlutanteSemZero = .5;

const novaOperaça = primeiroNumero / segunoNumero

console.log(novaOperaça);

//NaN -> Not a number (não é um nimero)

/*
   Exemplo arrendodando numeros

*/
//Função para saber quanto paga por hora
ganhoPorHora(3000, 176);
/*  */
function ganhoPorHora(salario, horasTrabalhadasMes) {

    const salarioHora = (salario / horasTrabalhadasMes);

    //retorna valor sem arrendodamento
    //return salarioHora;
    //retorna o valor arredondando
    //Usando o método Math retorna para o inteiro mais próximo
    //return Math.round(salarioHora);
    console.log(Math.round(salarioHora));

    /*Para valores monetários é importante a quantidade de casas decimais,
    então o uso do método .toFixed()  ajuda a definir o numero de Casas
    depois da virgula
    */
    const total = salarioHora.toFixed(2);
    console.log(total);

    /*
    método chamado toLocaleString() que converte um número para uma string, 
    já tratando a questão do arredondamento e convertendo para a moeda do país
    ele recebe alguns argumento - um objeto literal com as propriedades
    style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:
    decimal para representar números simples.
    currency que diz respeito ao formato monetário e que vai indicar 
    a moeda que vai ser utilizada.
    percent para formato percentual.
    */
   const formatado = salarioHora.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
   console.log(formatado);


}


