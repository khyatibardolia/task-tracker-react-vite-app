export interface TasksData {
    id: string,
    title: string,
    createdDateAndTime: string,
    status: string,
    description: string,
}

interface HistoryData {
    id: string;
    statusChangeText: string;
    updatedDateAndTime: string;
}
export interface TaskHistory {
    [id: string]: HistoryData[]
}

export interface TaskContextType {
    addEditTask: (newTask: TasksData) => void;
    tasks: TasksData[];
    setTasks: () => void;
    taskHistory: TaskHistory;
    saveTaskHistory: (taskId: string, newHistory: any) => void;
    deleteTask: (taskId: string) => void;
}