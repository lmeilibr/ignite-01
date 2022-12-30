import styles from './NewTask.module.css'

import plus from '../assets/plus.svg'
export function NewTask() {
    return (
        <form className={styles.taskForm}>
            <input type="text"
                   placeholder="Adicione uma nova tarefa"/>
            <button type="submit" className={styles.button}>Criar
                <img src={plus} alt=""/></button>

        </form>
    )
}