import { LucideIcon } from 'lucide-react';

export interface NavigationMenuItem {
    id: string;
    name: string;
    icon: LucideIcon;
}

export interface NavigationMenuProps {
    menuItems: NavigationMenuItem[];
    activeItem: string;
    isOpen: boolean;
    onNavigate: (itemId: string) => void;
}
