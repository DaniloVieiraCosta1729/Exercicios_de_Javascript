// Condicionais

let a = 3;

let b = Infinity;

let c = -17/0;

if(c < a){

	console.log(`É ${c<a} que ${c} é menor do que ${a}.\n`);

};

if(a > b){

	console.log(`É ${a>b} que ${a} é maior do que ${b}.\n`);

} else {

	console.log(`É ${a>b} que ${a} é maior do que ${b}.\n`);

};

// conditional operator

let d = a < c ? `${a} é menor do que ${c}` : `${a} é maior que ${c}`

console.log(d);

class Pessoa{
	constructor(nome, dia_nascimento, mes_nascimento, ano_nascimento){
		this.nome = nome;
		this.dia_nascimento = dia_nascimento;
		this.mes_nascimento = mes_nascimento;
		this.ano_nascimento = ano_nascimento;
	};
};

const pessoa1 = new Pessoa("João", 19, 3, 1980);
const pessoa2 = new Pessoa("Maria", 11, 10, 1992);

let x = pessoa1.mes_nascimento == pessoa2.mes_nascimento ? `\n${pessoa1.nome} faz aniversário no mesmo mês que ${pessoa2.nome}.` : `\n${pessoa1.nome} não faz aniversário no mesmo mês que ${pessoa2.nome}.`;

console.log(x);

const pessoa3 = new Pessoa();
const pessoa4 = new Pessoa();

console.log("Informe abaixo o nome dos finalistas.\n");
pessoa3.nome = console.log(prompt("Nome do finalista do grupo A: "));
pessoa3.mes_nascimento = console.log(prompt(`Digite o mês em que ${pessoa3.nome} nasceu: `));
pessoa4.nome = console.log(prompt("Nome do finalista do grupo B: "));
pessoa4.mes_nascimento = console.log(prompt(`Digite o mês em que ${pessoa4.nome} nasceu: `));

let y = pessoa3.mes_nascimento == pessoa4.mes_nascimento ? `${pessoa3.nome} faz aniversário no mesmo mês que ${pessoa4.nome}!` : `${pessoa3.nome} não faz aniversário no mesmo mês que ${pessoa4.nome}.`;

console.log("\n" + y);