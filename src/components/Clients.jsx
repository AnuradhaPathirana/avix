import './Clients.css';

const Clients = () => {
    // SVG Logo Components for "Professional" look
    const Logo1 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L10 35H30L20 20Z" fill="#00d4ff" />
            <rect x="35" y="10" width="15" height="25" rx="2" fill="#7b2cbf" />
            <path d="M60 15H70V35H60V15Z" fill="#ff006e" />
            <text x="85" y="30" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">TECH</text>
        </svg>
    );

    const Logo2 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" stroke="#00d4ff" strokeWidth="4" />
            <circle cx="35" cy="20" r="10" stroke="#7b2cbf" strokeWidth="4" />
            <text x="55" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">NEXUS</text>
        </svg>
    );

    const Logo3 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20L20 10L30 20L20 30L10 20Z" fill="#ff006e" />
            <path d="M25 20L35 10L45 20L35 30L25 20Z" fill="#00d4ff" opacity="0.7" />
            <text x="55" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">VERTEX</text>
        </svg>
    );

    const Logo4 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30C10 30 15 10 30 10C45 10 50 30 50 30" stroke="#7b2cbf" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" cy="20" r="4" fill="#00d4ff" />
            <text x="60" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">WAVE</text>
        </svg>
    );

    const Logo5 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="20" height="20" fill="#00d4ff" />
            <rect x="20" y="10" width="20" height="20" fill="#ff006e" style={{ mixBlendMode: 'multiply' }} />
            <text x="55" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">CUBE</text>
        </svg>
    );

    const Logo6 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30L25 10L40 30H10Z" stroke="#7b2cbf" strokeWidth="3" />
            <path d="M20 30L35 10L50 30H20Z" stroke="#00d4ff" strokeWidth="3" />
            <text x="60" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">PEAK</text>
        </svg>
    );

    const Logo7 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="20" r="12" stroke="#ff006e" strokeWidth="3" strokeDasharray="4 2" />
            <circle cx="25" cy="20" r="6" fill="#00d4ff" />
            <text x="50" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">ORBIT</text>
        </svg>
    );

    const Logo8 = () => (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H50" stroke="#7b2cbf" strokeWidth="6" />
            <path d="M15 20H45" stroke="#00d4ff" strokeWidth="2" />
            <text x="60" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">LINEA</text>
        </svg>
    );

    // Array of logo components to be reused
    const logos = [
        { id: 1, Component: Logo1 },
        { id: 2, Component: Logo2 },
        { id: 3, Component: Logo3 },
        { id: 4, Component: Logo4 },
        { id: 5, Component: Logo5 },
        { id: 6, Component: Logo6 },
        { id: 7, Component: Logo7 },
        { id: 8, Component: Logo8 },
    ];

    // Repeat logos to fill the tracks
    const row1 = [...logos, ...logos]; // 16 items
    const row2 = [...logos, ...logos].reverse(); // 16 items reversed

    return (
        <section className="clients section" id="clients">
            <div className="container">
                {/* Header Row */}
                <div className="clients-header">
                    <div className="clients-text">
                        <h2 className="display-title">
                            <span className="display-small">Our</span>
                            <span className="display-outline">VALUED</span>
                            <span className="display-gradient">CLIENTS</span>
                        </h2>
                        <p className="clients-subtitle">
                            Trusted by leading brands worldwide to deliver exceptional digital solutions.
                            We build lasting partnerships that drive innovation and growth.
                        </p>
                    </div>

                    <div className="clients-header-image">
                        <div className="header-image-wrapper">
                            <img src="/images/team.png" alt="Professional Partnership" />
                        </div>
                    </div>
                </div>

                {/* Animated Carousel Rows */}
                <div className="clients-carousel-container">
                    {/* Row 1 - Moving Right */}
                    <div className="carousel-track-wrapper">
                        <div className="carousel-track move-right">
                            {/* Duplicate for seamless loop (3 sets) */}
                            {[...row1, ...row1, ...row1].map((item, index) => (
                                <div key={`r1-${index}`} className="client-logo-card">
                                    <div className="logo-svg-wrapper">
                                        <item.Component />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Moving Left */}
                    <div className="carousel-track-wrapper">
                        <div className="carousel-track move-left">
                            {/* Duplicate for seamless loop (3 sets) */}
                            {[...row2, ...row2, ...row2].map((item, index) => (
                                <div key={`r2-${index}`} className="client-logo-card">
                                    <div className="logo-svg-wrapper">
                                        <item.Component />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
