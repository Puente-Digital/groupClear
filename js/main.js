//Animación Scroll

//Animación Scroll

//Start Animation
let btnMenu = document.getElementById('btn');
let imgHeader = document.getElementById('imgHeader');
let bgHeader = document.getElementById('bg');
let main = document.getElementById('main');
let h1 = document.getElementById('title_animation');
const animation = () =>{
    setInterval(() => {
        imgHeader.classList.remove('none');
        btnMenu.classList.remove('none');
        bgHeader.classList.add('bgHeader');
        main.classList.remove('none');
        h1.classList.add('title_header_h1');
        h1.classList.remove('none');
        main.classList.add('mainAnimation');
    }, 3000);
}
animation();
//Start Animation
//btn menu
let navBarActivate = document.getElementById('navBarActivate');
let x = document.createElement('em');
let barras = document.getElementById('barras');

const activateMenu = () =>{
    x.classList.add('fas', 'fa-times');
    btnMenu.appendChild(x);
    btnMenu.removeChild(barras);
    navBarActivate.classList.remove('none');
}

const retractMenu = () =>{
    btnMenu.appendChild(barras);
    btnMenu.removeChild(x);
    navBarActivate.classList.add('none');
}
x.addEventListener('click', retractMenu);
barras.addEventListener('click', activateMenu);
//btn menu
