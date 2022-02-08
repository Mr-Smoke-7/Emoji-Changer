console.log('Hello world!');
const closeFce = document.querySelector('.close');
const openFce = document.querySelector('.open');

closeFce.addEventListener('click', () => {
  if (openFce.classList.contains('open')) {
    openFce.classList.add('active');
    closeFce.classList.remove('active');
  }
});

openFce.addEventListener('click', () => {
  if (closeFce.classList.contains('close')) {
    closeFce.classList.add('active');
    openFce.classList.remove('active');
  }
});
