import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const StatItem = ({ number, label, delay }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Extract numeric part and suffix (e.g., "1600+" -> 1600, "+")
    const numericValue = parseInt(number.replace(/,/g, ''), 10);
    const suffix = number.replace(/[0-9,]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;
        const duration = 2000; // 2 seconds duration

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                // Ease out cubic function for smooth counting
                const percentage = 1 - Math.pow(1 - (progress / duration), 3);

                setCount(Math.floor(numericValue * percentage));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(numericValue);
            }
        };

        // Start counting when visible
        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, numericValue]);

    return (
        <div
            className={`stat-item ${isVisible ? 'animate-fadeInUp' : ''}`}
            ref={ref}
            style={{ opacity: isVisible ? undefined : 0, animationDelay: `${delay}s` }}
        >
            <h3 className="stat-number">
                {count}{suffix}
            </h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { number: '11+', label: 'YEARS' },
        { number: '1600+', label: 'CLIENTS' },
        { number: '40+', label: 'AWARDS' },
        { number: '60+', label: 'EMPLOYEES' }
    ];

    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            number={stat.number}
                            label={stat.label}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
