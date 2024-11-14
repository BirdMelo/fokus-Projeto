import { fokusTime, html, longBreakTime, shortBreakTime } from "./script.js"
import { toggleTimer, breakTime, setBreakTime } from "./script.js"

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
}

function toggleButton(toggle, img){
    toggleTimer.querySelector('span').innerHTML = toggle
    toggleTimer.querySelector('img').setAttribute('src', img)
}
const countdown = () => {
    if (breakTime <= 0) {
        // timeoutSong.play();
        const html_dataContext = html.getAttribute('data-contexto')
        switch (html_dataContext){
            case 'foco':
                setBreakTime(fokusTime)
                const event = new CustomEvent('FocoFinalizado')
                document.dispatchEvent(event)
                break;
            case 'descanso-curto':
                setBreakTime(shortBreakTime)
                break;
            case 'descanso-longo':
                setBreakTime(longBreakTime)
        }
        clearTime();
        toggleButton('Começar', '../imagens/play_arrow.png')
        return;
    }
    setBreakTime(breakTime - 1)
};
function clearTime() {
    clearInterval(interval);
    interval = null;
}
export function showTimer(){
    const time = new Date(breakTime * 1000).toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${time}`
}