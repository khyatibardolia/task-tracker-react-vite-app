import {createContext, FC, useEffect, useState} from 'react';
import {TasksData} from "../../types/types";

export const TaskContext = createContext();

export const TaskProvider: FC = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Retrieve tasks from local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addEditTask = (newTask: TasksData) => {
        setTasks([...newTask]);
    };

    const contextValue = {
        tasks,
        setTasks,
        addEditTask,
    };

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};
