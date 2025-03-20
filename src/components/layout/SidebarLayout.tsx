import { ReactNode } from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { SidebarProvider } from '@/context/SidebarContext';
import { useSidebar } from '@/context/SidebarContext';
import { Outlet } from 'react-router-dom';

interface SidebarLayoutProps {
    children: ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
    const { isSidebarOpen } = useSidebar();
    const mainContentClass = isSidebarOpen ? 'pl-64' : 'pl-16';

    return (
        <main
            className={`flex-1 flex flex-col overflow-hidden ${mainContentClass} transition-all duration-300`}
        >
            <Sidebar />
            {children}
        </main>
    );
}

export function SidebarLayoutWithProvider() {
    return (
        <SidebarProvider>
            <SidebarLayout>
                <Outlet />
            </SidebarLayout>
        </SidebarProvider>
    );
}
