'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Header from './core/header';
import Footer from './core/footer';

export default function NavigationWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Show loading screen for at least 1 second

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {isLoading && <LoadingScreen />}
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
} 