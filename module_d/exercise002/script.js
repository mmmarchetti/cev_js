function horario() {
    var tempo = new Date();
    var hora = tempo.getHours();
    var img = document.querySelector("img#imagem");
    var texto = document.querySelector("div#horario");
    var horario = document.querySelector("div#txthora");

    horario.innerHTML += `${hora} horas`;

    if (hora > 0 && hora < 12){
        img.src = 'manha.png';
        texto.innerHTML += `<br>Bom dia!`;
        document.body.style.background = '#f1c191';

    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png';
        texto.innerHTML += `<br>Boa Tarde!`;
        document.body.style.background = '#b9c3cf';

    }else{
        img.src = 'noite.png';
        texto.innerHTML += `<br>Boa Noite!`;
        document.body.style.background = '#0a1722';
    }

}