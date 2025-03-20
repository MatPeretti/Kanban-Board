import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavigationMenuProps } from '@/types/navigation-menu';

export function NavigationMenu({
    menuItems,
    activeItem,
    isOpen,
    onNavigate,
}: NavigationMenuProps) {
    return (
        <nav className='space-y-1 px-2'>
            {menuItems.map((item) => (
                <Button
                    key={item.id}
                    variant={activeItem === item.id ? 'secondary' : 'ghost'}
                    className={cn(
                        'w-full justify-start',
                        isOpen ? 'px-3' : 'px-0 justify-center',
                        activeItem === item.id && 'bg-gray-700'
                    )}
                    onClick={() => onNavigate(item.id)}
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
                                activeItem === item.id && 'text-white'
                            )}
                        >
                            {item.name}
                        </span>
                    )}
                </Button>
            ))}
        </nav>
    );
}
