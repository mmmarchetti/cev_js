function contar() {
    var inicio = Number(document.querySelector("input#inicio").value);
    var fim = Number(document.querySelector("input#fim").value);
    var passo = Number(document.querySelector("input#passo").value);
    var exibe = document.querySelector("p#contagem");

    if (passo<0){
        passo *= -1;
    }

    if (inicio == '' || fim == '' || passo == ''){
        exibe.innerHTML = `Impossível contar!`
    }else{
        exibe.innerHTML = '';
        if (inicio < fim){
            for (inicio; inicio<=fim; inicio+=passo){
                exibe.innerHTML += `${inicio}`;
                exibe.innerHTML += ` ➡️`
            }
        }else{
            passo *= -1;
            for (inicio; inicio>=fim; inicio+=passo){
                exibe.innerHTML += `${inicio}`;
                exibe.innerHTML += ` ➡️`
            }

        }
        exibe.innerHTML += ` 🏁`
    }

}