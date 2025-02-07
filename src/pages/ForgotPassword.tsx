import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthFormInput } from '@/components/auth/AuthFormInput';
import { AuthFormError } from '@/components/auth/AuthFormError';
import { Button } from '@/components/ui/button';
import { useFormStatus } from '@/hooks/useFormStatus';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const { status, setError, setSuccess, clearStatus } = useFormStatus();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearStatus();

        if (email === 'test@example.com') {
            setSuccess('Check your email for a password reset link.');
        } else {
            setError('No account found with this email address');
        }
    };

    return (
        <AuthLayout
            title='Forgot your password?'
            subtitle="Enter your email address and we'll send you a link to reset your password."
        >
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <AuthFormInput
                    id='email'
                    label='Email address'
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    Send Reset Link
                </Button>

                <div className='text-center'>
                    <Link
                        to='/login'
                        className='text-sm font-medium text-primary hover:text-gray-300'
                    >
                        Back to login
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
