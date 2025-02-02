import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

function Hero() {
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
                        <Button size='lg' className='gap-2 group'>
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
                    <div className='aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl'>
                        <div className='grid h-full grid-cols-3 gap-4 p-6'>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className='rounded-lg bg-white/10 p-4'
                                >
                                    <div className='mb-4 h-3 w-20 rounded bg-white/20' />
                                    {Array.from({ length: 3 }).map((_, j) => (
                                        <div
                                            key={j}
                                            className='mb-2 rounded bg-white/5 p-3'
                                        >
                                            <div className='h-2 w-full rounded bg-white/20' />
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
