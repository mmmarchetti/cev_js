function consultar() {
    var nascimento = document.querySelector("input#nascimento").value;
    var ano_nascimento = Number(nascimento);
    var hoje = new Date();
    var ano_atual = hoje.getFullYear();
    var idade = (ano_atual - ano_nascimento);
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var divimg = document.querySelector("div#imagem");
    var txtdet = document.querySelector("p#txtdet");
    var erro = 0;

    if (nascimento === ''){
        window.alert('Ano de Nascimento em Branco!');
        erro +=1;
    }else if (ano_nascimento < 0 || idade > 110 || ano_nascimento > ano_atual){
        window.alert('Ano de Nascimento inválido!');
        erro +=1;
    }

    if (sexo === 'feminino' && erro === 0){
        txtdet.innerHTML = `Detectamos uma mulher de ${idade} anos`;
        if (idade < 16){
            divimg.innerHTML = `<img id="foto" src="menina.png" alt="Foto">`;
        }else if (idade < 30){
            divimg.innerHTML = `<img id="foto" src="garota.png" alt="Foto">`;
        }else if (idade < 50) {
            divimg.innerHTML = `<img id="foto" src="mjovem.png" alt="Foto">`;
        }else{
            divimg.innerHTML = `<img id="foto" src="mulher.png" alt="Foto">`;
        }

    }else if (sexo === 'masculino' && erro === 0){
        txtdet.innerHTML = `Detectamos uma mulher de ${idade} anos`;
        if (idade < 16){
            divimg.innerHTML = `<img id="foto" src="menino.png" alt="Foto">`;
        }else if (idade < 30){
            divimg.innerHTML = `<img id="foto" src="garoto.png" alt="Foto">`;
        }else if (idade < 50){
            divimg.innerHTML = `<img id="foto" src="hjovem.png" alt="Foto">`;
        }else{
            divimg.innerHTML = `<img id="foto" src="homem.png" alt="Foto">`;
        }
    }
    divimg.style.textAlign = 'center';
    txtdet.style.textAlign = 'center';
}