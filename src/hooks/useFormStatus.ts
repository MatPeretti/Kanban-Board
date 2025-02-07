import { useState } from 'react';

export function useFormStatus() {
    const [status, setStatus] = useState<{
        type?: 'error' | 'success';
        message: string;
    } | null>(null);

    const setError = (message: string) => setStatus({ type: 'error', message });
    const setSuccess = (message: string) =>
        setStatus({ type: 'success', message });
    const clearStatus = () => setStatus(null);

    return { status, setError, setSuccess, clearStatus };
}
