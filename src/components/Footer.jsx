
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>Makkha Health & Spa</h3>
                    <p>The Oasis of Calm in the heart of Bangkok. Experience our signature touch and 100% natural products.</p>
                </div>

                <div className="footer-col">
                    <h3>Locations</h3>
                    <ul>
                        <li><MapPin size={16} /> Heritage Asoke (BTS Asok)</li>
                        <li><MapPin size={16} /> Sukhumvit 33 (Phrom Phong)</li>
                        <li><MapPin size={16} /> Sukhumvit 24</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/services">Menu & Prices</a></li>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/contact">Book Now</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><Instagram /></a>
                        <a href="#"><Facebook /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Makkha Health & Spa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
