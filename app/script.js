import { altContext } from './altContext.js';
const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')
const toggleSong = document.querySelector('#alternar-musica')
const song = new Audio('../sons/luna-rise-part-one.mp3')
song.loop = true

Foco_bt.addEventListener('click', () => {
    altContext('foco')
})
ShortBreak_bt.addEventListener('click', () => {
    altContext('descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    altContext('descanso-longo')
})
toggleSong.addEventListener('change',() =>{
    if(song.paused){
        song.play()
    }else{
        song.pause()
    }
})