import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TaskFiltersProps {
    priorityFilter: string[];
    setPriorityFilter: (priorities: string[]) => void;
    labelFilter: string[];
    setLabelFilter: (labels: string[]) => void;
    allLabels: string[];
}

export function TaskFilters({
    priorityFilter,
    setPriorityFilter,
    labelFilter,
    setLabelFilter,
    allLabels,
}: TaskFiltersProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-2 text-black'>
                    <Filter className='h-4 w-4' />
                    <span>Filter</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 bg-gray-800 border-gray-700'>
                <DropdownMenuLabel className='text-white'>
                    Priority
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={priorityFilter.includes('low')}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            setPriorityFilter([...priorityFilter, 'low']);
                        } else {
                            setPriorityFilter(
                                priorityFilter.filter((p) => p !== 'low')
                            );
                        }
                    }}
                >
                    Low
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={priorityFilter.includes('medium')}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            setPriorityFilter([...priorityFilter, 'medium']);
                        } else {
                            setPriorityFilter(
                                priorityFilter.filter((p) => p !== 'medium')
                            );
                        }
                    }}
                >
                    Medium
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={priorityFilter.includes('high')}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            setPriorityFilter([...priorityFilter, 'high']);
                        } else {
                            setPriorityFilter(
                                priorityFilter.filter((p) => p !== 'high')
                            );
                        }
                    }}
                >
                    High
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel className='text-white'>
                    Labels
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {allLabels.map((label) => (
                    <DropdownMenuCheckboxItem
                        key={label}
                        checked={labelFilter.includes(label)}
                        onCheckedChange={(checked) => {
                            if (checked) {
                                setLabelFilter([...labelFilter, label]);
                            } else {
                                setLabelFilter(
                                    labelFilter.filter((l) => l !== label)
                                );
                            }
                        }}
                    >
                        {label}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
