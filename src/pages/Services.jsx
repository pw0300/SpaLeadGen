
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
    {
        category: "Traditional Thai",
        items: [
            { name: "Royal Thai Massage", duration: "60/90/120 min", price: "1,500 / 2,100 / 2,600 THB", desc: "Ancient healing art using acupressure and stretching." },
            { name: "Thai Herbal Compress", duration: "90/120 min", price: "2,400 / 2,900 THB", desc: "Warm herbal pouches pressed on muscles to relieve pain and inflammation." },
            { name: "Foot Reflexology", duration: "60 min", price: "1,200 THB", desc: "Stimulating reflex points on the feet to improve internal organ function." }
        ]
    },
    {
        category: "Aromatherapy & Oil",
        items: [
            { name: "Aromatherapy Oil Massage", duration: "60/90 min", price: "2,200 / 2,800 THB", desc: "Gentle Swedish strokes with organic essential oils." },
            { name: "Deep Tissue Sport", duration: "60/90 min", price: "2,400 / 3,000 THB", desc: "Strong pressure targeting deep muscle layers." },
            { name: "Hot Stone Therapy", duration: "90 min", price: "3,200 THB", desc: "Smooth heated stones placed on the body to melt away tension." }
        ]
    },
    {
        category: "Facial Treatments",
        items: [
            { name: "Organic Radiance Facial", duration: "60 min", price: "2,800 THB", desc: "Restores glow using all-natural ingredients." },
            { name: "Anti-Aging Gold Facial", duration: "90 min", price: "3,500 THB", desc: "Luxurious treatment with collagen and 24k gold flakes." }
        ]
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <header className="page-header services-header">
                <div className="container">
                    <h1 className="fade-in-up">Spa Menu</h1>
                    <p className="fade-in-up delay-1">Restore balance to your body and mind.</p>
                </div>
            </header>

            <div className="container section">
                {servicesData.map((cat, idx) => (
                    <div key={idx} className="menu-category">
                        <h2 className="category-title">{cat.category}</h2>
                        <div className="menu-items">
                            {cat.items.map((item, i) => (
                                <div key={i} className="menu-item">
                                    <div className="menu-item-header">
                                        <h3 className="menu-item-name">{item.name}</h3>
                                        <div className="menu-item-dots"></div>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                    <div className="menu-item-meta">
                                        <span className="duration">{item.duration}</span>
                                        <Link to="/contact" className="btn-book-sm">Book</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="cta-banner section container text-center">
                <h2>Not sure what to choose?</h2>
                <p>Our therapists can recommend the perfect treatment for you upon arrival.</p>
                <Link to="/contact" className="btn btn-primary mt-sm">Schedule Consultation</Link>
            </div>
        </div>
    );
};

export default Services;
