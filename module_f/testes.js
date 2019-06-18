let lista = [0,2,4,5,7,3,1,8];

lista[0] = 6;
lista.push(9);
lista.sort();
console.log(lista.length);
console.log(lista);

for (let cont = 0; cont <= lista.length; cont++){
    console.log(lista[cont])
}

for (let cont in lista){
    console.log(lista[cont])
}

let num = lista.indexOf(1);

if (num === -1){
    console.log(`O número não foi encontrado`)
}else{
    console.log(`O numero esta na posição ${num}`);
}
