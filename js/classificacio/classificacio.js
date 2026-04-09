document.addEventListener('DOMContentLoaded', async () => {

    const urlApi = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/";
    const gameName = document.getElementById("gameName");
    const dropDown = document.getElementById("dropDown");
    const loadingDisplay = document.getElementById("loading");

    dropDown.addEventListener('change', async () => {
        const value = dropDown.value;
        let url = urlApi;

        switch (value) {
            case "game2":
                url += "GwxQmWd2EQDinnZJqqYU0HcJjds3IpmBq6Ef2mdaKXG1Xw0iUCunXwz9Drlt/3";
                break;

            case "game3":
                url += "nL3ggwGvsiYZ5vzCqhAL58WnDcZgB9ad7FtDv82oaAAYa36UoJPS35sIbR9F/3";
                break;
        
            case "game4":
                url += "uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS/3";
                break;

            case "game5":
                url += "9pvalH87imnKBsayDEOIOELePsgHPj4p69NsBSf0vrRh9mIYIHVDePWKCYjK/3";
                break;

            case "game6":
                url += "ZHVxZUtGF4E0wzz0400BRy8imjHDgZPmL5m5UD5VYBUCstloOUH2sSbbS9ef/3";
                break;
            
            default:
                url += "LlJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO/3";
                break;
        }

        try {
            loadingDisplay.classList.remove("hide");
            const answer = await fetch(url);
            const response = await answer.json();
            const players = response.data;
            gameName.textContent = dropDown.querySelector('option:checked').textContent;
            
            for (let index = 0; index < players.length; index++) {
                let count = index + 1;
                const player = players[index];

                let name = document.getElementById("name" + count);
                let points = document.getElementById("points" + count);

                name.textContent = player.name;
                points.textContent = player.puntuacion + " Pts";
            }
            if(players[0] === undefined){
                for (let index = 0; index < 3; index++) {
                    let count = index + 1;

                    let name = document.getElementById("name" + count);
                    let points = document.getElementById("points" + count);

                    name.textContent = "-";
                    points.textContent = "Pts"; 
                }
            }

            loadingDisplay.classList.add("hide");

        } catch (error) {
            loadingDisplay.classList.add("hide");

            for (let index = 0; index < 3; index++) {
                let count = index + 1;

                let name = document.getElementById("name" + count);
                let points = document.getElementById("points" + count);

                name.textContent = "Error";
                points.textContent = "Pts";
            }

            console.error(error);
        }

    });
});