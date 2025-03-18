import { Task } from './board';

export interface CreateWorkspaceDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreateWorkspace: (workspaceName: string) => void;
}

export interface CreateTaskDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreateTask: (task: Task) => void;
}
