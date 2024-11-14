import { altContext } from './altContext.js';
import { addTask } from './crud.js';
import { song } from './song.js';
import { showTimer, start } from './timer.js';

const Foco_bt = document.querySelector('.app__card-button--foco')
const ShortBreak_bt = document.querySelector('.app__card-button--curto')
const LongBreak_bt = document.querySelector('.app__card-button--longo')
export const html = document.querySelector('html')

export const toggleTimer = document.querySelector('#start-pause')
const toggleSong = document.querySelector('#alternar-musica')

const addTask_btn = document.querySelector('.app__button--add-task')
const addTask_form = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const tasksList = JSON.parse(localStorage.getItem('tasks')) || []
const tasksUL = document.querySelector('.app__section-task-list')

export const fokusTime = 1500
export const shortBreakTime = 300
export const longBreakTime = 900

export let breakTime = fokusTime
export function setBreakTime(value){
    breakTime = value
    showTimer()
}

Foco_bt.addEventListener('click', () => {
    setBreakTime(fokusTime)
    altContext('foco')
})
ShortBreak_bt.addEventListener('click', () => {
    setBreakTime(shortBreakTime)
    altContext('descanso-curto')
})
LongBreak_bt.addEventListener('click', () => {
    setBreakTime(longBreakTime)
    altContext('descanso-longo')
})

toggleSong.addEventListener('change', song)
toggleTimer.addEventListener('click', start)

showTimer()

addTask_btn.addEventListener('click', ()=> {
    addTask_form.classList.toggle('hidden')
    if(addTask_form.classList.contains('hidden')){
        addTask_form.setAttribute('aria-hidden', 'true')
    }else{
        addTask_form.setAttribute('aria-hidden', 'false')
    }
})
addTask_form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const task = {
        description: textarea.value
    }
    tasksList.push(task)
    tasksUL.append(addTask(task))
    updateTask();
    textarea.value = ''
    addTask_form.classList.toggle('hidden')
})

tasksList.forEach(task => {
    tasksUL.append(addTask(task))
});

export function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
}
