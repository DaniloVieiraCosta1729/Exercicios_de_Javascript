// Arrow function é a expressão usada para se referir a uma forma incrivelmente simples de se declarar funções.

// Uma função declarada na forma de arrow é:

let enesimoImpar = (natural) => natural**2 - (natural - 1)**2; // Propriedade interessante da sequência de números ímpares. (O n-ésimo quadrado perfeito é igual a soma dos n primeiros números ímpares.)

console.log(enesimoImpar(3)); // Deve retornar 5.
console.log(enesimoImpar(8)); // O oitavo ímpar é o... 1, 3, 5, 7, 9, 11, 13, 15; o 15.

// Vamos usar o arrow function para declarar uma função que soma quantos números o usuário desejar.

function somaArray(lista){

    let acumulador = 0;

    for (let index = 0; index < lista.length; index++) {
        acumulador += lista[index];
    }

    return acumulador;
}

let soma = (...args) => somaArray(args);

console.log(soma(1,5,2,8,62,34));

// Não há necessidade de declarar a função somaArray(), pois as funções arrow podem ter expressões com quantas linhas desejarmos.

let novaSoma = (...args) => {
    
    let acumulador = 0;

    for (let index = 0; index < args.length; index++) {
        acumulador += args[index];
    }

    return acumulador;
};

console.log(novaSoma(1,5,2,8,62,34));

// Uma arrow function que returna uma saudação para o usuário de acordo com o nome dele.

let mensagem = (nome) => `Olá, ${nome}! Bem vindo ao seu perfil.`;

console.log(mensagem('Danilo'));