import './assets/styles/main.scss';
import {startTimer} from "./scripts/timer";

const reloadButton = document.querySelector('.reload-action__button');

reloadButton.addEventListener('click', () => {
    location.reload()
});

startTimer(document.querySelector('.timer').dataset?.minutes);


