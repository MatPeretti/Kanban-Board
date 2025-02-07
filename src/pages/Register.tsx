import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthFormInput } from '@/components/auth/AuthFormInput';
import { AuthFormError } from '@/components/auth/AuthFormError';
import { useFormStatus } from '@/hooks/useFormStatus';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { status, setError, setSuccess, clearStatus } = useFormStatus();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearStatus();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.email === 'test@example.com') {
            setSuccess('Registration successful! You can now log in.');
        } else {
            setError('Registration failed. Try again.');
        }
    };

    return (
        <AuthLayout
            title='Create an Account'
            subtitle={
                <p className='text-sm text-gray-400'>
                    Or{' '}
                    <Link to='/login' className='text-primary hover:text-white'>
                        sign in to your account
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
                <AuthFormInput
                    label='Confirm Password'
                    id='confirmPassword'
                    type='password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm your password'
                />

                {status && (
                    <AuthFormError
                        message={status.message}
                        type={status.type}
                    />
                )}

                <Button
                    type='submit'
                    className='w-full bg-purple-600 hover:bg-purple-700'
                >
                    Register
                </Button>
            </form>
        </AuthLayout>
    );
}
