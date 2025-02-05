import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function RegisterCTA() {
    return (
        <section className='my-20'>
            <div className='rounded-lg p-8 text-center'>
                <h2 className='mb-4 text-3xl font-bold'>
                    Ready to Get Started?
                </h2>

                <p className='mb-8 text-gray-400'>
                    Join thousands of teams already using KanbanFlow
                </p>
                <motion.div>
                    <Button size='lg' className='gap-2 group'>
                        Register Now
                        <ArrowRight className='h-5 w-5 transform transition-transform group-hover:translate-x-2' />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default RegisterCTA;
