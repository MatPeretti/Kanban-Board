import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CreateWorkspaceDialogProps } from '@/types/dialogs';

export function CreateWorkspaceDialog({
    open,
    onOpenChange,
    onCreateWorkspace,
}: CreateWorkspaceDialogProps) {
    const [workspaceName, setWorkspaceName] = useState('');

    const handleSubmit = () => {
        if (!workspaceName.trim()) return;

        onCreateWorkspace(workspaceName.trim());
        setWorkspaceName('');
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-[400px] bg-gray-800 text-white border-gray-700'>
                <DialogHeader>
                    <DialogTitle>Create New Workspace</DialogTitle>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid gap-2'>
                        <Label htmlFor='workspace-name'>Workspace Name</Label>
                        <Input
                            id='workspace-name'
                            value={workspaceName}
                            onChange={(e) => setWorkspaceName(e.target.value)}
                            placeholder='Enter workspace name'
                            className='bg-gray-700 border-gray-600'
                        />
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
                        Create Workspace
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
