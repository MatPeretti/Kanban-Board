import { Layout } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const buttonClass = 'text-white hover:text-black/90';

    return (
        <header className='container mx-auto flex items-center justify-between p-4'>
            <div className='flex items-center gap-2'>
                <Layout className='h-8 w-8' aria-label='Logo KanbanFlow' />

                <span className='text-xl font-bold'>KanbanFlow</span>
            </div>

            <div className='flex items-center gap-4'>
                <Button
                    variant='ghost'
                    className={buttonClass}
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>

                <Button variant='ghost' className={buttonClass}>
                    Get Started
                </Button>
            </div>
        </header>
    );
}

export default Header;
