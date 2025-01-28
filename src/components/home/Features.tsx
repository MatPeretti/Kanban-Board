import { Feature } from '@/types/features';
import { motion } from 'framer-motion';
import { Layout, ListTodo, Sparkles } from 'lucide-react';

function Features() {
    const features: Feature[] = [
        {
            title: 'Intuitive Interface',
            description:
                'Drag-and-drop simplicity with a clean, modern design that makes task management effortless.',
            icon: Layout,
        },
        {
            title: 'Personal Task Management',
            description:
                'Organize your tasks with custom lists, priorities, and deadlines to boost your productivity.',
            icon: ListTodo,
        },
        {
            title: 'Smart Features',
            description:
                'Task tracking, progress visualization, and performance insights to help you stay focused and efficient.',
            icon: Sparkles,
        },
    ];

    return (
        <section className='my-20 px-8'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
                Why Choose KanbanFlow?
            </h2>

            <div className='grid gap-8 md:grid-cols-3'>
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        className='rounded-lg bg-gray-800/50 p-6'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <feature.icon className='mb-4 h-12 w-12 text-primary' />

                        <h3 className='mb-2 text-xl font-semibold'>
                            {feature.title}
                        </h3>

                        <p className='text-gray-400'>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Features;
