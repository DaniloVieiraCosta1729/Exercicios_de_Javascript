let phi = ((1 + 5**(1/2))/2)
let fibonacci = (indice) => Math.floor(((phi)**indice - (1 - phi)**indice)/(5**(1/2)));

let inicio = Date.now();

let miscelanias = {
    pi : Math.PI,
    e : Math.E,
    phi : ((1 + 5**(1/2))/2),
    fib : fibonacci
};

console.log(miscelanias.pi, miscelanias.e, miscelanias.phi, miscelanias.fib(6));

let seqFibonacci = (qtdTermos) => {
    let resultado = [];

    for (let index = 0; index < qtdTermos; index++) {
        resultado.push(miscelanias.fib(index));
    }

    return resultado;
};

console.log(seqFibonacci(15));

// Uma forma muito comum de se criar objetos é através de construtores. 
/* Uma vez que existe um construtor para tal objeto, não a necessidade de declará-lo de forma "literal", basta usar o construtor. */

function Pessoa(nome, sobrenome, telefone, data_nascimento){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.telefone = telefone;

    this.nome_completo = () => `${this.nome} ${this.sobrenome}`;
}

let cliente = new Pessoa('Danilo', 'Vieira Costa', '(11) 98207-5533');

console.log(cliente.nome);
console.log(cliente.nome_completo());

let final = Date.now();

let tempo_execucao = final - inicio;

console.log(tempo_execucao);