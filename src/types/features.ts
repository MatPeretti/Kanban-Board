import { LucideIcon } from 'lucide-react';

export interface Feature {
    title: string;
    price?: string;
    description: string | string[];
    icon?: LucideIcon;
}
