document.addEventListener('DOMContentLoaded', async () => {

    const urlApi = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    const loadingDisplay = document.getElementById("loading");
    const errorDisplay = document.getElementById("error");
    const divPosts = document.getElementById("divPosts");

    try {
        loadingDisplay.classList.remove("hide");
        const answer = await fetch(urlApi);
        const response = await answer.json();
        const posts = response.data;
        
        posts.forEach(post => {
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
            const img = document.createElement("img");
            const title = document.createElement("h2");
            const description = document.createElement("p");

            div1.classList.add("flex", "margin-left-10pc", "margin-right-10pc", "gap-5pc", "align-items-center", "bg-color-platinum", "border-radius", "padding-20px");
            
            img.classList.add("blog-image-size");
            img.setAttribute("src", "../images/Contacte.webp");
            img.setAttribute("alt", "Imatge d'un post");
            div2.appendChild(img);

            title.classList.add("text-black", "font-montserrat");
            title.textContent = post.title;
            div3.appendChild(title);

            description.classList.add("text-align-justify", "blog-text-size", "text-black");
            description.textContent = post.content;
            div3.appendChild(description);

            div1.appendChild(div2);
            div1.appendChild(div3);
            divPosts.appendChild(div1);

        });

        loadingDisplay.classList.add("hide");

    } catch (error) {
        loadingDisplay.classList.add("hide");
        errorDisplay.classList.remove("hide");
        console.error(error);

    }
});