import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/images/hero-team.png',
            alt: 'Professional IT Team'
        },
        {
            image: '/images/news-1.png',
            alt: 'Tech Innovation'
        },
        {
            image: '/images/hero-team.png', // Reusing for demo
            alt: 'Creative Workspace'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge animate-fadeInUp">
                            <span className="badge-dot"></span>
                            WEB DEVELOPMENT
                        </div>

                        <h1 className="display-title hero-display-title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            <span className="display-small">We Build</span>
                            <span className="display-outline">DIGITAL</span>
                            <span className="display-gradient">BRANDS</span>
                        </h1>

                        <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Transform your digital presence with cutting-edge web solutions.
                            We create stunning, high-performance websites that drive results
                            and elevate your brand to new heights.
                        </p>

                        <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <button className="btn btn-primary">Start Your Project</button>
                            <button className="btn btn-outline">View Our Work</button>
                        </div>
                    </div>

                    <div className="hero-slider-container animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <div className="hero-slider">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <div className="hero-image-wrapper">
                                        <img src={slide.image} alt={slide.alt} />
                                        <div className="hero-image-glow"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="slider-navigation">
                            <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="19" x2="12" y2="5"></line>
                                    <polyline points="5 12 12 5 19 12"></polyline>
                                </svg>
                            </button>
                            <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next slide">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-indicator">
                    <span></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
