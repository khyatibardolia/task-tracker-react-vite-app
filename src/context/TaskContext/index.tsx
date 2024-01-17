import {createContext, FC, useState} from 'react';

export const TaskContext = createContext();

export const TaskProvider: FC = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...newTask]);
    };

    const contextValue = {
        tasks,
        setTasks,
        addTask,
    };

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};
