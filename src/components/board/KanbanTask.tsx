import { format } from 'date-fns';
import { Clock, Tag } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { KanbanTaskProps } from '@/types/kanban';

export function KanbanTask({ task, provided, isDragging }: KanbanTaskProps) {
    const priorityColors = {
        low: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
        medium: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
        high: 'bg-red-500/20 text-red-500 border-red-500/30',
    };

    const currentPriorityColor = priorityColors[task.priority];

    const labelColor = currentPriorityColor
        .split(' ')
        .find((cls) => cls.startsWith('text-'));

    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={cn(
                'mb-2 p-3 bg-gray-800 rounded-md border border-gray-700 shadow-sm hover:border-gray-600 transition-colors',
                isDragging && 'shadow-lg border-purple-500/50 bg-gray-800/90'
            )}
        >
            <h4 className='font-medium mb-2'>{task.title}</h4>
            <p className='text-sm text-gray-400 mb-3 line-clamp-2'>
                {task.description}
            </p>

            <div className='flex flex-wrap gap-2 mb-3'>
                {task.labels.map((label) => (
                    <Badge
                        key={label}
                        variant='outline'
                        className={cn(
                            'flex items-center gap-1 text-xs border-opacity-30',
                            labelColor
                        )}
                    >
                        <Tag className='h-3 w-3' />
                        {label}
                    </Badge>
                ))}
            </div>

            <div className='flex items-center justify-between text-xs text-gray-400'>
                <div
                    className={cn(
                        'px-2 py-1 rounded-full',
                        currentPriorityColor
                    )}
                >
                    {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                </div>

                <div className='flex items-center gap-1'>
                    <Clock className='h-3 w-3' />
                    <span>{format(new Date(task.dueDate), 'MMM d')}</span>
                </div>
            </div>
        </div>
    );
}
