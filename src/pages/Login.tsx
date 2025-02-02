'use client';

import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (email === 'test@example.com' && password === 'password') {
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='flex min-h-screen flex-col  text-white'>
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
                            Sign in to KanbanFlow
                        </h2>
                        <p className='mt-2 text-sm text-gray-400'>
                            Or{' '}
                            <Link
                                to='/register'
                                className='font-medium text-primary hover:text-white'
                            >
                                create a new account
                            </Link>
                        </p>
                    </div>
                    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-4 rounded-md'>
                            <div>
                                <Label htmlFor='email-address'>
                                    Email address
                                </Label>
                                <Input
                                    id='email-address'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='mt-1 block w-full bg-gray-800 text-white placeholder-gray-400'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor='password'>Password</Label>
                                <Input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='mt-1 block w-full bg-gray-800 text-white placeholder-gray-400'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='remember-me'
                                    name='remember-me'
                                    type='checkbox'
                                    className='h-4 w-4 rounded border-gray-300 bg-gray-700 text-primary focus:ring-primary'
                                />
                                <Label
                                    htmlFor='remember-me'
                                    className='ml-2 block text-sm'
                                >
                                    Remember me
                                </Label>
                            </div>

                            <div className='text-sm'>
                                <Link
                                    to='/forgot-password'
                                    className='font-medium text-primary hover:text-gray-300'
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        {error && (
                            <div className='rounded-md bg-red-500/10 p-3 text-sm text-red-500'>
                                {error}
                            </div>
                        )}

                        <Button
                            type='submit'
                            className='w-full bg-purple-600 text-white 
                            hover:bg-purple-700 
                            transition-colors duration-500 ease-in-out'
                        >
                            Sign in
                        </Button>
                    </form>
                </motion.div>
            </main>
        </div>
    );
}
