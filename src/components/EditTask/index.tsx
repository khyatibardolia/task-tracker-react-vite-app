import {FC, useContext, useEffect, useState} from "react";
import {AddEditTaskForm} from "../AddEditTaskForm";
import {useParams} from "react-router-dom";
import {TaskContext} from "@context/TaskContext";
import {TasksData} from "@types/types";

export const EditTask: FC = () => {
    const { tasks } = useContext(TaskContext);
    const { taskId } = useParams<{ taskId: string }>();
    const [selectedTask, setSelectedTask] = useState({} as TasksData);

    useEffect(() => {
        const existingTask: TasksData | undefined = tasks.find(task => task.id === taskId);

        if (existingTask) {
            setSelectedTask(existingTask)
        }
    }, [taskId, tasks]);

    return <><AddEditTaskForm isEdit={true} existingTask={selectedTask}/></>
}