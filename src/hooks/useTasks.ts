import { useState, useMemo } from 'react';
import type { Task } from '@/types/board';

interface UseTasksResult {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    priorityFilter: string[];
    setPriorityFilter: (filters: string[]) => void;
    labelFilter: string[];
    setLabelFilter: (filters: string[]) => void;
    allLabels: string[];
    overdueTasks: Task[];
    todayTasks: Task[];
    tomorrowTasks: Task[];
    upcomingTasks: Task[];
    laterTasks: Task[];
    filteredTasks: Task[];
}

export function useTasks(tasks: Task[]): UseTasksResult {
    const [searchQuery, setSearchQuery] = useState('');
    const [priorityFilter, setPriorityFilter] = useState<string[]>([]);
    const [labelFilter, setLabelFilter] = useState<string[]>([]);

    const allLabels = useMemo(
        () => Array.from(new Set(tasks.flatMap((task) => task.labels))),
        [tasks]
    );

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch =
                searchQuery === '' ||
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            const matchesPriority =
                priorityFilter.length === 0 ||
                priorityFilter.includes(task.priority);

            const matchesLabel =
                labelFilter.length === 0 ||
                task.labels.some((label) => labelFilter.includes(label));

            return matchesSearch && matchesPriority && matchesLabel;
        });
    }, [tasks, searchQuery, priorityFilter, labelFilter]);

    const today = useMemo(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }, []);

    const tomorrow = useMemo(() => {
        const date = new Date(today);
        date.setDate(date.getDate() + 1);
        return date;
    }, [today]);

    const nextWeek = useMemo(() => {
        const date = new Date(today);
        date.setDate(date.getDate() + 7);
        return date;
    }, [today]);

    const overdueTasks = useMemo(
        () => filteredTasks.filter((task) => new Date(task.dueDate) < today),
        [filteredTasks, today]
    );

    const todayTasks = useMemo(
        () =>
            filteredTasks.filter((task) => {
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate.getTime() === today.getTime();
            }),
        [filteredTasks, today]
    );

    const tomorrowTasks = useMemo(
        () =>
            filteredTasks.filter((task) => {
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate.getTime() === tomorrow.getTime();
            }),
        [filteredTasks, tomorrow]
    );

    const upcomingTasks = useMemo(
        () =>
            filteredTasks.filter((task) => {
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate > tomorrow && dueDate <= nextWeek;
            }),
        [filteredTasks, tomorrow, nextWeek]
    );

    const laterTasks = useMemo(
        () =>
            filteredTasks.filter((task) => {
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate > nextWeek;
            }),
        [filteredTasks, nextWeek]
    );

    return {
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
    };
}
