import { updateTask, tasksList} from "./script.js"
const active_task_description = document.querySelector('.app__section-active-task-description')
const removeCompletes = document.querySelector('#btn-remover-concluidas')
const removeAll = document.querySelector('#btn-remover-todas')
let selectTask = null
let selectTaskLI = null
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
    if(task.complete){
        li.classList.add('app__section-task-list-item-complete')
        button.setAttribute('disabled','disabled')
    } else{
        li.onclick = () =>{
            document.querySelectorAll('.app__section-task-list-item-active')
            .forEach(item =>{
                item.classList.remove('app__section-task-list-item-active')
            })
            if(selectTask == task){
                active_task_description.textContent = ''
                selectTask = null
                selectTaskLI = null
                return
            }
            selectTask = task
            selectTaskLI = li
            active_task_description.textContent = task.description
            li.classList.add('app__section-task-list-item-active')
        }
    }
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
document.addEventListener('FocoFinalizado', ()=>{
    if(selectTask && selectTaskLI){
        selectTaskLI.classList.remove('app__section-task-list-item-active')
        selectTaskLI.classList.add('app__section-task-list-item-complete')
        selectTaskLI.querySelector('button').setAttribute('disabled','disabled')
        selectTask.complete = true
        updateTask()
    }
})
const removeTask = (onlyCompletes) => {
    const selector = onlyCompletes ? '.app__section-task-list-item-complete': '.app__section-task-list-item'
    document.querySelectorAll(selector).forEach(element => {
        element.remove()
    })
    onlyCompletes ? tasksList.splice(0, tasksList.length, ...tasksList.filter(task => !task.complete)) : tasksList.length = 0
    
    updateTask()
}
removeCompletes.onclick = () => removeTask(true)
removeAll.onclick = () => removeTask(false)