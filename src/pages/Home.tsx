import { useRef } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import RegisterCTA from '@/components/home/RegisterCTA';

function Home() {
    const featuresRef = useRef<HTMLDivElement>(null);

    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main>
            <Hero scrollToFeatures={scrollToFeatures} />
            <div ref={featuresRef}>
                <Features />
            </div>
            <RegisterCTA />
        </main>
    );
}

export default Home;
