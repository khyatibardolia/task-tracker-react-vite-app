import {BreadCrumbs} from "../../components/BreadCrumbs";
import {AddTaskForm} from "../../components/AddTaskForm";
import {TasksList} from "../../components/TasksList";

export const Home = () => {
    return <>
        <BreadCrumbs/>
        <AddTaskForm/>
        <TasksList/>
    </>
}