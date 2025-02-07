interface AuthFormErrorProps {
    message: string;
    type?: 'error' | 'success';
}

export function AuthFormError({ message, type = 'error' }: AuthFormErrorProps) {
    const bgColor =
        type === 'error'
            ? 'bg-red-500/10 text-red-500'
            : 'bg-green-500/10 text-green-500';

    return <div className={`rounded-md p-3 text-sm ${bgColor}`}>{message}</div>;
}
