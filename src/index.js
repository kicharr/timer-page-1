import './assets/styles/main.scss';
import {startTimer} from "./scripts/timer";

const reloadButton = document?.querySelector('.reload-action__button');

reloadButton.addEventListener('click', () => {
    location.reload()
});

const derivedValue = document?.querySelector('.timer')?.dataset?.minutes;

startTimer(Number(derivedValue));


