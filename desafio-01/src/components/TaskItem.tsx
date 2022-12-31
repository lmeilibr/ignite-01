export interface TaskProps {
    isCompleted: boolean
    text: string
}


export function TaskItem({isCompleted, text}: TaskProps) {
    return (
        <div>
            <div>{`val is ${isCompleted}`}</div>
            <div>{text}</div>
        </div>
    )
}
