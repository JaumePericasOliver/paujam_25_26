const jocs = [
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Coin Flip Tower",
        descripcio: "Texto descriptivo 1",
        autor: "Albert Galán",
        perfil: "../images/profile.webp",
        link: "https://albertgalan.github.io/Coin-Flip-Tower-Web/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "OUT: Escamas de Cautiverio",
        descripcio: "Texto descriptivo 2",
        autor: "Author 2",
        perfil: "../images/profile.webp",
        link: "https://vbdp.github.io/OUT-Escamas-De-Cautiverio-Web/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "UwUguasho",
        descripcio: "Texto descriptivo 3",
        autor: "Author 3",
        perfil: "../images/profile.webp",
        link: "joc3.html"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Proyecto-Y",
        descripcio: "Texto descriptivo 4",
        autor: "Author 4",
        perfil: "../images/profile.webp",
        link: "joc4.html"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "The Three Faces",
        descripcio: "Texto descriptivo 5",
        autor: "Author 5",
        perfil: "../images/profile.webp",
        link: "joc5.html"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Humanity's Edge",
        descripcio: "Texto descriptivo 6",
        autor: "Sergi Marqués",
        perfil: "../images/profile.webp",
        link: "https://raulromerocerrato.github.io/Humanity-s-Edge/index.html"
    },
];

let index = 0;

function actualitzar(){
    document.getElementById("video").src = jocs[index].video;
    document.getElementById("imatge").src = jocs[index].imatge;
    document.getElementById("titol").textContent = jocs[index].titol;
    document.getElementById("descripcio").textContent = jocs[index].descripcio;
    document.getElementById("autor").textContent = jocs[index].autor;
    document.getElementById("perfil").src = jocs[index].perfil;
    document.getElementById("link").href = jocs[index].link;

    document.getElementById("comptador").textContent =
        (index + 1) + " de " + jocs.length;
}

function seguent(){
    index++;
    if(index >= jocs.length){
        index = 0;
    }
    actualitzar();
}

function anterior(){
    index--;
    if(index < 0){
        index = jocs.length - 1;
    }
    actualitzar();
}

window.addEventListener("DOMContentLoaded", actualitzar);