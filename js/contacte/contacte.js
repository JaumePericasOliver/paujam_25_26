document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();


    const formData = {
        api_token: "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS",
        nombre: this.nombre.value,
        email: this.email.value,
        asunto: this.asunto.value,
        mensaje: this.mensaje.value
    };


    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta:", data);
        alert("Mensaje enviado correctamente");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error al enviar");
    });
});