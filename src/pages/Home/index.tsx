import {BreadCrumbs} from "../../components/BreadCrumbs";
import {AddTaskForm} from "../../components/AddTaskForm";
import {TasksList} from "../../components/TasksList";
import {TaskProvider} from "../../context/TaskContext";

export const Home = () => {
    return <>
        <BreadCrumbs/>
        <TaskProvider>
            <AddTaskForm/>
            <TasksList/>
        </TaskProvider>
    </>
}