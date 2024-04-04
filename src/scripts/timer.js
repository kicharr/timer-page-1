const timerHTML = document.querySelector('.timer');
export const startTimer = (time) => {
    if (time < 0 || !time || typeof time !== "number") {
        time = 30
    }

    const valueTimerOutput = (val) => val < 10 ? '0' + val : val;

    let minutes = time;
    let seconds = 0;

    let interval = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            minutes = minutes - 1;
            seconds = 59;
        }

        if (minutes < 0) {
            minutes = 0;
            seconds = 0;
            clearInterval(interval);
            location.reload();
        }

        timerHTML.innerHTML = `${valueTimerOutput(minutes)} : ${valueTimerOutput(seconds)}`;
    }, 1000)
};

