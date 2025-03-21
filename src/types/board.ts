export interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
    labels: string[];
}

export interface Column {
    id: string;
    title: string;
    tasks: Task[];
}
