// script.js

const btnTema = document.getElementById('btnTema');
const body = document.body;

btnTema.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    btnTema.innerText = 'Modo Claro';
  } else {
    btnTema.innerText = 'Modo Escuro';
  }

});
