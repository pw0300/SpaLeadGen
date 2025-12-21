
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Leaf, Award, ArrowRight, Video } from 'lucide-react';
import './Home.css';

// Images
import heroBg from '../assets/images/makkha_reception_bright_1766344322184.png';
import thaiMassageImg from '../assets/images/thai_massage_1766339318229.png';
import aromaImg from '../assets/images/aroma_oil_1766339333970.png';
import facialImg from '../assets/images/facial_treatment_1766339350958.png';
import mangoImg from '../assets/images/makkha_treatment_mango_1766344337499.png';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Makkha Health & Spa | Oasis of Calm in Bangkok</title>
                <meta name="description" content="Experience the zenith of relaxation at Makkha Health & Spa. Traditional Thai massage, Mango Sticky Rice treats, and a modern Zen atmosphere. Book now." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2)), url(${heroBg})` }}>
                <div className="container hero-content text-dark">
                    <h1 className="hero-title fade-in-up">Oasis of Calm</h1>
                    <p className="hero-subtitle fade-in-up delay-1">Experience traditional Thai healing in our modern Zen sanctuary.</p>
                    <div className="hero-cta fade-in-up delay-2">
                        <Link to="/contact" className="btn btn-primary btn-lg">Book Appointment</Link>
                        <Link to="/services" className="btn btn-secondary btn-lg">View Menu</Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="trust-bar bg-surface">
                <div className="container trust-grid">
                    <div className="trust-item">
                        <ShieldCheck size={24} className="trust-icon" />
                        <span>SHA+ Certified</span>
                    </div>
                    <div className="trust-item">
                        <Award size={24} className="trust-icon" />
                        <span>TripAdvisor Excellence</span>
                    </div>
                    <div className="trust-item">
                        <Leaf size={24} className="trust-icon" />
                        <span>100% Natural Oils</span>
                    </div>
                    <div className="trust-item">
                        <Star size={24} className="trust-icon" />
                        <span>4.9/5 Rating</span>
                    </div>
                </div>
            </section>

            {/* Introduction / Welcome */}
            <section className="section container text-center fade-in-up">
                <h2 className="section-title">Welcome to Makkha</h2>
                <p className="section-subtitle">
                    Enter a world where time stands still. At Makkha Health & Spa, we blend ancient wisdom with modern comfort.
                    Our minimalist design, infused with the scent of natural essential oils, calms the mind instantly.
                </p>
            </section>

            {/* Services Preview */}
            <section className="section services-preview bg-surface">
                <div className="container">
                    <h2 className="section-title text-center">Top Treatments</h2>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-img">
                                <img src={thaiMassageImg} alt="Traditional Thai Massage" />
                            </div>
                            <div className="service-info">
                                <h3>Thai Massage</h3>
                                <p>Authentic stretching and acupressure to realign the body.</p>
                                <div className="service-meta">
                                    <span className="price">from 850 THB</span>
                                    <Link to="/services" className="service-link">View <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-img">
                                <img src={aromaImg} alt="Aromatherapy" />
                            </div>
                            <div className="service-info">
                                <h3>Aromatherapy Oil</h3>
                                <p>Deep relaxation with our signature natural essential oil blends.</p>
                                <div className="service-meta">
                                    <span className="price">from 1,390 THB</span>
                                    <Link to="/services" className="service-link">View <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-img">
                                <img src={facialImg} alt="Makkha Facial" />
                            </div>
                            <div className="service-info">
                                <h3>Makkha Facial</h3>
                                <p>Rejuvenate your skin with our gentle, organic facial therapies.</p>
                                <div className="service-meta">
                                    <span className="price">Inquire for price</span>
                                    <Link to="/services" className="service-link">View <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-lg">
                        <Link to="/services" className="btn btn-secondary">Full Menu</Link>
                    </div>
                </div>
            </section>

            {/* Signature Feature: Mango Sticky Rice */}
            <section className="section container signature-feature">
                <div className="feature-img">
                    <img src={mangoImg} alt="Mango Sticky Rice Treat" />
                </div>
                <div className="feature-text">
                    <h2>The Makkha Touch</h2>
                    <p>Every treatment concludes with our signature complimentary Mango Sticky Rice. A sweet, refreshing end to your journey of relaxation.</p>
                    <ul className="feature-list">
                        <li><Leaf size={16} /> Fresh seasonal mango</li>
                        <li><Leaf size={16} /> Warm coconut sticky rice</li>
                        <li><Leaf size={16} /> Served with hot herbal tea</li>
                    </ul>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section bg-surface">
                <div className="container">
                    <h2 className="section-title text-center">What Our Guests Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#8C7853" color="#8C7853" />)}
                            </div>
                            <p className="testimonial-text">"An absolute oasis in the middle of Bangkok. The minimalist design is so calming, and the massage was perfection."</p>
                            <p className="testimonial-author">- Jessica M., Australia</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#8C7853" color="#8C7853" />)}
                            </div>
                            <p className="testimonial-text">"Loved the free shuttle service to the BTS. The mango sticky rice at the end was the cherry on top!"</p>
                            <p className="testimonial-author">- David K., USA</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#8C7853" color="#8C7853" />)}
                            </div>
                            <p className="testimonial-text">"Professional, clean, and incredibly beautiful. I visited the Sukhumvit 33 branch and it was stunning."</p>
                            <p className="testimonial-author">- Li Wei, China</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
