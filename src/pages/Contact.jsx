
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: 'Royal Thai Massage',
        date: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate Submission
        console.log('Lead Captured:', formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <header className="page-header contact-header">
                <div className="container">
                    <h1 className="fade-in-up">Book Your Sanctuary</h1>
                    <p className="fade-in-up delay-1">Begin your journey to relaxation.</p>
                </div>
            </header>

            <div className="container section contact-layout">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p className="mb-md">We look forward to welcoming you. Please book in advance to ensure availability.</p>

                    <div className="info-item">
                        <MapPin className="text-gold" />
                        <div>
                            <h3>Location</h3>
                            <p>123 Sukhumvit Road Soi 55<br />Thong Lo, Bangkok 10110</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Clock className="text-gold" />
                        <div>
                            <h3>Opening Hours</h3>
                            <p>Daily: 10:00 AM - 10:00 PM<br />Last booking: 9:00 PM</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="text-gold" />
                        <div>
                            <h3>Phone</h3>
                            <p>+66 2 123 4567</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Mail className="text-gold" />
                        <div>
                            <h3>Email</h3>
                            <p>reservations@siamserenity.com</p>
                        </div>
                    </div>
                </div>

                {/* Lead Gen Form */}
                <div className="contact-form-wrapper">
                    {submitted ? (
                        <div className="success-message">
                            <h3 className="text-gold">Request Received!</h3>
                            <p>Thank you, {formData.name}. We have received your booking request.</p>
                            <p>Our concierge will contact you shortly via WhatsApp/Email to confirm your appointment.</p>
                            <button className="btn btn-secondary mt-md" onClick={() => setSubmitted(false)}>Book Another</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="form-title">Request an Appointment</h3>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone / WhatsApp</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+66..." />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Preferred Treatment</label>
                                    <select name="treatment" value={formData.treatment} onChange={handleChange}>
                                        <option>Royal Thai Massage</option>
                                        <option>Aromatherapy Oil</option>
                                        <option>Deep Tissue Sport</option>
                                        <option>Facial Treatment</option>
                                        <option>Spa Package</option>
                                        <option>Other / Not Sure</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Preferred Date</label>
                                    <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Any specific needs or preferences?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width">Send Request</button>
                            <p className="form-note">No payment needed now. Pay at the spa.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
