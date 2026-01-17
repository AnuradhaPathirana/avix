import './Awards.css';

const Awards = () => {
    // SVG Components for each Award (Brown/Bronze Theme)
    const Award2025 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="brown2025" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#CD7F32" />
                    <stop offset="50%" stopColor="#A0522D" />
                    <stop offset="100%" stopColor="#CD7F32" />
                </linearGradient>
            </defs>
            <path d="M15 10H45V20C45 30 35 40 30 40C25 40 15 30 15 20V10Z" fill="url(#brown2025)" />
            <path d="M30 40V50M20 50H40" stroke="url(#brown2025)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" cy="20" r="5" fill="#FFF" fillOpacity="0.5" />
            <path d="M10 12H15V18H10C8 18 6 16 6 15C6 14 8 12 10 12Z" fill="url(#brown2025)" />
            <path d="M50 12H45V18H50C52 18 54 16 54 15C54 14 52 12 50 12Z" fill="url(#brown2025)" />
            <text x="30" y="58" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#CD7F32">2025</text>
        </svg>
    );

    const Award2024_1 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="brown2024_1" x1="0" y1="0" x2="60" y2="60">
                    <stop offset="0%" stopColor="#8B4513" />
                    <stop offset="50%" stopColor="#CD7F32" />
                    <stop offset="100%" stopColor="#8B4513" />
                </linearGradient>
            </defs>
            <circle cx="30" cy="25" r="15" fill="none" stroke="url(#brown2024_1)" strokeWidth="3" />
            <path d="M30 10L33 22L45 22L36 30L39 42L30 35L21 42L24 30L15 22L27 22L30 10Z" fill="url(#brown2024_1)" />
            <path d="M25 40L20 55L30 50L40 55L35 40" fill="url(#brown2024_1)" opacity="0.7" />
        </svg>
    );

    const Award2024_2 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10H40L35 35H25L20 10Z" fill="#CD7F32" />
            <rect x="22" y="35" width="16" height="5" fill="#8B4513" />
            <circle cx="30" cy="20" r="6" fill="#FFF" fillOpacity="0.6" />
            <path d="M20 10L10 20L22 20" fill="#8B4513" />
            <path d="M40 10L50 20L38 20" fill="#8B4513" />
        </svg>
    );

    const Award2023_1 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="20" height="30" rx="2" fill="#CD7F32" />
            <path d="M20 15H40M20 25H40M20 35H40" stroke="#8B4513" strokeWidth="1" />
            <path d="M15 40H45V45H15V40Z" fill="#8B4513" />
            <circle cx="30" cy="25" r="5" stroke="#FFF" strokeWidth="2" />
        </svg>
    );

    const Award2023_2 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5L35 15H45L37 22L40 32L30 26L20 32L23 22L15 15H25L30 5Z" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <path d="M30 35V50" stroke="#CD7F32" strokeWidth="4" />
            <circle cx="30" cy="50" r="5" fill="#CD7F32" />
        </svg>
    );

    const Award2022 = () => (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="20" fill="none" stroke="#CD7F32" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M30 10V50M10 30H50" stroke="#CD7F32" strokeWidth="1" opacity="0.5" />
            <path d="M30 15L34 26H45L36 33L39 44L30 38L21 44L24 33L15 26H26L30 15Z" fill="#A0522D" />
        </svg>
    );

    const awards = [
        { year: '2025', title: 'Best Digital Agency', Icon: Award2025 },
        { year: '2024', title: 'Innovation Award', Icon: Award2024_1 },
        { year: '2024', title: 'Excellence in Design', Icon: Award2024_2 },
        { year: '2023', title: 'Top Web Developer', Icon: Award2023_1 },
        { year: '2023', title: 'Customer Choice', Icon: Award2023_2 },
        { year: '2022', title: 'Rising Star Award', Icon: Award2022 }
    ];

    return (
        <section className="awards section" id="awards">
            <div className="container">
                <div className="awards-content">
                    <div className="section-title">
                        <h2 className="display-title">
                            <span className="display-small">Our</span>
                            <span className="display-outline">INDUSTRY</span>
                            <span className="display-gradient">AWARDS</span>
                        </h2>
                        <p className="awards-subtitle">
                            Recognized for excellence in digital innovation and outstanding client service
                        </p>
                    </div>

                    <div className="awards-grid">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="award-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="award-icon brown-icon custom-svg-icon">
                                    <award.Icon />
                                </div>
                                <div className="award-info">
                                    <span className="award-year">{award.year}</span>
                                    <h4 className="award-title">{award.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
