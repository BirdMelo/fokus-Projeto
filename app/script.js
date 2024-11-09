import { altContext } from './altContext.js';
import { song } from './song.js';
import { showTimer, start } from './timer.js';

const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')
export const toggleTimer = document.querySelector('#start-pause')
const toggleSong = document.querySelector('#alternar-musica')
export let breakTime = 1500
export function setBreakTime(value){
    breakTime = value
    showTimer()
}

Foco_bt.addEventListener('click', () => {
    setBreakTime(1500)
    altContext('foco')
})
ShortBreak_bt.addEventListener('click', () => {
    setBreakTime(300)
    altContext('descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    setBreakTime(900)
    altContext('descanso-longo')
})
toggleSong.addEventListener('change', song)
toggleTimer.addEventListener('click', start)

showTimer()