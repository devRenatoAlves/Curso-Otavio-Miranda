const div = document.querySelector('.container h1')

const data = new Date()
const dia = data.getDate();
const ano = data.getFullYear();
const hora = data.getHours();
const mes = data.getMonth();
const minuto = data.getMinutes();
const diaSemana = data.getDay();
const weekText = semanaTexto(diaSemana);
const monthText = mesTexto(mes);
const dataCompleta = `${weekText}, ${diaSemana} de ${monthText} de ${ano} <br> ${hora}:${minuto}`

div.innerHTML = `${dataCompleta}`

function semanaTexto (num) {
    let weekText;

    switch (diaSemana) {
        case 0:
            weekText = 'domingo';
            break;
        case 1:
            weekText = 'segunda-feira';
            break;
        case 2:
            weekText = 'terça-feira';
            break;
        case 3:
            weekText = 'quarta-feira';
            break;
        case 4:
            weekText = 'quinta-feira';
            break;
        case 5:
            weekText = 'sexta-feira';
            break;
        case 6:
            weekText = 'sábado';
            break;
    }

    return weekText
}

function mesTexto (num) {
    let monthText;

    switch (diaSemana) {
        case 0:
            monthText = 'janeiro';
            break;
        case 1:
            monthText = 'feveiro';
            break;
        case 2:
            monthText = 'março';
            break;
        case 3:
            monthText = 'abril';
            break;
        case 4:
            monthText = 'maio';
            break;
        case 5:
            monthText = 'junho';
            break;
        case 6:
            monthText = 'julho';
            break;
        case 6:
            monthText = 'agosto';
            break;
        case 7:
            monthText = 'setembro';
            break;
        case 8:
            monthText = 'outubro';
            break;
        case 9:
            monthText = 'novembro';
            break;
        case 10:
            monthText = 'dezembro';
            break;
    }

    return monthText
}
 

