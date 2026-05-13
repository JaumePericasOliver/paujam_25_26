document.addEventListener('DOMContentLoaded', async () => {

    const urlApi = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/";
    const loadingDisplay = document.getElementById("loading");
    const apiList = ["LlJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO/3", "nL3ggwGvsiYZ5vzCqhAL58WnDcZgB9ad7FtDv82oaAAYa36UoJPS35sIbR9F/3", "uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS/3", "x7bF74UvGCnfoACoQHTXZOkVaPJy6aavaxexzw91B4EZPDZMSbHN70L9IUpT/3", "ZHVxZUtGF4E0wzz0400BRy8imjHDgZPmL5m5UD5VYBUCstloOUH2sSbbS9ef/3"];

    const refreshData = async () => {
        try {
            console.log("Hecho");
            loadingDisplay.classList.remove("hide");

            for (let index = 0; index < apiList.length; index++) {
                const idGame = index + 1;
                const api = apiList[index];
                const urlGame = urlApi + api;
                const answer = await fetch(urlGame);
                const response = await answer.json();
                const players = response.data;


                for (let index = 0; index < players.length; index++) {
                    let count = index + 1;
                    const player = players[index];

                    const playerDisplay = document.getElementById("name" + count + "-" + idGame);
                    const pointsDisplay = document.getElementById("points" + count + "-" + idGame);

                    playerDisplay.textContent = player.name;
                    pointsDisplay.textContent = player.puntuacion + " Pts";
                }

            }


            loadingDisplay.classList.add("hide");

        } catch (error) {
            loadingDisplay.classList.add("hide");

            console.error(error);
        }
    }

    refreshData();

    setInterval(refreshData, 300000);

});