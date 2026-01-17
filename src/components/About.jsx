import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="display-title">
                            <span className="display-small">All In One</span>
                            <span className="display-outline">DIGITAL</span>
                            <span className="display-gradient">MARKETING</span>
                        </h2>

                        <div className="about-description">
                            <p>
                                We are a full-service digital agency specializing in creating
                                exceptional digital experiences that drive business growth. Our
                                team of experts combines creativity with cutting-edge technology
                                to deliver solutions that exceed expectations.
                            </p>

                            <p>
                                From web design and development to digital marketing and branding,
                                we provide comprehensive services tailored to your unique needs.
                                Our data-driven approach ensures measurable results and sustainable
                                success for your business.
                            </p>

                            <p>
                                Partner with us to transform your digital presence and unlock your
                                brand's full potential in the digital landscape.
                            </p>
                        </div>

                        <button className="btn btn-primary">Learn More</button>
                    </div>

                    <div className="about-features">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h4>Web Design</h4>
                            <p>Beautiful, responsive designs that captivate your audience</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            </div>
                            <h4>Mobile Apps</h4>
                            <p>Native and cross-platform mobile solutions</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 12h20M2 12l5-5m0 10l-5-5M22 12l-5-5m0 10l5-5" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h4>Digital Marketing</h4>
                            <p>Data-driven strategies that deliver results</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                                </svg>
                            </div>
                            <h4>Cloud Services</h4>
                            <p>Scalable cloud infrastructure and solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
