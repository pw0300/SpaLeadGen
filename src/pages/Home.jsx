import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Leaf, Award, ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';

// Images (using the generated filenames)
import heroBg from '../assets/images/spa_hero_bg_1766339301024.png';
import thaiMassageImg from '../assets/images/thai_massage_1766339318229.png';
import aromaImg from '../assets/images/aroma_oil_1766339333970.png';
import facialImg from '../assets/images/facial_treatment_1766339350958.png';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Siam Serenity Spa | Best Luxury Spa in Bangkok</title>
                <meta name="description" content="Experience ultimate relaxation at Siam Serenity, Bangkok's premier luxury spa. Traditional Thai massage, aromatherapy, and organic facials. Book your sanctuary today." />
            </Helmet>
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroBg})` }}>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in-up">Sanctuary in Bangkok</h1>
                    <p className="hero-subtitle fade-in-up delay-1">Experience the ancient art of Thai healing in a haven of serenity.</p>
                    <div className="hero-cta fade-in-up delay-2">
                        <Link to="/contact" className="btn btn-primary btn-lg">Book Your Retreat</Link>
                        <Link to="/services" className="btn btn-gold btn-lg">View Menu</Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="trust-bar">
                <div className="container trust-grid">
                    <div className="trust-item">
                        <ShieldCheck size={28} className="trust-icon" />
                        <span>SHA+ Certified Safety</span>
                    </div>
                    <div className="trust-item">
                        <Award size={28} className="trust-icon" />
                        <span>Voted Best Luxury Spa 2024</span>
                    </div>
                    <div className="trust-item">
                        <Leaf size={28} className="trust-icon" />
                        <span>100% Organic Products</span>
                    </div>
                    <div className="trust-item">
                        <Star size={28} className="trust-icon" />
                        <span>4.9/5 Average Rating</span>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <h2 className="section-title text-center">Our Signature Treatments</h2>
                    <p className="section-subtitle text-center">Curated therapies to restore your body and mind.</p>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-img">
                                <img src={thaiMassageImg} alt="Traditional Thai Massage" />
                            </div>
                            <div className="service-info">
                                <h3>Royal Thai Massage</h3>
                                <p>A combination of acupressure and assisted yoga postures to relieve muscle tension.</p>
                                <div className="service-meta">
                                    <span className="price">from 1,500 THB</span>
                                    <Link to="/services" className="service-link">Details <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-img">
                                <img src={aromaImg} alt="Aromatherapy" />
                            </div>
                            <div className="service-info">
                                <h3>Aromatherapy Oil</h3>
                                <p>Relaxing massage using our signature blend of essential oils to calm the nervous system.</p>
                                <div className="service-meta">
                                    <span className="price">from 2,200 THB</span>
                                    <Link to="/services" className="service-link">Details <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-img">
                                <img src={facialImg} alt="Facial Treatment" />
                            </div>
                            <div className="service-info">
                                <h3>Radiance Facial</h3>
                                <p>Deep cleansing and nourishing treatment for a natural, healthy glow.</p>
                                <div className="service-meta">
                                    <span className="price">from 2,800 THB</span>
                                    <Link to="/services" className="service-link">Details <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-lg">
                        <Link to="/services" className="btn btn-secondary">View All Treatments</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials (Social Proof) */}
            <section className="section testimonials-section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Guest Experiences</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
                            </div>
                            <p className="testimonial-text">"The best massage I've had in Bangkok. The atmosphere is incredibly peaceful, and the therapists are true professionals."</p>
                            <p className="testimonial-author">- Sarah Jenkins, UK</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
                            </div>
                            <p className="testimonial-text">"A hidden gem. The attention to detail from the moment you walk in is unmatched. Highly recommend the Aroma treatment."</p>
                            <p className="testimonial-author">- Michael Chen, Singapore</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
                            </div>
                            <p className="testimonial-text">"Luxurious experience without the hotel price tag. The organic oils smell divine. Will definitely return."</p>
                            <p className="testimonial-author">- Emily Watson, Australia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Magnet / CTA Section */}
            <section className="section cta-section">
                <div className="container cta-container">
                    <div className="cta-text">
                        <h2>First Time Visitor?</h2>
                        <p>Book online today and receive a complimentary 30-minute herbal compress add-on with any 90-minute treatment.</p>
                        <ul className="cta-benefits">
                            <li><CheckCircle size={20} /> Instant Confirmation</li>
                            <li><CheckCircle size={20} /> No Pre-payment Required</li>
                            <li><CheckCircle size={20} /> Free Cancellation (24h)</li>
                        </ul>
                    </div>
                    <div className="cta-action">
                        <Link to="/contact" className="btn btn-gold btn-xl">Claim Offer & Book</Link>
                        <p className="cta-subtext">*Limited availability for this month</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
