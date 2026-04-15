const jocs = [
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Flip Coin Tower",
        descripcio: "Texto descriptivo 1",
        autor: "Author 1",
        perfil: "../images/profile.webp"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "OUT - ESCAMAS DE CAUTIVERIO",
        descripcio: "Texto descriptivo 2",
        autor: "Author 2",
        perfil: "../images/profile.webp"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "UwUguasho",
        descripcio: "Texto descriptivo 3",
        autor: "Author 3",
        perfil: "../images/profile.webp"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Proyecto-Y",
        descripcio: "Texto descriptivo 4",
        autor: "Author 4",
        perfil: "../images/profile.webp"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "The Three Faces",
        descripcio: "Texto descriptivo 5",
        autor: "Author 5",
        perfil: "../images/profile.webp"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Xenolancer-code",
        descripcio: "Texto descriptivo 6",
        autor: "Author 6",
        perfil: "../images/profile.webp"
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