import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthFormInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export function AuthFormInput({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
}: AuthFormInputProps) {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                name={id}
                type={type}
                required
                className='mt-1 block w-full bg-gray-800 text-white placeholder-gray-400'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
