import { useState, useEffect } from 'react';
import './News.css';

const News = () => {
    const [currentSlide, setCurrentSlide] = useState(3);

    const newsItems = [
        {
            image: '/images/news-1.png',
            date: 'Jan 15, 2026',
            title: 'Tech Innovation Summit 2026',
            description: 'Join us at the biggest tech conference of the year'
        },
        {
            image: '/images/news-1.png',
            date: 'Jan 10, 2026',
            title: 'New Product Launch',
            description: 'Introducing our latest digital solutions platform'
        },
        {
            image: '/images/news-1.png',
            date: 'Jan 5, 2026',
            title: 'Industry Recognition',
            description: 'Awarded Best Digital Agency of the Year'
        },
        {
            image: '/images/news-1.png',
            date: 'Dec 28, 2025',
            title: 'Global Partnership',
            description: 'Expanding our services to new international markets'
        },
        {
            image: '/images/news-1.png',
            date: 'Dec 15, 2025',
            title: 'Year End Review',
            description: 'Celebrating our milestones and success stories'
        },
        {
            image: '/images/news-1.png',
            date: 'Dec 01, 2025',
            title: 'Design Trends 2026',
            description: 'What to expect in the coming year of web design'
        }
    ];

    // Auto-slide functionality (Left to Right Direction)
    useEffect(() => {
        const timer = setInterval(() => {
            // Decreasing index moves cards to the RIGHT.
            setCurrentSlide((prev) => (prev <= 0 ? 3 : prev - 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    // State for responsive slide width
    const [slideConfig, setSlideConfig] = useState({ width: 40, offset: 20 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlideConfig({ width: 100, offset: 0 });
            } else if (window.innerWidth <= 992) {
                setSlideConfig({ width: 50, offset: 0 });
            } else {
                setSlideConfig({ width: 40, offset: 20 });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const transformValue = -(currentSlide * slideConfig.width + slideConfig.offset);

    return (
        <section className="news section" id="news">
            <div className="container">
                <div className="news-content-wrapper">
                    {/* Carousel on Left */}
                    <div className="news-carousel-container">
                        <div className="news-track-wrapper">
                            <div
                                className="news-track"
                                style={{ transform: `translateX(${transformValue}%)` }}
                            >
                                {newsItems.map((item, index) => (
                                    <div key={index} className="news-slide">
                                        <div className="news-card">
                                            <div className="news-image">
                                                <img src={item.image} alt={item.title} />
                                                <div className="news-overlay">
                                                    <button className="btn btn-primary">Read More</button>
                                                </div>
                                            </div>
                                            <div className="news-content">
                                                <span className="news-date">{item.date}</span>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="carousel-indicators">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Title on Right */}
                    <div className="news-text">
                        <h2 className="display-title">
                            <span className="display-small">Latest</span>
                            <span className="display-outline">NEWS</span>
                            <span className="display-gradient">& EVENTS</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
