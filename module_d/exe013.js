var agora = new Date();
var diaSem = agora.getDay();
console.log(`${diaSem}`);

console.log(`Hoje é: `);
switch (diaSem) {
    case 1:
        console.log(`Segunda`);
        break;
    case 2:
        console.log(`Terça`);
        break;
    case 3:
        console.log(`Quarta`);
        break;
    case 4:
        console.log(`Quinta`);
        break;
    case 5:
        console.log(`Sexta`);
        break;
    case 6:
        console.log(`Sábado`);
        break;
    case 0:
        console.log(`Domingo`);
        break;
    default:
        console.log(`Dia inválido`);
        break
}