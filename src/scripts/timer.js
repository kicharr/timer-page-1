const timerHTML = document.querySelector('.timer');
export const startTimer = (time) => {
    if (time < 0) {
        console.log('Invalid data for timer');
        return;
    }

    let minutes = time;
    let seconds = 60;

    setInterval(() => {
        seconds--;

        if (seconds === 0) {
            minutes--;
            seconds = 60;
        }

        if (minutes < 0) {
            location.reload();
        }

        timerHTML.innerHTML = `${time < 10 ? '0' + time : time} : ${seconds < 10 ? '0' + seconds : seconds}`;
    }, 1000)
};

