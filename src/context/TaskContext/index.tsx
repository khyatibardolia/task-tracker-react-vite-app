import {createContext, FC, useEffect, useState} from 'react';
import {TasksData} from "../../types/types";

export const TaskContext = createContext();

export const TaskProvider: FC = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [taskHistory, setTaskHistory] = useState({});

    useEffect(() => {
        // Retrieve tasks from local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);

        // Retrieve tasks history from local storage
        const storedTaskHistory = JSON.parse(localStorage.getItem('taskHistory')) || {};
        setTaskHistory(storedTaskHistory);

    }, []);

    const addEditTask = (newTask: TasksData) => {
        setTasks([...newTask]);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        const updatedTaskHistory = { ...taskHistory };
        delete updatedTaskHistory[taskId];
        setTaskHistory(updatedTaskHistory);
        localStorage.setItem('taskHistory', JSON.stringify(updatedTaskHistory));
    };

    const saveTaskHistory = (taskId, newHistory) => {
        setTaskHistory({ ...taskHistory, [taskId]: [...(taskHistory[taskId] || []), newHistory] });
        localStorage.setItem('taskHistory', JSON.stringify({
            ...taskHistory,
            [taskId]: [...(taskHistory[taskId] || []), newHistory],
        }));
    };

    const contextValue = {
        tasks,
        setTasks,
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
