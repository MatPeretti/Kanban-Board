import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface UserProfileProps {
    isOpen: boolean;
}

export function UserProfile({ isOpen }: UserProfileProps) {
    return (
        <div className='p-4 border-t border-gray-700'>
            <div
                className={cn('flex items-center', !isOpen && 'justify-center')}
            >
                <Avatar className='h-8 w-8'>
                    <AvatarFallback>TU</AvatarFallback>
                </Avatar>
                {isOpen && (
                    <div className='ml-3 overflow-hidden'>
                        <p className='text-sm font-medium truncate'>
                            Test User
                        </p>
                        <p className='text-xs text-gray-400 truncate'>
                            test@example.com
                        </p>
                    </div>
                )}
                {isOpen && (
                    <Button variant='ghost' size='icon' className='ml-auto'>
                        <LogOut className='h-4 w-4' />
                    </Button>
                )}
            </div>
        </div>
    );
}
