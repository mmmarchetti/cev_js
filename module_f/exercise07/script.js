
let num_list = [];

function limpar(){
    let campo_numeros = document.querySelector("select#numeros");
    let analise = document.querySelector("div#resultado");
    campo_numeros.innerHTML = '<option>Adicione um Número</option>';
    analise.innerHTML = '';
    num_list = [];
}

function adicionar() {
    let txtnumero = document.querySelector("input#txtnumero");
    let num = Number(txtnumero.value);
    let campo_numeros = document.querySelector("select#numeros");

    if (num < 0 || num > 100){
        window.alert('Digite um número entre 1 e 100!')
    }else{
        if (num_list.length === 0){
            num_list.push(num);
            campo_numeros.innerHTML = `<option> Valor ${num} adicionado.</option>`;
            txtnumero.value = ''
        }else{
            num_list.push(num);
            campo_numeros.innerHTML += `<option> Valor ${num} adicionado.</option>`;
            txtnumero.value = ''
        }
    }
}

function finalizar() {
    let soma = 0;

    for (let i=0; i<num_list.length; i++){
        soma += num_list[i]
    }
    let media = soma / num_list.length;

    let analise = document.querySelector("div#resultado");
    analise.innerHTML += `<p>Ao todo temos ${num_list.length} números cadastrados.</p>`;
    analise.innerHTML += `<p>O maior número informado foi ${Math.max.apply(null, num_list)}.</p>`;
    analise.innerHTML += `<p>O menor número digitado foi ${Math.min.apply(null, num_list)}</p>`;
    analise.innerHTML += `<p>A soma dos números digitado é igual a ${soma}</p>`;
    analise.innerHTML += `<p>A média dos números digitados é igual a ${media}</p>`
}