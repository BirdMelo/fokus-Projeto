import { toggleTimer, breakTime } from "./script.js"

const playSong = new Audio('../sons/play.wav')
const pauseSong = new Audio('../sons/pause.mp3')
const timeoutSong = new Audio('../sons/beep.mp3')
const timer = document.querySelector('#timer')
let interval = null
export function start() {
    if (interval) {
        pauseSong.play();
        clearTime();
        toggleButton('Voltar', '../imagens/play_arrow.png')
        return;
    }
    playSong.play();
    toggleButton('Pause', '../imagens/pause.png')
    interval = setInterval(countdown, 1000);
    showTimer()
}

function toggleButton(toggle, img){
    toggleTimer.querySelector('span').innerHTML = toggle
    toggleTimer.querySelector('img').setAttribute('src', img)
}
const countdown = () => {
    if (breakTime.value <= 0) {
        // timeoutSong.play();
        clearTime();
        breakTime.value = 5;
        toggleButton('Começar', '../imagens/play_arrow.png')
        return;
    }
    breakTime.value -= 1;
    showTimer()
    // console.log(`temporizador: ${breakTime}`);
};
function clearTime() {
    clearInterval(interval);
    interval = null;
}
function showTimer(){
    const time = new Date(breakTime.value * 1000).toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${time}`
}