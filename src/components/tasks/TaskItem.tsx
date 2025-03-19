import { CheckCircle2, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Task } from '@/types/board';

interface TaskItemProps {
    task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
    return (
        <div className='flex items-center gap-3 p-3 bg-gray-800 rounded-md border border-gray-700'>
            <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6 rounded-full'
            >
                <CheckCircle2 className='h-5 w-5 text-gray-400' />
            </Button>

            <div className='flex-1 min-w-0'>
                <h3 className='font-medium'>{task.title}</h3>
                <p className='text-sm text-gray-400 truncate'>
                    {task.description}
                </p>
            </div>

            <div className='flex items-center gap-2'>
                {task.labels.length > 0 && (
                    <Badge
                        variant='outline'
                        className='hidden md:flex text-white'
                    >
                        {task.labels[0]}
                        {task.labels.length > 1 && `+${task.labels.length - 1}`}
                    </Badge>
                )}

                <div
                    className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === 'high'
                            ? 'bg-red-500/20 text-red-500'
                            : task.priority === 'medium'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-blue-500/20 text-blue-500'
                    }`}
                >
                    {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                </div>

                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <Clock className='h-3 w-3' />
                    <span>{format(new Date(task.dueDate), 'MMM d')}</span>
                </div>
            </div>
        </div>
    );
}
