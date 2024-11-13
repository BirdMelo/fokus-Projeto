import { updateTask } from "./script.js"

export function addTask(task){
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')
    const svg = document.createElement('svg')
    svg.innerHTML =
    `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg> 
    `
    const p = document.createElement('p')
    p.classList.add('app__section-task-list-item-description')
    p.textContent = task.description

    const button = document.createElement('button')
    button.classList.add('app_button-edit')
    button.onclick = () =>{
        const newDescription = prompt("Qual é o novo nome da tarefa?")
        if(newDescription){
            p.textContent = newDescription
            task.description = newDescription
            updateTask()
        }
    }

    const img_btn = document.createElement('img')
    img_btn.setAttribute('src', '../imagens/edit.png')

    button.append(img_btn)
    li.append(svg)
    li.append(p)
    li.append(button)
    return li
}