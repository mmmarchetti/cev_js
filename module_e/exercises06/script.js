function tabuada() {
    let numero = document.querySelector("input#numero").value;
    let exibe = document.querySelector("select#tabuada");

    if (numero === ''){
        window.alert(`Digite um número!`)
    }else{
        let num = Number(numero);
        exibe.innerHTML = ``;
        for (let cont=1; cont <=10; cont++){
            exibe.innerHTML += `<option >${num} x ${cont} = ${cont*num}</option>`
        }
    }


}