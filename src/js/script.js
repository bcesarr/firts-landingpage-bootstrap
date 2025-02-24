document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("#header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) { // Se rolou mais de 50px, reduz o header
            header.classList.add("shrink");
        } else { // Se voltou ao topo, aumenta o header de novo
            header.classList.remove("shrink");
        }
    });
});