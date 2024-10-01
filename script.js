document.addEventListener("DOMContentLoaded", function () {
    const countdownTimer = document.querySelector(".timer span");
    let timeLeft = 3600; // 1 hour in seconds

    setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        countdownTimer.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} Left`;

        if (timeLeft > 0) {
            timeLeft--;
        }
    }, 1000);
});
