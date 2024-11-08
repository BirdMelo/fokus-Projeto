const audio = new Audio('../sons/luna-rise-part-one.mp3')
audio.loop = true

export function song(){
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
}