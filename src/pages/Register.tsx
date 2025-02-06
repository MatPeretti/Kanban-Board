import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (email === 'test@example.com') {
            setSuccess(true);
        } else {
            setError('Registration failed. Try again.');
        }
    };

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
                            Create an Account
                        </h2>
                        <p className='mt-2 text-sm text-gray-400'>
                            Or{' '}
                            <Link
                                to='/login'
                                className='font-medium text-primary hover:text-white'
                            >
                                sign in to your account
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
                                    autoComplete='new-password'
                                    required
                                    className='mt-1 block w-full bg-gray-800 text-white placeholder-gray-400'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label htmlFor='confirm-password'>
                                    Confirm Password
                                </Label>
                                <Input
                                    id='confirm-password'
                                    name='confirm-password'
                                    type='password'
                                    autoComplete='new-password'
                                    required
                                    className='mt-1 block w-full bg-gray-800 text-white placeholder-gray-400'
                                    placeholder='Confirm your password'
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {error && (
                            <div className='rounded-md bg-red-500/10 p-3 text-sm text-red-500'>
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className='rounded-md bg-green-500/10 p-3 text-sm text-green-500'>
                                Registration successful! You can now log in.
                            </div>
                        )}

                        <Button
                            type='submit'
                            className='w-full bg-purple-600 text-white 
                            hover:bg-purple-700 
                            transition-colors duration-500 ease-in-out'
                        >
                            Register
                        </Button>
                    </form>
                </motion.div>
            </main>
        </div>
    );
}
