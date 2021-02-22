let imagenes = document.querySelectorAll(".galeria_img");
let modal = document.querySelector("#modal");
let img = document.querySelector("#modal_img");
let boton = document.querySelector("#modal_boton")

for (let i = 0; i < imagenes.length; i++) {
    imagenes [i].addEventListener("click", function(p) {
        modal.classList.toggle("modal_open");
        let src = p.target.src;
        img.setAttribute("src", src);
    });
    
}
boton.addEventListener("click", function() {
    modal.classList.toggle("modal_open");
})