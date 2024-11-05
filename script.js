const html = document.querySelector('html')
const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')

Foco_bt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})
ShortBreak_bt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})