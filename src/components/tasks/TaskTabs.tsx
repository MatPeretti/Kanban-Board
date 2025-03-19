import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TaskGroup } from './TaskGroup';
import type { Task } from '@/types/board';

interface TaskTabsProps {
    overdueTasks: Task[];
    todayTasks: Task[];
    tomorrowTasks: Task[];
    upcomingTasks: Task[];
    laterTasks: Task[];
    filteredTasks: Task[];
}

export function TaskTabs({
    overdueTasks,
    todayTasks,
    tomorrowTasks,
    upcomingTasks,
    laterTasks,
    filteredTasks,
}: TaskTabsProps) {
    return (
        <Tabs defaultValue='all' className='w-full'>
            <TabsList className='mb-6 bg-gray-800'>
                <TabsTrigger value='all'>All Tasks</TabsTrigger>
                <TabsTrigger value='today'>Today</TabsTrigger>
                <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
                <TabsTrigger value='completed'>Completed</TabsTrigger>
            </TabsList>

            <TabsContent value='all' className='space-y-6'>
                {overdueTasks.length > 0 && (
                    <TaskGroup title='Overdue' tasks={overdueTasks} isOverdue />
                )}

                {todayTasks.length > 0 && (
                    <TaskGroup title='Today' tasks={todayTasks} />
                )}

                {tomorrowTasks.length > 0 && (
                    <TaskGroup title='Tomorrow' tasks={tomorrowTasks} />
                )}

                {upcomingTasks.length > 0 && (
                    <TaskGroup title='This Week' tasks={upcomingTasks} />
                )}

                {laterTasks.length > 0 && (
                    <TaskGroup title='Later' tasks={laterTasks} />
                )}

                {filteredTasks.length === 0 && (
                    <div className='text-center py-12'>
                        <p className='text-gray-400'>No tasks found</p>
                    </div>
                )}
            </TabsContent>

            <TabsContent value='today' className='space-y-6'>
                {todayTasks.length > 0 ? (
                    <TaskGroup title='Today' tasks={todayTasks} />
                ) : (
                    <div className='text-center py-12'>
                        <p className='text-gray-400'>No tasks due today</p>
                    </div>
                )}
            </TabsContent>

            <TabsContent value='upcoming' className='space-y-6'>
                {tomorrowTasks.length > 0 && (
                    <TaskGroup title='Tomorrow' tasks={tomorrowTasks} />
                )}

                {upcomingTasks.length > 0 && (
                    <TaskGroup title='This Week' tasks={upcomingTasks} />
                )}

                {tomorrowTasks.length === 0 && upcomingTasks.length === 0 && (
                    <div className='text-center py-12'>
                        <p className='text-gray-400'>No upcoming tasks</p>
                    </div>
                )}
            </TabsContent>

            <TabsContent value='completed' className='space-y-6'>
                <div className='text-center py-12'>
                    <p className='text-gray-400'>No completed tasks</p>
                </div>
            </TabsContent>
        </Tabs>
    );
}
