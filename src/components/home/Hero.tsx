import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className='container mx-auto flex-1 px-4'>
            <div className='my-20 grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12'>
                <motion.div
                    className='flex flex-col justify-center space-y-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h1
                        className='text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Streamline Your Workflow with Modern Kanban
                    </motion.h1>

                    <motion.p
                        className='text-xl text-gray-400'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Transform your project management with our intuitive
                        Kanban board. Boost productivity and team collaboration.
                    </motion.p>

                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <Button
                            size='lg'
                            className='gap-2 group'
                            onClick={() => navigate('/start-free-trial')}
                        >
                            Start Free Trial
                            <ArrowRight className='h-5 w-5 transform transition-transform group-hover:translate-x-2' />
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className={
                                'gap-2 group text-black border-gray-500 bg-white hover:bg-gray-400 hover:border-gray-400 transition-all duration-300 ease-in-out'
                            }
                        >
                            Learn More
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className='relative'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className='h-[300px] sm:h-[240px] md:h-[280px] lg:h-auto lg:aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl'>
                        <div className='grid h-full grid-cols-3 gap-3 p-4 sm:gap-2 sm:p-3 md:gap-3 md:p-4 lg:gap-4 lg:p-6'>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className='rounded-lg bg-white/10 p-3 sm:p-2 md:p-3 lg:p-4'
                                >
                                    <div className='mb-3 sm:mb-2 md:mb-3 lg:mb-4 h-2 sm:h-1.5 md:h-2 lg:h-3 w-16 sm:w-10 md:w-12 lg:w-20 rounded bg-white/20' />
                                    {Array.from({ length: 3 }).map((_, j) => (
                                        <div
                                            key={j}
                                            className='mb-2 sm:mb-1 md:mb-2 rounded bg-white/5 p-2 sm:p-1.5 md:p-2 lg:p-3'
                                        >
                                            <div className='h-1.5 sm:h-1 md:h-1.5 lg:h-2 w-full rounded bg-white/20' />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
