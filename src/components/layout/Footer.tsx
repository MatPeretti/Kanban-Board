import { Layout } from 'lucide-react';

function Footer() {
    return (
        <footer className='border-t border-gray-800 bg-black/50'>
            <div className='container mx-auto p-6'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <Layout className='h-5 w-5' />
                        <span className='text-sm font-medium text-gray-300'>
                            KanbanFlow
                        </span>
                    </div>

                    <div className='flex items-center gap-6 text-sm text-gray-400'>
                        <span>
                            Designed & Developed by{' '}
                            <span className='text-gray-300'>
                                Matheus Peretti
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
