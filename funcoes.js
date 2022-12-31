function adicao(a, b){
    return a + b;
};
function subtracao(a, b){
    return a - b;
};
function divisao(a, b){
    try {
        return a/b;
    } catch (error) {
        console.log(`Não foi possível executar a divisão de ${a} por ${b}. Por favor, verifique se essa conta é matemáticamente possível.`);
    }
};
function multiplicacao(a, b) {
    return a * b;
}

let a = 3, b = 0;

console.log(`A soma de ${a} com ${b} é: ${a} + ${b} = ${adicao(a,b)}\n`);
console.log(`A subtração de ${b} de ${a} é: ${a} - ${b} = ${subtracao(a,b)}\n`);
console.log(`A divisao de ${a} por ${b} é: ${a} / ${b} = ${divisao(a,b)}\n`);
console.log(`A mutiplicacao de ${a} com ${b} é: ${a} x ${b} = ${multiplicacao(a,b)}\n`);