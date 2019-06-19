function adicionar() {
    let lista_numeros = [];
    let txtnumero = document.querySelector("input#txtnumero");
    let num = Number(txtnumero.value);
    lista_numeros.push(num);

    let campo_numeros = document.querySelector("select#numeros");

    campo_numeros.innerHTML += `<option> ${lista_numeros}</option>`
}