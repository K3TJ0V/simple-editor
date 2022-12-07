import '../scss/editor.scss';

const textarea = document.querySelector('.main__textarea--js');
const load = document.querySelector('.button__load--js');
const save = document.querySelector('.button__save--js');

const storage = "";

save.addEventListener('click', () => {
    localStorage.setItem('textarea', textarea.value);
})

load.addEventListener('click', () => {
    textarea.value = localStorage.getItem('textarea');
})
