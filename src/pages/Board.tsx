import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Plus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { KanbanColumn } from '@/components/board/KanbanColumn';
import { KanbanSidebar } from '@/components/board/KanbanSidebar';
import { CreateTaskDialog } from '@/components/board/CreateTaskDialog';
import { useKanbanBoard } from '@/hooks/useKanbanBoard';

export default function Board() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {
        columns,
        isCreateTaskOpen,
        setIsCreateTaskOpen,
        setTargetColumnId,
        handleDragEnd,
        handleAddTask,
        handleCreateTask,
    } = useKanbanBoard();

    const mainContentClass = isSidebarOpen ? 'pl-64' : 'pl-16';

    return (
        <div className='flex h-screen bg-gray-900 text-white overflow-hidden'>
            <KanbanSidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <main
                className={`flex-1 flex flex-col overflow-hidden ${mainContentClass} transition-all duration-300`}
            >
                <header className='flex items-center justify-between p-4 border-b border-gray-800'>
                    <div className='flex items-center'>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className='mr-4'
                            aria-label='Toggle sidebar'
                        >
                            <Menu className='h-5 w-5' />
                        </Button>
                        <h1 className='text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>
                            KanbanFlow
                        </h1>
                    </div>
                    <Button
                        onClick={() => {
                            setTargetColumnId('todo');
                            setIsCreateTaskOpen(true);
                        }}
                        className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                    >
                        <Plus className='h-4 w-4 mr-2' />
                        Add Task
                    </Button>
                </header>

                <div className='flex-1 overflow-x-auto'>
                    <div className={`p-4 ${isSidebarOpen ? 'pr-8' : 'px-8'}`}>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <div className='flex gap-3 h-full'>
                                {columns.map((column) => (
                                    <KanbanColumn
                                        key={column.id}
                                        column={column}
                                        onAddTask={handleAddTask}
                                    />
                                ))}
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </main>

            <CreateTaskDialog
                open={isCreateTaskOpen}
                onOpenChange={setIsCreateTaskOpen}
                onCreateTask={handleCreateTask}
            />
        </div>
    );
}
