import { useState } from 'react';
import { DropResult } from '@hello-pangea/dnd';
import { Task, Column } from '@/types/board';

const initialColumns: Column[] = [
    {
        id: 'todo',
        title: 'To Do',
        tasks: [
            {
                id: 'task-1',
                title: 'Research competitors',
                description: 'Analyze top 5 competitors in the market',
                priority: 'medium',
                dueDate: '2025-04-01',
                labels: ['research', 'marketing'],
            },
            {
                id: 'task-2',
                title: 'Create wireframes',
                description: 'Design initial wireframes for the dashboard',
                priority: 'high',
                dueDate: '2025-03-25',
                labels: ['design'],
            },
        ],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        tasks: [
            {
                id: 'task-3',
                title: 'Implement authentication',
                description: 'Set up user authentication flow',
                priority: 'high',
                dueDate: '2025-03-20',
                labels: ['development', 'security'],
            },
        ],
    },
    {
        id: 'review',
        title: 'Review',
        tasks: [
            {
                id: 'task-4',
                title: 'Code review',
                description: 'Review PR #42 for the new feature',
                priority: 'medium',
                dueDate: '2025-03-18',
                labels: ['development'],
            },
        ],
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            {
                id: 'task-5',
                title: 'Set up project repository',
                description: 'Initialize Git repository and project structure',
                priority: 'low',
                dueDate: '2025-03-15',
                labels: ['setup'],
            },
        ],
    },
];

export function useKanbanBoard() {
    const [columns, setColumns] = useState<Column[]>(initialColumns);
    const [targetColumnId, setTargetColumnId] = useState<string>('todo');
    const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

    const handleDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        // Return if dropped outside or at the same position
        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
            return;
        }

        // Find the source column
        const sourceColumn = columns.find(
            (col) => col.id === source.droppableId
        );

        if (!sourceColumn) return;

        // Get the task being moved
        const taskToMove = sourceColumn.tasks[source.index];

        // Create new columns array
        const newColumns = columns.map((column) => {
            // Handle source column (remove task)
            if (column.id === source.droppableId) {
                const newTasks = [...column.tasks];
                newTasks.splice(source.index, 1); // Remove task from source

                // If same column, add the task at destination index
                if (source.droppableId === destination.droppableId) {
                    newTasks.splice(destination.index, 0, taskToMove);
                }

                return { ...column, tasks: newTasks };
            }

            // Handle destination column (add task)
            if (column.id === destination.droppableId) {
                const newTasks = [...column.tasks];
                newTasks.splice(destination.index, 0, taskToMove);
                return { ...column, tasks: newTasks };
            }

            // Return unchanged column
            return column;
        });

        setColumns(newColumns);
    };

    const handleAddTask = (columnId: string) => {
        setTargetColumnId(columnId);
        setIsCreateTaskOpen(true);
    };

    const handleCreateTask = (task: Task) => {
        const newColumns = columns.map((column) => {
            if (column.id === targetColumnId) {
                return {
                    ...column,
                    tasks: [...column.tasks, task],
                };
            }
            return column;
        });

        setColumns(newColumns);
        setIsCreateTaskOpen(false);
    };

    return {
        columns,
        isCreateTaskOpen,
        setIsCreateTaskOpen,
        targetColumnId,
        setTargetColumnId,
        handleDragEnd,
        handleAddTask,
        handleCreateTask,
    };
}
