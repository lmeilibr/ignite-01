import './global.css'
import {Header} from './components/Header'
import {NewTask} from "./components/NewTask";
import {Tasks} from "./components/Tasks";
import {useState} from "react";
import {TaskItem} from "./components/TaskItem";


function App() {
    const [tasks, setTasks] = useState(Array<TaskItem>)

    function handleCreateNewTask(taskDescription: string) {
        const newTask = {
            id: `id${Math.random()}`,
            isCompleted: false,
            text: taskDescription

        }
        setTasks([...tasks, newTask])
    }

    function onDelete(id: string) {
        const tasksAfterDelete = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(tasksAfterDelete)
    }

    function onToggle(id: string) {
        const newTasks = tasks.map(task => {
            if (task.id == id){
                return {...task, isCompleted: !task.isCompleted}
            }else{
                return task
            }
        })
        setTasks(newTasks)
    }

    return (
        <div>
            <Header/>
            <NewTask onCreateNewTask={handleCreateNewTask}/>
            <Tasks
                taskList={tasks}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        </div>
    )
}

export default App
