// script.js

// Seleciona o botão no footer. Use o id que você deu no HTML, ex: id="btnTema"
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