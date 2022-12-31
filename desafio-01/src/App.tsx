import './global.css'
import {Header} from './components/Header'
import {NewTask} from "./components/NewTask";
import {TaskItem, TaskProp} from "./components/TaskItem";
import {Tasks} from "./components/Tasks";




function App() {
    return (
        <div>
            <Header/>
            <NewTask/>
            <Tasks/>
        </div>
    )
}

export default App
