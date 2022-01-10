let inputText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let btnInput = document.getElementById("btn-input");
let inputImage = document.getElementById("meme-insert");
let btnImage = document.getElementById("btn-image");
let imageContainer = document.getElementById("meme-image-container");


btnInput.addEventListener("click", function() {
    if (inputText.value.length > 0) {
        memeText.innerText = inputText.value;

        inputText.value = "";
    };
});

btnImage.addEventListener("click", function() {
   
});

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
