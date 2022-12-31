// Testando a concatenação
console.clear();
console.log("número + número + string = 1 + 3 + 4");
console.log(1 + 3 + "4");
console.log(typeof(1 + 3 + "4"));
console.log("\n=========================================\n");
console.log("string + número + número = 1 + 3 + 4");
console.log("1" + 3 + 4);
console.log(typeof("1"+3+4));

// Comparações com strings;

/*
Quando comparamos duas strings com operações >, <, >=, <= estamos, na verdade, comparando
qual deles aparecerá primeiro em uma lista alfabética. Exemplo, ana < carla, pois a letra c vem 
depois da letra a no alfabeto.
*/

console.log(`\nAna > Danilo? Resposta: ${"Ana" > "Danilo"}`);

// Com esse operador já conseguimos criar uma função para ordenar nomes em ordem alfabética.

// Antes vamos fazer alguns testes com arrays.

var lista = [];

lista[0] = "oi";

console.log(lista[0]);

lista.push("olá");

console.log(lista[0], lista[1]);

lista[0] = "Iae";

console.log(lista[0],lista[1]); console.log(lista);

// O método unshift dos arrays adicionam um elemento no início do array. 
// O método push adiciona um elemento no final do array.

function menor_que_k_em_Lista(k, lista){

	var auxiliar = lista.map(x => x < k);
	
	var menores = [];

	for (var i = 0; i <= auxiliar.length; i++){

		if (auxiliar[i] == true){menores.unshift(i);};
	};

	return menores;

};

function menor(lista){

	var qtd_menores = lista.map(x => menor_que_k_em_Lista(x, lista).length);

	var menores = [];

	for (var i = 0; i < lista.length; i++){
	
		if (qtd_menores[i] == 0){menores.unshift(lista[i]);};

	};

	return menores;
};

function ordem_alfabetica(lista){

	var auxiliar = lista;

	var resultado = [];

	while (auxiliar.length > 0){

		resultado.push(menor(auxiliar));

		var auxiliar2 = [];
		
		for (var i = 0; i <= auxiliar.length; i++){
		
			if (menor_que_k_em_Lista(auxiliar[i], auxiliar).length == 0) continue;

			auxiliar2.unshift(auxiliar[i]);

		};
		
		auxiliar = auxiliar2;

	};

	return resultado;

};
console.log(menor_que_k_em_Lista("Ana", ["Abacate","Maria", "João", "Fernanda", "Ana", "Abacate"]));
console.log(menor(["Abacate","Maria", "João", "Fernanda", "Ana", "Abacate"]));
console.log(menor_que_k_em_Lista(menor(["Abacate","Maria", "João", "Fernanda", "Ana", "Abacate"]), ["Abacate","Maria", "João", "Fernanda", "Ana", "Abacate"]));

console.clear();
console.log(ordem_alfabetica(["Abacate","Maria", "João", "Fernanda", "Ana", "Abacate"]));
















