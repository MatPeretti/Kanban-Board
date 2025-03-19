import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface TaskSearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function TaskSearch({ searchQuery, setSearchQuery }: TaskSearchProps) {
    return (
        <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <Input
                placeholder='Search tasks...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-10 bg-gray-800 border-gray-700'
            />
        </div>
    );
}
