for (var i = 0; i != 10; i++){
    console.log(`${i}² = ${i**2}`);
};

// Deixando a variável usada na iteração fora da condição do for
let k = 1;
for (; k <= 10; k++){
    console.log(`3 x ${k} = ${k*3}`);
};

// Deixando a variável de iteração e a iteração de fora da condição do for
k = 1
for(;k <= 10;){
    console.log(`5 x ${k} = ${k*5}`);
    k++;
};

// O método continue
console.clear();

for (let j = 1; j != 11; j++){
    if ((j == 5) || (j == 6)) continue;
    console.log(`j = ${j} que, obviamente, é diferente de 5 e 6.`);
};

console.clear();

for (let k1 = 1; k1 <= 10; k1++){
    for(let k2 = 1; k2 <= 10; k2++){
        console.log(`${k1} x ${k2} = ${k1 * k2}`);
    };
};