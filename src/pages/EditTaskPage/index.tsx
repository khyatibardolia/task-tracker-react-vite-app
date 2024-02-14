import {FC} from "react";
import {BreadCrumbs} from "../../components/BreadCrumbs";
import {EditTask} from "../../components/EditTask";
import {TaskProvider} from "../../context/TaskContext";

export const EditTaskPage: FC = () => {
    return <>
        <BreadCrumbs/>
        <TaskProvider>
            <EditTask/>
        </TaskProvider>
    </>
}