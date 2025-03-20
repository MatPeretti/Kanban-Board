import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
    Workspace,
    WorkspaceSelectorProps,
    WorkspaceIconProps,
} from '@/types/workspace';
import { CreateWorkspaceDialog } from '@/components/board/CreateWorkspaceDialog';

export function WorkspaceSelector({ isOpen }: WorkspaceSelectorProps) {
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

    return (
        <>
            <div className='flex items-center justify-between p-4 border-b border-gray-700'>
                {isOpen ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                className='w-full justify-start px-2 text-left'
                            >
                                <div className='flex items-center gap-2 overflow-hidden'>
                                    <WorkspaceIcon
                                        name={selectedWorkspace.name}
                                    />
                                    <span className='truncate'>
                                        {selectedWorkspace.name}
                                    </span>
                                </div>
                                <ChevronDown className='ml-auto h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='start' className='w-56'>
                            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {workspaces.map((workspace) => (
                                <DropdownMenuItem
                                    key={workspace.id}
                                    onClick={() =>
                                        setSelectedWorkspace(workspace)
                                    }
                                >
                                    <div className='flex items-center gap-2'>
                                        <WorkspaceIcon name={workspace.name} />
                                        <span>{workspace.name}</span>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => setIsWorkspaceDialogOpen(true)}
                            >
                                <Plus className='mr-2 h-4 w-4' />
                                Add Workspace
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <WorkspaceIcon
                        name={selectedWorkspace.name}
                        className='mx-auto'
                    />
                )}
            </div>
            <CreateWorkspaceDialog
                open={isWorkspaceDialogOpen}
                onOpenChange={setIsWorkspaceDialogOpen}
                onCreateWorkspace={handleCreateWorkspace}
            />
        </>
    );
}

function WorkspaceIcon({ name, className }: WorkspaceIconProps) {
    return (
        <div
            className={cn(
                'flex-shrink-0 w-6 h-6 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold',
                className
            )}
        >
            {name.charAt(0)}
        </div>
    );
}
