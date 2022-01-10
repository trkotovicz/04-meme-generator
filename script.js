let inputText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let btnInput = document.getElementById("btn-input");
let inputImage = document.getElementById("meme-insert");
let imageContainer = document.getElementById("meme-image-container");
let memeImage = document.getElementById("meme-image");

// add input texto
inputText.addEventListener("keyup", function() {
    if (inputText.value.length > 0) {
        memeText.innerText = inputText.value;
    };
});


// add input img
/* Referência tirada do MDN
https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images
*/
inputImage.addEventListener("change", addImage);
// usar o evento "change" foi sugerido em alguma mentoria (não lembro qual)

function addImage(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
};


// add moldura ao clicar nos botões
let fireBtn = document.getElementById("fire");
fireBtn.addEventListener("click", function() {
    imageContainer.style.border = "3px dashed red";
});

let waterBtn = document.getElementById("water");
waterBtn.addEventListener("click", function() {
    imageContainer.style.border = "5px double blue";
});

let earthBtn = document.getElementById("earth");
earthBtn.addEventListener("click", function() {
    imageContainer.style.border = "6px groove green";
});


// add meme pré-selecionado
let meme1 = document.getElementById("meme-1");
meme1.addEventListener("click", famousMeme);

let meme2 = document.getElementById("meme-2");
meme2.addEventListener("click", famousMeme);

let meme3 = document.getElementById("meme-3");
meme3.addEventListener("click", famousMeme);

let meme4 = document.getElementById("meme-4");
meme4.addEventListener("click", famousMeme);

// função que busca a source da imagem clicada (event) e adiciona na source da imagem id="meme-image"
function famousMeme(event) {
    memeImage.src = event.target.src;
};