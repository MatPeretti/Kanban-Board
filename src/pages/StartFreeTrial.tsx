import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Feature } from '@/types/features';
import { useNavigate } from 'react-router-dom';

function StartFreeTrial() {
    const navigate = useNavigate();

    const pricingPlans: Feature[] = [
        {
            title: 'Basic',
            price: '0',
            description: [
                '3 Boards',
                'Basic Analytics',
                'Up to 5 team members',
                'Core Features',
            ],
        },
        {
            title: 'Pro',
            price: '9.99',
            description: [
                'Unlimited Boards',
                'Advanced Analytics',
                'Unlimited team members',
                'Priority Support',
            ],
        },
        {
            title: 'Enterprise',
            price: '29.99',
            description: [
                'Custom Solutions',
                '24/7 Support',
                'API Access',
                'Dedicated Manager',
            ],
        },
    ];

    return (
        <div className='container mx-auto px-4 py-12'>
            <div className='mb-8'>
                <Button
                    variant='ghost'
                    className='text-white hover:text-black/90'
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className='h-4 w-4' />
                    Back to Home
                </Button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-center mb-16'
            >
                <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>
                    Choose Your Plan
                </h1>
                <p className='text-xl text-gray-400'>
                    Start your free trial today and experience the power of
                    KanbanFlow
                </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        key={plan.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <Card className='h-full flex flex-col bg-gray-800/50 border-gray-700'>
                            <CardHeader>
                                <CardTitle className='text-2xl font-bold text-white'>
                                    {plan.title}
                                </CardTitle>
                                <CardDescription className='text-3xl font-bold text-white'>
                                    ${plan.price}
                                    <span className='text-base font-normal text-gray-400'>
                                        /month
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex-grow'>
                                <ul className='space-y-4'>
                                    {Array.isArray(plan.description) &&
                                        plan.description.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className='flex items-center gap-2 text-gray-200'
                                                >
                                                    <Check className='h-5 w-5 text-purple-500' />
                                                    <span>{feature}</span>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className='w-full border border-white text-white hover:bg-purple-600 hover:border-purple-600 transition'>
                                    Start {plan.title} Trial
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default StartFreeTrial;
