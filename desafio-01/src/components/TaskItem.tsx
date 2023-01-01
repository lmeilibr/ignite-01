import {CheckCircle, Circle, Trash} from "phosphor-react"
import styles from './TaskItem.module.css'

export interface TaskItem {
    id: string
    isCompleted: boolean;
    text: string;
}

export interface TaskProps {
    task: TaskItem
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;


}


export function TaskItem({task, onDelete, onToggle}: TaskProps) {

    function handleDelete() {
        onDelete(task.id)
    }

    function handleCheckTask(){
        onToggle(task.id)
    }

    function taskText() {
        if (task.isCompleted) {
            return styles.completedText
        } else {
            return styles.text
        }
    }

    function getIcon() {
        if (task.isCompleted) {
            return <>
                <div className={styles.filledCircle}>
                    <Circle size={17.45} weight={"fill"}/>
                </div>
                <div className={styles.completed}>
                    <CheckCircle
                        size={17.45}
                    />
                </div>
            </>;
        } else {
            return <>
                <div className={styles.todoCircle}>
                    <Circle size={17.45} weight={"bold"}/>
                </div>
            </>;
        }
    }

    return (
        <div className={styles.task}>
            <div className={styles.icon} onClick={handleCheckTask}>
                {getIcon()}
            </div>
            <div className={taskText()}>{task.text}</div>
            <div className={styles.trash}>
                <Trash onClick={handleDelete} size={24}/>
            </div>
        </div>
    )
}
