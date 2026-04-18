document.addEventListener('DOMContentLoaded', () =>{


/* Temporizador*/
const endDate = new Date("2026-05-14 09:00:00").getTime();
const startDate = new Date().getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const progressEl = document.getElementById("progress");

function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
        daysEl.innerHTML = "00";
        hoursEl.innerHTML = "00";
        minutesEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
        progressEl.style.width = "100%";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.innerHTML = String(days).padStart(2, "0");
    hoursEl.innerHTML = String(hours).padStart(2, "0");
    minutesEl.innerHTML = String(minutes).padStart(2, "0");
    secondsEl.innerHTML = String(seconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();



/* Barra de progreso */
const progressStartDate = new Date("2026-04-01 00:00:00").getTime();

function updateProgressBar() {
    const now = new Date().getTime();

    const totalDuration = endDate - progressStartDate;
    const elapsed = now - progressStartDate;

    let progressPercent = (elapsed / totalDuration) * 100;

    if (progressPercent < 0) progressPercent = 0;
    if (progressPercent > 100) progressPercent = 100;

    progressEl.style.width = progressPercent + "%";
}

setInterval(updateProgressBar, 1000);
updateProgressBar();



/* Moneda Rotatoria */
    const slider = document.getElementById("myRange");
    const frame = document.getElementById("frame");

    slider.addEventListener("input", () => {
    const value = slider.value;

    frame.src = `images/Frames/frame_${value}.webp`;
    });

});