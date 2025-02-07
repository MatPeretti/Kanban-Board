import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';

interface AuthLayoutProps {
    title: string;
    subtitle?: React.ReactNode;
    children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
    return (
        <div className='flex min-h-screen flex-col text-white'>
            <main className='container mx-auto flex flex-1 items-center justify-center px-4'>
                <motion.div
                    className='w-full max-w-md space-y-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center'>
                        <Layout className='mx-auto h-12 w-12 text-primary' />
                        <h2 className='mt-6 text-3xl font-bold tracking-tight'>
                            {title}
                        </h2>
                        {subtitle && (
                            <p className='mt-2 text-sm text-gray-400'>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {children}
                </motion.div>
            </main>
        </div>
    );
}
