document.addEventListener('DOMContentLoaded', async () => {

    const urlApi = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    const loadingDisplay = document.getElementById("loading");
    const errorDisplay = document.getElementById("error");
    const divPosts = document.getElementById("divPosts");
    const titlePage = document.getElementById("titlePage");

    const popupDisplay = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");


    try {
        loadingDisplay.classList.remove("hide");
        const answer = await fetch(urlApi);
        const response = await answer.json();
        const posts = response.data;

        // Close Popup
        closePopup.addEventListener("click", () => {
            popupDisplay.classList.add("hide");
            popupDisplay.classList.remove("flex");
            titlePage.classList.remove("hide");
            divPosts.classList.add("flex");
            divPosts.classList.remove("hide");
        });
        
        posts.forEach(post => {
            // Cover
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
            // const img = document.createElement("img");
            const title = document.createElement("h2");
            const description = document.createElement("p");

            div1.setAttribute("id", "containerNew");
            div1.classList.add("flex", "width-80pc", "gap-5pc", "align-items-center", "bg-color-charcoal-blue", "border-radius", "padding-20px");
            
            // img.classList.add("blog-image-size");
            // img.setAttribute("src", "../images/Contacte.webp");
            // img.setAttribute("alt", "Imatge d'un post");
            // div2.appendChild(img);

            title.classList.add("text-black", "font-montserrat", "underline", "cursor-pointer", "text-aling-justify");
            title.textContent = post.title;
            div3.appendChild(title);

            description.classList.add("text-align-justify", "blog-text-size", "text-black");
            let smallText = post.content.split(" ").slice(0, 15).join(" ") + "...";
            description.innerHTML = smallText;
            div3.appendChild(description);

            div1.appendChild(div2);
            div1.appendChild(div3);
            divPosts.appendChild(div1);


            // Open Popup
            title.addEventListener("click", () => {
                popupTitle.textContent = post.title;
                popupDescription.innerHTML = post.content;
                titlePage.classList.add("hide");
                divPosts.classList.add("hide");
                divPosts.classList.remove("flex");
                popupDisplay.classList.add("flex");
                popupDisplay.classList.remove("hide");
            });


        });

        loadingDisplay.classList.add("hide");

    } catch (error) {
        loadingDisplay.classList.add("hide");
        errorDisplay.classList.remove("hide");
        console.error(error);

    }

});