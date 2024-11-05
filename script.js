const html = document.querySelector('html')
const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image')
const title = document.querySelector('.app__title')

Foco_bt.addEventListener('click', () => {
    altContext('foco')
})
ShortBreak_bt.addEventListener('click', () => {
    altContext('descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    altContext('descanso-longo')
})
function altContext(context){
    html.setAttribute('data-contexto', context)
    img.setAttribute('src', `./imagens/${context}.png`)
    switch (context) {
        case "foco":
            title.innerHTML =
            `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            title.innerHTML =
            `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":{
            title.innerHTML =
            `
            Hora de voltar à superficie<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        }
        default:
            break;
    }
}