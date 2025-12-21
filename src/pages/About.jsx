
import React from 'react';
import './About.css';
import massageImg from '../assets/images/thai_massage_1766339318229.png';
import facialImg from '../assets/images/facial_treatment_1766339350958.png';

const About = () => {
    return (
        <div className="about-page">
            <header className="page-header about-header">
                <div className="container">
                    <h1 className="fade-in-up">Our Story</h1>
                    <p className="fade-in-up delay-1">Where ancient tradition meets modern luxury.</p>
                </div>
            </header>

            <div className="container section">
                <div className="about-grid">

                    <div className="about-content">
                        <h2 className="section-title">A Sanctuary in the City</h2>
                        <p>Makkha Health & Spa is an oasis of calm amidst the chaotic energy of Bangkok.</p>
                        <p>Our philosophy is rooted in the ancient Thai concept of "Sabai" (comfort and well-being). We believe that true relaxation is not just a luxury, but a necessity for a balanced life.</p>
                        <p>Every element of our spa, from the sustainable white wood architecture to the hand-picked organic herbs used in our compresses, is curated to transport you to a state of deep peace.</p>
                    </div>
                    <div className="about-image">
                        <img src={massageImg} alt="Interior of Siam Serenity Spa" />
                    </div>
                </div>
            </div>


            <div className="container section about-grid reverse">
                <div className="about-content">
                    <h2 className="section-title">Our Therapists</h2>
                    <p>We believe that the heart of a great spa lies in the hands of its therapists.</p>
                    <p>All our practitioners are certified by the Wat Po Traditional Medical School and have a minimum of 5 years of experience. They undergo rigorous training in our signature "Makkha Flow," which blends therapeutic precision with intuitive care.</p>
                    <p>We treat our staff like family, ensuring they are happy and well-rested, because we know that positive energy is transferred through touch.</p>
                </div>
                <div className="about-image">
                    <img src={facialImg} alt="Therapist performing treatment" />
                </div>
            </div>

            <div className="container section values-section text-center">
                <h2 className="section-title">Our Promise</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h3>Authenticity</h3>
                        <p>Respecting the 2,500-year-old traditions of Thai healing arts.</p>
                    </div>
                    <div className="value-item">
                        <h3>Purity</h3>
                        <p>Using only 100% organic, locally sourced oils and herbs.</p>
                    </div>
                    <div className="value-item">
                        <h3>Serenity</h3>
                        <p>Providing a strictly "quiet zone" environment for complete mental reset.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
