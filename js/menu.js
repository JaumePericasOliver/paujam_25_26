document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById("header");
    const navMenu = document.getElementById("navMenu");
    const menuList = document.getElementById("MQMenu");
    const dropDownButton = document.getElementById("MQMenuButton");
    const drop2DownButton = document.getElementById("MQ2MenuButton");
    const containerTopMenu = document.getElementById("containerTopMenu");
    const li = document.querySelectorAll(".MQ-nav-item");


    dropDownButton.addEventListener("click", () => {
        header.classList.add("width-100pc", "height-100pc", "position-fixed");
        navMenu.classList.add("height-100pc", "flex");
        menuList.classList.add("width-100pc", "flex", "flex-direction-column", "height-90pc");
        li.forEach(element => {
            element.style.display = "block";
        });

        drop2DownButton.classList.remove("hide");
        containerTopMenu.classList.add("width-100pc", "justify-content-space-between", "height-80px");
        dropDownButton.style.display = "none";

        drop2DownButton.addEventListener("click", () => {
            header.classList.remove("width-100pc", "height-100pc", "position-fixed");
            navMenu.classList.remove("height-100pc", "flex");
            menuList.classList.remove("width-100pc", "flex", "flex-direction-column", "height-90pc");
            li.forEach(element => {
                element.style.display = "none";
            });

            drop2DownButton.classList.add("hide");
            containerTopMenu.classList.remove("width-100pc", "justify-content-space-between", "height-80px");
            dropDownButton.style.display = "block";
        });
    });
});