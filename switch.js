let value = 14;
switch (value){
    case 10:
        console.log(`O valor é ${value}.\n`);
        break;
    case 13:
        console.log(`Valor é ${value}.\n`);
        break;
    default:
        console.log("Saída Default do switch.");
        break;
};

console.log("Outra forma de se usar o Switch.\n");

switch (value){
    case 10:
    case 11:
    case 14:
    case 23:
        console.log(`O valor é ${value}.\n\n`);
        break;
    case "x":
        console.log(`O valor é ${value}.\n\n`);
        break;
    default:
        break;
};