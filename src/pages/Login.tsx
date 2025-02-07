import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthFormInput } from '@/components/auth/AuthFormInput';
import { AuthFormError } from '@/components/auth/AuthFormError';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (
            formData.email === 'test@example.com' &&
            formData.password === 'password'
        ) {
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <AuthLayout
            title='Sign in to KanbanFlow'
            subtitle={
                <p className='text-sm text-gray-400'>
                    Or{' '}
                    <Link
                        to='/register'
                        className='text-primary hover:text-white'
                    >
                        create a new account
                    </Link>
                </p>
            }
        >
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <AuthFormInput
                    label='Email address'
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                />
                <AuthFormInput
                    label='Password'
                    id='password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                />

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input
                            id='remember-me'
                            name='remember-me'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 bg-gray-700 text-primary focus:ring-primary'
                        />
                        <label htmlFor='remember-me' className='ml-2 text-sm'>
                            Remember me
                        </label>
                    </div>
                    <Link
                        to='/forgot-password'
                        className='text-sm text-primary hover:text-gray-300'
                    >
                        Forgot your password?
                    </Link>
                </div>

                {error && <AuthFormError message={error} />}

                <Button
                    type='submit'
                    className='w-full bg-purple-600 hover:bg-purple-700'
                >
                    Sign in
                </Button>
            </form>
        </AuthLayout>
    );
}
