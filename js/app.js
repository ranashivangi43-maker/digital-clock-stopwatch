const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");

const clockTime = document.getElementById("clockTime");
const ampm = document.getElementById("ampm");
const dateText = document.getElementById("dateText");
const formatToggle = document.getElementById("formatToggle");

let is24Hour = true;

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");

        const tabName = button.dataset.tab;
        document.getElementById(tabName).classList.add("active");
    });
});

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    if (!is24Hour) {
        hours = hours % 12 || 12;
        ampm.textContent = period;
        ampm.style.display = "inline";
    } else {
        ampm.style.display = "none";
    }

    clockTime.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    dateText.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

formatToggle.addEventListener("click", () => {
    is24Hour = !is24Hour;
    formatToggle.textContent = is24Hour ? "Switch to 12 Hour" : "Switch to 24 Hour";
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);





const stopwatchTime = document.getElementById("stopwatchTime");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

let stopwatchSeconds = 0;
let stopwatchInterval = null;
let lapCount = 0;

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;

    stopwatchTime.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (stopwatchInterval !== null) return;

    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        updateStopwatchDisplay();
    }, 1000);

    startBtn.textContent = "Resume";
});

pauseBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;

    stopwatchSeconds = 0;
    lapCount = 0;

    lapList.innerHTML = "";
    startBtn.textContent = "Start";

    updateStopwatchDisplay();
});

lapBtn.addEventListener("click", () => {
    if (stopwatchSeconds === 0) return;

    lapCount++;

    const li = document.createElement("li");
    li.innerHTML = `<span>Lap ${lapCount}</span><strong>${stopwatchTime.textContent}</strong>`;

    lapList.prepend(li);
});

updateStopwatchDisplay();



