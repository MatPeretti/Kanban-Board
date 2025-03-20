import type { Task } from '@/types/board';
import { useTasks } from '@/hooks/useTasks';
import { TaskSearch } from '@/components/tasks/TaskSearch';
import { TaskFilters } from '@/components/tasks/TaskFilters';
import { TaskTabs } from '@/components/tasks/TaskTabs';
import { useSidebar } from '@/context/SidebarContext';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface TasksPageProps {
    tasks: Task[];
}

export function Tasks({ tasks }: TasksPageProps) {
    const {
        searchQuery,
        setSearchQuery,
        priorityFilter,
        setPriorityFilter,
        labelFilter,
        setLabelFilter,
        allLabels,
        overdueTasks,
        todayTasks,
        tomorrowTasks,
        upcomingTasks,
        laterTasks,
        filteredTasks,
    } = useTasks(tasks);

    const { toggleSidebar } = useSidebar();

    return (
        <div>
            <header className='flex items-center p-4 border-b border-gray-800'>
                <Button
                    variant='ghost'
                    size='icon'
                    onClick={toggleSidebar}
                    className='mr-4'
                >
                    <Menu className='h-5 w-5' />
                </Button>
            </header>

            <div className='p-6'>
                <div className='mb-6'>
                    <h1 className='text-2xl font-bold mb-2'>My Tasks</h1>
                    <p className='text-gray-400'>
                        View and manage all your tasks in one place
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mb-6'>
                    <TaskSearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    <TaskFilters
                        priorityFilter={priorityFilter}
                        setPriorityFilter={setPriorityFilter}
                        labelFilter={labelFilter}
                        setLabelFilter={setLabelFilter}
                        allLabels={allLabels}
                    />
                </div>

                <TaskTabs
                    overdueTasks={overdueTasks}
                    todayTasks={todayTasks}
                    tomorrowTasks={tomorrowTasks}
                    upcomingTasks={upcomingTasks}
                    laterTasks={laterTasks}
                    filteredTasks={filteredTasks}
                />
            </div>
        </div>
    );
}
