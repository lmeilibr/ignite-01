import {CheckCircle, Circle, Trash} from "phosphor-react"
import styles from './TaskItem.module.css'

export interface TaskProps {
    isCompleted: boolean
    text: string
}


export function TaskItem({isCompleted, text}: TaskProps) {
    function taskText() {
        if (isCompleted) {
            return styles.completedText
        } else {
            return styles.text
        }
    }

    function getIcon() {
        if (isCompleted) {
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
            <div className={styles.icon}>
                {getIcon()}
            </div>
            <div className={taskText()}>{text}</div>
            <div className={styles.trash}>
                <Trash size={24}/>
            </div>
        </div>
    )
}
