
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>Siam Serenity</h3>
                    <p>Your sanctuary in the heart of Bangkok. Experience the ancient art of Thai healing in a modern, luxurious setting.</p>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <ul>
                        <li><MapPin size={16} /> 123 Sukhumvit Road, Bangkok</li>
                        <li><Phone size={16} /> +66 2 123 4567</li>
                        <li><Mail size={16} /> info@siamserenity.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Book Appointment</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
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
                <p>&copy; 2024 Siam Serenity Spa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
