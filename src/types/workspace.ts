export interface Workspace {
    id: string;
    name: string;
}

export interface WorkspaceSelectorProps {
    isOpen: boolean;
}

export interface WorkspaceIconProps {
    name: string;
    className?: string;
}
