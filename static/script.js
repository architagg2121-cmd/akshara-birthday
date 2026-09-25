const screens = [...document.querySelectorAll(".screen")];
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progress = document.getElementById("progress");
const restartBtn = document.querySelector(".restart-btn");

let current = 0;

function update() {
    screens.forEach((screen, index) => {
        screen.classList.toggle("active", index === current);
    });

    if (current === 0) {
        progress.textContent = "Opening";
    } else {
        progress.textContent = `${current} / ${screens.length - 1}`;
    }

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === screens.length - 1;
    prevBtn.style.opacity = current === 0 ? ".35" : "1";
    nextBtn.style.opacity = current === screens.length - 1 ? ".35" : "1";
}

function next() {
    if (current < screens.length - 1) {
        current++;
        update();
    }
}

function previous() {
    if (current > 0) {
        current--;
        update();
    }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);

document.querySelectorAll(".next-btn").forEach(button => {
    button.addEventListener("click", next);
});

restartBtn.addEventListener("click", () => {
    current = 0;
    update();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === " ") next();
    if (event.key === "ArrowLeft") previous();
});

update();
