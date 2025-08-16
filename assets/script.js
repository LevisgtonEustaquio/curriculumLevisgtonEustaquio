const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    // Mostra o botão após rolar 200px
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault(); // Impede o comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Rola suavemente
  });
});
