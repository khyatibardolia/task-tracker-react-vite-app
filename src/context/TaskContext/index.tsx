import {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {HistoryData, TaskContextType, TaskHistory, TasksData} from "../../types/types";

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

type TaskProviderProps = {
    children: ReactNode;
}

export const TaskProvider: FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState<TasksData[]>([]);
    const [taskHistory, setTaskHistory] = useState<TaskHistory>({});

    useEffect(() => {
        // Retrieve tasks from local storage
        const storedTasksJSON: string | null = localStorage.getItem('tasks');
        const storedTasks: TasksData[] = storedTasksJSON ? JSON.parse(storedTasksJSON) : [];
        setTasks(storedTasks);

        // Retrieve tasks history from local storage
        const storedTaskHistoryJSON: string | null = localStorage.getItem('taskHistory');
        const storedTaskHistory: TaskHistory = storedTaskHistoryJSON ? JSON.parse(storedTaskHistoryJSON) : {};
        setTaskHistory(storedTaskHistory);

    }, []);

    const addEditTask = (newTask: TasksData[]) => {
        setTasks(newTask);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks: TasksData[] = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        const updatedTaskHistory = {...taskHistory};
        delete updatedTaskHistory[taskId];
        setTaskHistory(updatedTaskHistory);
        localStorage.setItem('taskHistory', JSON.stringify(updatedTaskHistory));
    };

    const saveTaskHistory = (taskId: string, newHistory: HistoryData) => {
        setTaskHistory({ ...taskHistory, [taskId]: [...(taskHistory[taskId] || []), newHistory] });
        localStorage.setItem('taskHistory', JSON.stringify({
            ...taskHistory,
            [taskId]: [...(taskHistory[taskId] || []), newHistory],
        }));
    };

    const contextValue: TaskContextType = {
        tasks,
        addEditTask,
        taskHistory,
        saveTaskHistory,
        deleteTask,
    };

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};
