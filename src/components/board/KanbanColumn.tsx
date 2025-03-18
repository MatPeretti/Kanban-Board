import { Droppable, Draggable } from '@hello-pangea/dnd';
import { MoreHorizontal, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';
import { KanbanTask } from '@/components/board/KanbanTask';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { KanbanColumnProps } from '@/types/kanban';

export function KanbanColumn({ column, onAddTask }: KanbanColumnProps) {
    return (
        <div className='flex flex-col w-72 min-w-72 bg-gray-800/50 rounded-lg border border-gray-700'>
            <div className='p-3 flex items-center justify-between border-b border-gray-700'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium'>{column.title}</h3>
                    <div className='text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full'>
                        {column.tasks?.length ?? 0}
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-7 w-7'
                        onClick={() => onAddTask(column.id)}
                    >
                        <Plus className='h-4 w-4' />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='h-7 w-7'
                            >
                                <MoreHorizontal className='h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem>Edit Column</DropdownMenuItem>
                            <DropdownMenuItem>Archive Tasks</DropdownMenuItem>
                            <DropdownMenuItem className='text-red-500'>
                                Delete Column
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={cn(
                            'flex-1 p-2 overflow-y-auto',
                            snapshot.isDraggingOver && 'bg-gray-700/30'
                        )}
                    >
                        {column.tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <KanbanTask
                                        task={task}
                                        provided={provided}
                                        isDragging={snapshot.isDragging}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
