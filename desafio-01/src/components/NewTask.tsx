import styles from './NewTask.module.css'

import plus from '../assets/plus.svg'
import {ChangeEvent, FormEvent, useState} from "react";

interface NewTaskProps {
    onCreateNewTask: (task: string) => void;
}
export function NewTask({onCreateNewTask}: NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('')
    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        onCreateNewTask(newTaskText)
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value)
    }


    return (
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
            <input type="text"
                   placeholder="Adicione uma nova tarefa"
                   value={newTaskText}
                   onChange={handleNewTaskChange}
                   required
            />
            <button type="submit" className={styles.button}>Criar
                <img src={plus} alt=""/></button>

        </form>
    )
}