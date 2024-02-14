import {AddEditTaskForm} from "../../components/AddEditTaskForm";
import {TasksList} from "../../components/TasksList";
import {TaskProvider} from "../../context/TaskContext";
import {BreadCrumbs} from "../../components/BreadCrumbs";

export const Home = () => {
    return <>
        <BreadCrumbs/>
        <TaskProvider>
            <AddEditTaskForm/>
            <TasksList/>
        </TaskProvider>
    </>
}