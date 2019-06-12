function consultar() {
    var nascimento = document.querySelector("input#nascimento").value;
    var hoje = new Date();
    var ano = hoje.getFullYear();
    var idade = (ano - Number(nascimento));
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var imagem = document.querySelector("img#foto");
    var frase = document.querySelector("div#cabecalho");
    window.alert(idade+ ' ' + ano + ' ' + sexo);

    if (sexo === 'feminino'){
        frase.innerHTML += ` uma mulher de ${idade} anos`;
        if (idade < 16){
            imagem.src = 'menina.png'
        }else if (idade < 30){
            imagem.src = 'garota.png'
        }else{
            imagem.src = 'mulher.png'
        }
    }else{
        frase.innerHTML += ` um homem de ${idade} anos`;
        if (idade < 16){
            imagem.src = 'menino.png'
        }else if (idade < 30){
            imagem.src = 'garoto.png'
        }else{
            imagem.src = 'homem.png'
        }
    }
}