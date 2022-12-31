let k = 0;

while (k < 10) {
    
    console.log(`${(k+1)**2} - ${k**2} = ${(k+1)**2 - k**2}`);
    k++;
}

console.log("A soma do primeiro ímpar com mais nenhum ímpar (ou seja, apenas o primeiro ímpar) é: 1");

let soma = 1;

while (k > 1) {

    soma = soma + 2*(11 - k) + 1;

    console.log(`A soma dos ${12 - k} primeiros ímpares é: ${soma}`);

    k--;

}

// a função while em uma única linha
k = 0;
while (k <= 10) console.log(++k); // usando ++k você está primeiro somando 1 a variável k e depois executando o console.log();

k = 0;
while (k <= 10) console.log(k++); // usando k++ você está primeiro executanto o console.log() e depois somando 1 a variável k.

// do ... while
/*
Esse comando primeiro executa o bloco de código e depois avalia a condição.
*/
 k = 5;

 do {
    console.log("Olá");
 } while (k == 2);

 // Quebrando o ciclo.
 k = 0;

 do {
    k++
    console.log(-k);
    if (k >= 4) break;
 } while(k < 10);
