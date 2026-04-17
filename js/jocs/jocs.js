const jocs = [
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Coin Flip Tower",
        descripcio: "Texto descriptivo 1",
        autor: "Albert Galán Cànaves",
        perfil: "../images/profile.webp",
        link: "https://albertgalan.github.io/Coin-Flip-Tower-Web/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "OUT: Escamas de Cautiverio",
        descripcio: `OUT: Escamas de Cautiverio és una novel·la visual que narra la trobada entre un protagonista solitari i un ésser aquàtic captiu. A través d'una atmosfera malenconiosa, el joc explora la connexió emocional que neix entre dos "presoners" —un físic i l'altre emocional— i com les decisions del jugador determinen si aquesta relació portarà a la llibertat o a la perdició.`,
        autor: "Vicenç Beltran Diaz",
        perfil: "../images/profile.webp",
        link: "https://vbdp.github.io/OUT-Escamas-De-Cautiverio-Web/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Shared Treasure",
        descripcio: "Texto descriptivo 3",
        autor: "Cristian Nievas Cirer",
        perfil: "../images/profile.webp",
        link: "https://francesco-che.github.io/Project-Y-WEB/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "The Three Faces",
        descripcio: "Texto descriptivo 4",
        autor: "Jesus Fresneda Fuentespina",
        perfil: "../images/profile.webp",
        link: "https://jfresnedafuentespina.github.io/The-Three-Faces-web/"
    },
    {
        video: "../images/video.webp",
        imatge: "../images/image.webp",
        titol: "Humanity's Edge",
        descripcio: "Texto descriptivo 5",
        autor: "Sergi Marques Torres",
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