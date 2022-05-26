const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const imageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');

// add input texto
inputText.addEventListener('keyup', () => {
  if (inputText.value.length > 0) {
    memeText.innerText = inputText.value;
  }
});

// add input img
function addImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', addImage);

// add moldura ao clicar nos botões
const fireBtn = document.getElementById('fire');
fireBtn.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

const waterBtn = document.getElementById('water');
waterBtn.addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

const earthBtn = document.getElementById('earth');
earthBtn.addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});

const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
  imageContainer.style.border = '6px groove black';
});

// função que busca a source da imagem clicada (event) e adiciona na source da imagem id="meme-image"
function famousMeme(event) {
  memeImage.src = event.target.src;
}

// add meme pré-selecionado
const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', famousMeme);

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', famousMeme);

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', famousMeme);

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', famousMeme);
