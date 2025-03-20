import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    ListTodo,
    Calendar,
    BarChart3,
    Settings,
    Users,
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import { WorkspaceSelector } from './Workspaceselector';
import { NavigationMenu } from './Navigationmenu';
import { UserProfile } from './UserProfile';

export function Sidebar() {
    const { isSidebarOpen } = useSidebar();
    const [activeItem, setActiveItem] = useState('board');
    const navigate = useNavigate();

    const menuItems = [
        { id: 'board', name: 'Board', icon: LayoutDashboard },
        { id: 'tasks', name: 'My Tasks', icon: ListTodo },
        { id: 'calendar', name: 'Calendar', icon: Calendar },
        { id: 'analytics', name: 'Analytics', icon: BarChart3 },
        { id: 'team', name: 'Team', icon: Users },
        { id: 'settings', name: 'Settings', icon: Settings },
    ];

    const handleNavigate = (itemId: string) => {
        setActiveItem(itemId);
        navigate(`/${itemId}`);
    };

    return (
        <aside
            className={cn(
                'fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-800 border-r border-gray-700 transition-all duration-300 ease-in-out',
                isSidebarOpen ? 'w-64' : 'w-16'
            )}
        >
            <WorkspaceSelector isOpen={isSidebarOpen} />

            <div className='flex-1 overflow-auto py-4'>
                <NavigationMenu
                    menuItems={menuItems}
                    activeItem={activeItem}
                    isOpen={isSidebarOpen}
                    onNavigate={handleNavigate}
                />
            </div>

            <UserProfile isOpen={isSidebarOpen} />
        </aside>
    );
}
