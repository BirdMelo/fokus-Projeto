import { html } from "./script.js";

const img = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const cardButtons = document.querySelectorAll('.app__card-button')


export function altContext(context) {
    
    html.setAttribute('data-contexto', context);
    img.setAttribute('src', `../imagens/${context}.png`);

    let filterValue = context == 'foco' ? 'foco' : context.replace('descanso-', '');
    cardButtons.forEach(button => {
        if (button.classList.contains(`app__card-button--${filterValue}`)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    switch (context) {
        case "foco":
            title.innerHTML =
                `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case "descanso-curto":
            title.innerHTML =
                `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            break;
        case "descanso-longo": {
            title.innerHTML =
                `
            Hora de voltar à superficie<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;
        }
        default:
            break;
    }
}
