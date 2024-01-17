export interface Tasks {
    tasks: TasksData[];
}

export interface TasksData {
    title: string,
    createdDateAndTime: string,
    status: string,
    description: string,
}