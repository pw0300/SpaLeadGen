
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';


const servicesData = [
    {
        category: "Traditional Massages",
        items: [
            { name: "Thai Massage", duration: "60/120 min", price: "850 / 1,500 THB", desc: "Authentic healing art using acupressure and stretching techniques to realign the body." },
            { name: "Thai Herbal Ball Massage", duration: "60/90 min", price: "1,390 / 1,900 THB", desc: "Traditional Thai massage followed by warm herbal compresses to relieve muscle tension." },
            { name: "Indian Head Massage", duration: "60 min", price: "1,200 THB", desc: "Relaxing head, neck, and shoulder massage to relieve stress and improve sleep." }
        ]
    },
    {
        category: "Aromatic & Oil Treatments",
        items: [
            { name: "Aroma Oil Massage", duration: "60/90 min", price: "1,390 / 2,000 THB", desc: "Gentle massage using 100% natural essential oils extracted from plants and flowers." },
            { name: "Hot Stone Massage", duration: "90 min", price: "2,500 THB", desc: "Smooth heated stones placed on key energy points to melt away deep-seated tension." },
            { name: "4-Hand Aroma Oil Massage", duration: "60 min", price: "2,500 THB", desc: "The ultimate indulgence with two therapists working in synchronized harmony." }
        ]
    },
    {
        category: "Body & Facial",
        items: [
            { name: "Body Salt Scrub", duration: "60 min", price: "1,200 THB", desc: "Exfoliating treatment using natural sea salt to remove dead skin cells." },
            { name: "Office Syndrome Relief", duration: "60/90 min", price: "1,000 / 1,400 THB", desc: "Targeted massage for back, neck, and shoulders to relieve office-related strain." }
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
