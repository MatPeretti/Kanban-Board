import { useState } from 'react';
import {
    LayoutDashboard,
    ListTodo,
    Calendar,
    BarChart3,
    Settings,
    Users,
    LogOut,
    ChevronDown,
    Plus,
} from 'lucide-react';
import { CreateWorkspaceDialog } from './CreateWorkspaceDialog';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { KanbanSidebarProps } from '@/types/kanban';
import { Workspace } from '@/types/workspace';

export function KanbanSidebar({ isOpen }: KanbanSidebarProps) {
    const [activeItem, setActiveItem] = useState('dashboard');
    const [workspaces, setWorkspaces] = useState<Workspace[]>([
        { id: 'personal', name: 'Personal Workspace' },
        { id: 'team', name: 'Team Projects' },
        { id: 'client', name: 'Client Work' },
    ]);
    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
    const [isWorkspaceDialogOpen, setIsWorkspaceDialogOpen] = useState(false);

    const handleCreateWorkspace = (workspaceName: string) => {
        const newWorkspace: Workspace = {
            id: workspaceName.toLowerCase().replace(/\s+/g, '-'),
            name: workspaceName,
        };
        setWorkspaces([...workspaces, newWorkspace]);
        setSelectedWorkspace(newWorkspace);
    };

    const menuItems = [
        { id: 'board', name: 'Board', icon: LayoutDashboard },
        { id: 'tasks', name: 'My Tasks', icon: ListTodo },
        { id: 'calendar', name: 'Calendar', icon: Calendar },
        { id: 'analytics', name: 'Analytics', icon: BarChart3 },
        { id: 'team', name: 'Team', icon: Users },
        { id: 'settings', name: 'Settings', icon: Settings },
    ];

    return (
        <>
            <div
                className={cn(
                    'fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-800 border-r border-gray-700 transition-all duration-300 ease-in-out',
                    isOpen ? 'w-64' : 'w-16'
                )}
            >
                <div className='flex items-center justify-between p-4 border-b border-gray-700'>
                    {isOpen ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='ghost'
                                    className='w-full justify-start px-2 text-left'
                                >
                                    <div className='flex items-center gap-2 overflow-hidden'>
                                        <div className='flex-shrink-0 w-6 h-6 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold'>
                                            {selectedWorkspace.name.charAt(0)}
                                        </div>
                                        <span className='truncate'>
                                            {selectedWorkspace.name}
                                        </span>
                                    </div>
                                    <ChevronDown className='ml-auto h-4 w-4' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='start' className='w-56'>
                                <DropdownMenuLabel>
                                    Workspaces
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {workspaces.map((workspace) => (
                                    <DropdownMenuItem
                                        key={workspace.id}
                                        onClick={() =>
                                            setSelectedWorkspace(workspace)
                                        }
                                    >
                                        <div className='flex items-center gap-2'>
                                            <div className='flex-shrink-0 w-6 h-6 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold'>
                                                {workspace.name.charAt(0)}
                                            </div>
                                            <span>{workspace.name}</span>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() =>
                                        setIsWorkspaceDialogOpen(true)
                                    }
                                >
                                    <Plus className='mr-2 h-4 w-4' />
                                    Add Workspace
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className='w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mx-auto'>
                            {selectedWorkspace.name.charAt(0)}
                        </div>
                    )}
                </div>

                <div className='flex-1 overflow-auto py-4'>
                    <nav className='space-y-1 px-2'>
                        {menuItems.map((item) => (
                            <Button
                                key={item.id}
                                variant={
                                    activeItem === item.id
                                        ? 'secondary'
                                        : 'ghost'
                                }
                                className={cn(
                                    'w-full justify-start',
                                    isOpen ? 'px-3' : 'px-0 justify-center',
                                    activeItem === item.id && 'bg-gray-700'
                                )}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <item.icon
                                    className={cn(
                                        'h-5 w-5',
                                        !isOpen && 'mx-auto',
                                        activeItem === item.id && 'text-white'
                                    )}
                                />
                                {isOpen && (
                                    <span
                                        className={cn(
                                            activeItem === item.id &&
                                                'text-white'
                                        )}
                                    >
                                        {item.name}
                                    </span>
                                )}
                            </Button>
                        ))}
                    </nav>
                </div>

                <div className='p-4 border-t border-gray-700'>
                    <div
                        className={cn(
                            'flex items-center',
                            !isOpen && 'justify-center'
                        )}
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
                            <Button
                                variant='ghost'
                                size='icon'
                                className='ml-auto'
                            >
                                <LogOut className='h-4 w-4' />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <CreateWorkspaceDialog
                open={isWorkspaceDialogOpen}
                onOpenChange={setIsWorkspaceDialogOpen}
                onCreateWorkspace={handleCreateWorkspace}
            />
        </>
    );
}
