import './Services.css';

const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="services-content-wrapper">
                    {/* Cards on Left */}
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Responsive Design</h3>
                            <p className="service-desc">Pixel-perfect designs that look stunning on all devices and screen sizes</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Performance</h3>
                            <p className="service-desc">Lightning-fast websites optimized for speed and user experience</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>SEO Optimized</h3>
                            <p className="service-desc">Built with best practices to rank higher in search engine results</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>24/7 Support</h3>
                            <p className="service-desc">Round-the-clock technical support and maintenance services</p>
                        </div>
                    </div>

                    {/* Title on Right */}
                    <div className="services-text">
                        <h2 className="display-title service-title-custom">
                            <span className="display-small">Premium</span>
                            <span className="display-outline">WEB DESIGN</span>
                            <span className="display-gradient">& DEVELOPMENT</span>
                        </h2>
                        <p className="section-subtitle services-subtitle">
                            We craft exceptional digital experiences that combine stunning design
                            with powerful functionality to help your business thrive online.
                        </p>
                        <div className="services-cta" style={{ marginTop: '2rem' }}>
                            <button className="btn btn-primary">View All Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
