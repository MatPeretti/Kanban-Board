import type { Task } from '@/types/board';
import { TaskItem } from '@/components/tasks/TaskItem';

interface TaskGroupProps {
    title: string;
    tasks: Task[];
    isOverdue?: boolean;
}

export function TaskGroup({ title, tasks, isOverdue = false }: TaskGroupProps) {
    return (
        <div>
            <h2
                className={`text-lg font-medium mb-3 ${
                    isOverdue ? 'text-red-500' : ''
                }`}
            >
                {title} ({tasks.length})
            </h2>
            <div className='space-y-2'>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}
