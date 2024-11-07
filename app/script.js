import { altContext } from './altContext.js';
const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')

const toggleSong = document.querySelector('#alternar-musica')
const song = new Audio('../sons/luna-rise-part-one.mp3')
song.loop = true

const toggleTimer = document.querySelector('#start-pause')
const playSong = new Audio('../sons/play.wav')
const pauseSong = new Audio('../sons/pause.mp3')
const timeoutSong = new Audio('../sons/beep.mp3')
let breakTime = 5
let interval = null

Foco_bt.addEventListener('click', () => {
    altContext('foco')
})
ShortBreak_bt.addEventListener('click', () => {
    altContext('descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    altContext('descanso-longo')
})
toggleTimer.addEventListener('click', start)

toggleSong.addEventListener('change',() =>{
    if(song.paused){
        song.play()
    }else{
        song.pause()
    }
})

const countdown = () =>{
    if(breakTime <= 0){
        timeoutSong.play()
        clearTime();
        alert('timeout!')
        breakTime = 5
        return
    }
    breakTime -= 1
    console.log(`temporizador: ${breakTime}`)
}

function clearTime() {
    clearInterval(interval);
    interval = null;
}

function start(){
    if(interval){
        pauseSong.play()
        clearTime()
        return
    }
    playSong.play()
    interval = setInterval(countdown, 1000)
}