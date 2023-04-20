var bouton = document.getElementById("add-img");
var image = document.getElementById("container-img");

bouton.addEventListener("click", function() {
    let img = document.createElement("img");
    img.setAttribute ('src', 'IMG_3582.JPG');
    image.appendChild(img);
});