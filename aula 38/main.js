const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backColor = styleBody.backgroundColor;

for (let i of ps) {
    i.style.backgroundColor = backColor
    i.style.color = '#FFF'
}
