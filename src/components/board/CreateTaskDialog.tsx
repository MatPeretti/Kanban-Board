import { useState } from 'react';
import { CalendarIcon, Tag, X } from 'lucide-react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import type { Task } from '@/types/board';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CreateTaskDialogProps } from '@/types/dialogs';

export function CreateTaskDialog({
    open,
    onOpenChange,
    onCreateTask,
}: CreateTaskDialogProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(
        'medium'
    );
    const [dueDate, setDueDate] = useState<Date | undefined>(new Date());
    const [newLabel, setNewLabel] = useState('');
    const [labels, setLabels] = useState<string[]>([]);

    const handleAddLabel = () => {
        if (newLabel.trim() && !labels.includes(newLabel.trim())) {
            setLabels([...labels, newLabel.trim()]);
            setNewLabel('');
        }
    };

    const handleRemoveLabel = (label: string) => {
        setLabels(labels.filter((l) => l !== label));
    };

    const handleSubmit = () => {
        if (!title.trim() || !description.trim() || !dueDate) return;

        const newTask: Task = {
            id: `task-${Date.now()}`,
            title: title.trim(),
            description: description.trim(),
            priority,
            dueDate: dueDate.toISOString().split('T')[0],
            labels,
        };

        onCreateTask(newTask);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setPriority('medium');
        setDueDate(new Date());
        setLabels([]);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-[500px] bg-gray-800 text-white border-gray-700'>
                <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                    <DialogDescription className='text-gray-400'>
                        Add a new task to your board. Fill out the details
                        below.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid gap-2'>
                        <Label htmlFor='title'>Title</Label>
                        <Input
                            id='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Task title'
                            className='bg-gray-700 border-gray-600'
                        />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor='description'>Description</Label>
                        <Textarea
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Task description'
                            className='bg-gray-700 border-gray-600 min-h-[100px]'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='priority'>Priority</Label>
                            <Select
                                value={priority}
                                onValueChange={(
                                    value: 'low' | 'medium' | 'high'
                                ) => setPriority(value)}
                            >
                                <SelectTrigger className='bg-gray-700 border-gray-600'>
                                    <SelectValue placeholder='Select priority' />
                                </SelectTrigger>
                                <SelectContent className='bg-gray-700 border-gray-600'>
                                    <SelectItem value='low'>Low</SelectItem>
                                    <SelectItem value='medium'>
                                        Medium
                                    </SelectItem>
                                    <SelectItem value='high'>High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='dueDate'>Due Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className={cn(
                                            'justify-start text-left font-normal bg-gray-700 border-gray-600',
                                            !dueDate && 'text-gray-400'
                                        )}
                                    >
                                        <CalendarIcon className='mr-2 h-4 w-4' />
                                        {dueDate
                                            ? format(dueDate, 'PPP')
                                            : 'Pick a date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0 bg-gray-700 border-gray-600'>
                                    <Calendar
                                        mode='single'
                                        selected={dueDate}
                                        onSelect={setDueDate}
                                        initialFocus
                                        className='bg-gray-700'
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor='labels'>Labels</Label>
                        <div className='flex gap-2'>
                            <Input
                                id='labels'
                                value={newLabel}
                                onChange={(e) => setNewLabel(e.target.value)}
                                placeholder='Add label'
                                className='bg-gray-700 border-gray-600'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleAddLabel();
                                    }
                                }}
                            />
                            <Button
                                type='button'
                                onClick={handleAddLabel}
                                variant='secondary'
                            >
                                Add
                            </Button>
                        </div>
                        {labels.length > 0 && (
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {labels.map((label) => (
                                    <Badge
                                        key={label}
                                        variant='outline'
                                        className='flex items-center gap-1 text-white'
                                    >
                                        <Tag className='h-3 w-3' />
                                        {label}
                                        <Button
                                            variant='ghost'
                                            size='icon'
                                            className='h-4 w-4 ml-1 p-0'
                                            onClick={() =>
                                                handleRemoveLabel(label)
                                            }
                                        >
                                            <X className='h-3 w-3' />
                                        </Button>
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='ghost' onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                    >
                        Create Task
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
