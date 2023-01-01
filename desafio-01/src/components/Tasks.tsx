import styles from './Tasks.module.css'
import clipboardImg from '../assets/Clipboard.svg'
import {TaskItem} from "./TaskItem";


interface TasksProps {
    taskList: TaskItem[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}


export function Tasks({taskList, onDelete, onToggle}: TasksProps) {
    function countTasksConcluidas() {
        const tasksDone = taskList.filter(task => {
            return task.isCompleted
        })
        if (tasksDone.length > 0) {
            return `${tasksDone.length} de ${taskList.length}`
        } else {
            return 0
        }

    }

    return (
        <div className={styles.tasks}>
            <header className={styles.headerTasks}>
                <div className={styles.created}>
                    <span>Tarefas criadas</span>
                    <span className={styles.counter}>{taskList.length}</span>
                </div>
                <div className={styles.done}>
                    <span>Concluídas</span>
                    <span className={styles.counter}>{countTasksConcluidas()}</span>
                </div>
            </header>
            {(taskList.length > 0) ? taskList.map(task => {
                return (
                    <TaskItem key={task.id}
                              task={task}
                              onDelete={onDelete}
                              onToggle={onToggle}
                    />
                )
            }) : <div className={styles.clipboard}>
                <img src={clipboardImg} alt="Clipboard"/>
                <div>
                    <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>}
        </div>
    )
}