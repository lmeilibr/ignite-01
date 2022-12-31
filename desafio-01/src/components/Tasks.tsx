import styles from './Tasks.module.css'
import clipboardImg from '../assets/Clipboard.svg'
import {TaskItem, TaskProps} from "./TaskItem";

interface Task extends TaskProps {
    id: string
}

let taskList: Task[] = [
    {
        id: "fdsgfsd1",
        isCompleted: false,
        text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    },
    {
        id: "fdsgfsd2",
        isCompleted: false,
        text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    },
    {
        id: "fdsgfsd3",
        isCompleted: false,
        text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    },
    {
        id: "fdsgfsd4",
        isCompleted: true,
        text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    },
    {
        id: "fdsgfsd5",
        isCompleted: true,
        text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    },
]

// taskList = []

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
            {(taskList.length > 0)?taskList.map(task => {
                return (
                    <TaskItem key={task.id} isCompleted={task.isCompleted} text={task.text}/>
                )
            }):<div className={styles.clipboard}>
                <img src={clipboardImg} alt="Clipboard"/>
                <div>
                    <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>}
        </div>
    )
}