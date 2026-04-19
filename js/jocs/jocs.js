const jocs = [
    /* COIN FLIP TOWER */
    {
        video: "https://www.youtube.com/embed/3Mlv1U3QO8s",
        imatge: "../images/LogoCoinFlipTower.webp",
        titol: "Coin Flip Tower",
        descripcio: `N'Edgar és un jove estudiant de l'acadèmia de màgia que somia convertir-se en un gran mag, però el seu rendiment en física màgica ha estat un fracàs. Tot i els seus esforços, ha suspès repetidament l'assignatura, posant en perill el seu futur acadèmic. El professor Tirius, que confia en el seu potencial, li ofereix una última oportunitat: superar la Prova de la Moneda, una misteriosa masmorra on només els qui dominen les lleis de la gravetat poden escapar...`,
        autor: "Albert Galán Cànaves",
        perfil: "../images/profile.webp",
        link: "https://albertgalan.github.io/Coin-Flip-Tower-Web/"
    },
    /* OUT: ESCAMAS DE CAUTIVERIO */
    {
        video: "https://www.youtube.com/embed/sH2cyW1VXcs",
        imatge: "../images/LogoOUT.webp",
        titol: "OUT: Escamas de Cautiverio",
        descripcio: `OUT: Escamas de Cautiverio és una novel·la visual que narra la trobada entre un protagonista solitari i un ésser aquàtic captiu. A través d'una atmosfera malenconiosa, el joc explora la connexió emocional que neix entre dos "presoners" —un físic i l'altre emocional— i com les decisions del jugador determinen si aquesta relació portarà a la llibertat o a la perdició.`,
        autor: "Vicenç Beltran Diaz",
        perfil: "../images/profile.webp",
        link: "https://vbdp.github.io/OUT-Escamas-De-Cautiverio-Web/"
    },
    /* SHARED TREASURE */
    {
        video: "../images/video.webp",
        imatge: "../images/LogoSharedTreasure.webp",
        titol: "Shared Treasure",
        descripcio: `Endinsa't en una aventura on cada decisió té el seu pes. Shared Treasure combina la intensitat d'un Bullet Hell amb l'estratègia d'un roguelike : esquiva, dispara i derrota onades d'esperits per acumular energia màgica.`,
        autor: "Cristian Nievas Cirer",
        perfil: "../images/profile.webp",
        link: "https://francesco-che.github.io/Project-Y-WEB/"
    },
    /* THE THREE FACES */
    {
        video: "https://www.youtube.com/embed/zxpgE-wDOBA",
        imatge: "../images/LogoTheThreeFaces.webp",
        titol: "The Three Faces",
        descripcio: `Descripció.`,
        autor: "Jesus Fresneda Fuentespina",
        perfil: "../images/profile.webp",
        link: "https://jfresnedafuentespina.github.io/The-Three-Faces-web/"
    },
    /* HUMANITY'S EDGE */
    {
        video: "https://www.youtube.com/embed/zkrtHN3bXEA",
        imatge: "../images/LogoHumanitysEdge.webp",
        titol: "Humanity's Edge",
        descripcio: `En un futur no molt llunyà, la humanitat s'ha expandit més enllà de la Terra, colonitzant altres planetes i explorant les profunditats de l'espai. No obstant això, aquesta expansió ha portat a una crisi ambiental sense precedents a la Terra, amb recursos naturals esgotats i un clima extremadament inestable. En aquest context, un grup de científics i enginyers ha desenvolupat una tecnologia revolucionària que permet als humans transferir la seva consciència a cossos robòtics avançats. Aquesta tecnologia, coneguda com a "Transferència de Consciència", ofereix una nova esperança per a la supervivència de la humanitat.`,
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

const iframe = document.getElementById("video");
iframe.src = jocs[index].video;

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