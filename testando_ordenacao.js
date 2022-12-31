// O método sort() ordena os elementos de um array. 
// Quando passado sem argumentos, a ordenação é feita em ordem alfabética.
// Nesse exercício vou tentar criar um algoritmo de ordenação e, logicamente, não pretendo usar o sort().

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


console.clear();
console.log(ordem_alfabetica(["Abacate","Maria", "João", "Fernanda", "Ana", "Juselino", "Gabriel", "Gabriel Fernandes"]));

console.clear();
ordem_alfabetica(["Zico","Maria", "João", "Fernanda", "Ana", "Juselino", "Gabriel", "Gabriel Fernandes"]).forEach(element => {
    console.log(element);
});
