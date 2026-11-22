
const texts = [
    "Программирование помогает создавать интересные приложения и современные технологии.",
    "Скорость печати зависит от практики, внимательности и правильного расположения пальцев.",
    "Каждый день можно узнавать что-то новое и развивать полезные навыки.",
    "Информационные технологии меняют современный мир и открывают новые возможности.",
    "Успех приходит к тем, кто постоянно учится и не боится решать сложные задачи."
];

const textDisplay = document.getElementById("textDisplay");
const input = document.getElementById("input");

const timeElement = document.getElementById("time");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const errorsElement = document.getElementById("errors");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const result = document.getElementById("result");

let currentText = "";
let timeLeft = 60;
let timer = null;
let started = false;
let finished = false;
let totalErrors = 0;
let errorHistory = [];
let chart = null;

function randomText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

function loadText() {
    currentText = randomText();

    textDisplay.innerHTML = "";

    currentText.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        textDisplay.appendChild(span);
    });
}

function createChart() {
    const ctx = document.getElementById("errorChart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [{
                label: "Количество ошибок",
                data: [],
                borderColor: "#ef4444",
                backgroundColor: "rgba(239,68,68,0.15)",
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}

function startTest() {
    if (started || finished) return;

    started = true;
    input.disabled = false;
    input.focus();

    startBtn.disabled = true;

    timer = setInterval(() => {
        timeLeft--;

        timeElement.textContent = timeLeft;

        updateStats();

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function updateStats() {
    const typed = input.value;

    let correct = 0;
    let errors = 0;

    const spans = textDisplay.querySelectorAll("span");

    spans.forEach((span, index) => {
        const char = typed[index];

        span.className = "";

        if (char == null) {
            return;
        }

        if (char === currentText[index]) {
            span.classList.add("correct");
            correct++;
        } else {
            span.classList.add("incorrect");
            errors++;
        }
    });

    totalErrors = errors;

    const elapsed = 60 - timeLeft;

    const speed = elapsed > 0
        ? Math.round((typed.length / elapsed) * 60)
        : 0;

    const accuracy = typed.length > 0
        ? Math.round((correct / typed.length) * 100)
        : 100;

    speedElement.textContent = speed;
    accuracyElement.textContent = accuracy + "%";
    errorsElement.textContent = errors;
}

function updateChart() {
    const elapsed = 60 - timeLeft;

    if (elapsed % 5 === 0) {
        chart.data.labels.push(elapsed + " сек");
        chart.data.datasets[0].data.push(totalErrors);
        chart.update();
    }
}

function endTest() {
    clearInterval(timer);

    finished = true;
    input.disabled = true;
    startBtn.disabled = true;

    updateStats();

    result.textContent =
        "Тест завершён! Твоя скорость: " +
        speedElement.textContent +
        " знаков/мин.";

    updateChart();
}

input.addEventListener("input", () => {
    if (!started || finished) return;

    updateStats();

    const typed = input.value;

    if (typed.length >= currentText.length) {
        loadText();
        input.value = "";
    }
});

startBtn.addEventListener("click", startTest);

restartBtn.addEventListener("click", () => {
    clearInterval(timer);

    timeLeft = 60;
    started = false;
    finished = false;
    totalErrors = 0;

    input.value = "";
    input.disabled = true;

    startBtn.disabled = false;

    timeElement.textContent = 60;
    speedElement.textContent = 0;
    accuracyElement.textContent = "100%";
    errorsElement.textContent = 0;

    result.textContent = "";

    loadText();
    createChart();
});

loadText();
createChart();
