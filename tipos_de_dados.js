// Data Types in JavaScript
/*
O JavaScript tem poucos tipos de dados se comparados com outras linguagens como o 
C#, java - que são linguagens bem diferente por serem compiladas - porém mesmos linguagens
de scripts como o Python tem alguns tipos a mais de variáveis do o JS.

Os tipos são:
Number - para quase todos os tipos de números, ou seja, não há distinção entre inteiros, float etc.
BigInt - é um outro tipo numérico (o único além do Number)
String - as bem conhecidas strings (cadeias de caracteries)
Boolean - tbm muito conhecido boolean (True, False)
Null value - valor nulo
Undefined value - valor não definido
Objects - objetos
Symbols- símbolos
*/

// Number - permite inteiros e números com casa decimais. Permite tbm valores como o
// Infinity, -Infinity e NaN.

let numero1 = 100, numero2 = -100, numero3 = 12.75;

console.clear(); console.log("=================Data Types=================");
console.log("++++Number++++ \n");
console.log(`É ${numero1 > Infinity} que ${numero1} é maior do que ${Infinity}.`);
console.log(`\n${numero3} + (${numero2}) = ${numero3 + numero2}`);
console.log(`\nO lim(-6/x), com x tendendo a infinito = ${-6/0}`);

// Os Infinity e -Infinity surgem como resultados de contas cujo o limite são, respectivamente,
// infinito e -infinitos;
// O Valor NaN surge como resposta a uma conta conta que não pode ser realizada, por exemplo,
// "a"/3 retorna NaN, pois não podemos dividir uma string por um número.

/* O JavaScript consegue interpretar strings como números em alguns casos. Exemplo:
Se você definir uma variável com o valor de "3" e depois fazer operações matemáticas
com essa variável, de fato, o JS retornará o valor correto da conta e não o NaN.*/

console.log("\nTestando o a capacidade do JS de entender números em strings e realizar contas com esses números em forma de strings:");
let texto = "5";
console.log(`\nO valor da string ${texto} dividida por 2 é igual a ${texto/2}`);

/* Sobre o BigInt: se trata de um tipo de dado que é usado para amarzenar inteiros com muitas
casas decimais de precisão. 
Para utilizar esse tipo de dado, devemos simplesmente acrescentar a letra n ao final do número.*/

console.log("\n++++BigInt++++");
let x = 6854655687965432354657687765643465768765453657;
let y = 6854655687965432354657687765643465768765453657n;
console.log("Representando o número 6854655687965432354657687765643465768765453657 em uma variável do tipo Number e em tipo BigInt:");
console.log(`Em Number: ${x};\nEm BigInt: ${y}`);

// O Null significa que não se sabe o valor da variável, mas que a qualquer momento pode receber
// um valor.

// O Undefined significa que a variável foi declarada mas não possuí nenhum valor.

// Bonus! Existe uma função no JavaScript que nos permite saber qual é o tipo de uma variável.

console.log(`\nO tipo da variável ${texto} é ${typeof(texto)}, mas o tipo de ${texto/2} é ${typeof(texto/2)}`);















