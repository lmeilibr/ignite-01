import styles from './Tasks.module.css'
import clipboard from '../assets/Clipboard.svg'

export function Tasks() {
    return (
        <div className={styles.tasks}>
            <header className={styles.headerTasks}>
                <div className={styles.created}>
                    <span>Tarefas criadas</span>
                    <span className={styles.counter}>0</span>
                </div>
                <div className={styles.done}>
                    <span>Concluídas</span>
                    <span className={styles.counter}>0</span>
                </div>
            </header>
            <div className={styles.clipboard}>
                <img src={clipboard} alt="Clipboard"/>
                <div>
                    <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}