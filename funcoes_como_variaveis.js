// Aprendendo que funções podem ser tratadas como variáveis.

function fatorial(natural){

    let acumulador = 1;

    for (let i = 2; i <= natural; i++){
        acumulador *= i;
    };

    return acumulador;
};

console.log(fatorial(4));

let novo_fatorial = fatorial;

console.log(novo_fatorial(5));
