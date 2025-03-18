import { DraggableProvided } from '@hello-pangea/dnd';
import { Task, Column } from './board';

export interface KanbanTaskProps {
    task: Task;
    provided: DraggableProvided;
    isDragging: boolean;
}

export interface KanbanColumnProps {
    column: Column;
    onAddTask: (columnId: string) => void;
}

export interface KanbanSidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
