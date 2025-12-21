
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        branch: 'Sukhumvit 33',
        treatment: 'Thai Massage',
        date: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lead Captured:', formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <header className="page-header contact-header">
                <div className="container">
                    <h1 className="fade-in-up">Reserve Your Moment</h1>
                    <p className="fade-in-up delay-1">Choose your preferred sanctuary in Bangkok.</p>
                </div>
            </header>

            <div className="container section contact-layout">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Our Branches</h2>
                    <p className="mb-md">We have multiple convenient locations in the heart of Bangkok.</p>

                    <div className="info-item">
                        <MapPin className="text-gold" />
                        <div>
                            <h3>Makkha Heritage Asoke</h3>
                            <p>348/1 Sukhumvit Road (near BTS Asok)</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MapPin className="text-gold" />
                        <div>
                            <h3>Makkha Sukhumvit 33</h3>
                            <p>7/7 Sukhumvit 33 Alley (near Phrom Phong)</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MapPin className="text-gold" />
                        <div>
                            <h3>Makkha Sukhumvit 24</h3>
                            <p>43/1 Soi Sukhumvit 24</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Clock className="text-gold" />
                        <div>
                            <h3>Opening Hours</h3>
                            <p>Daily: 10:00 AM - Midnight<br />Last booking: 11:00 PM</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="text-gold" />
                        <div>
                            <h3>Contact Us</h3>
                            <p>+66 2 123 4567<br />reservation@makkha.com</p>
                        </div>
                    </div>
                </div>

                {/* Lead Gen Form */}
                <div className="contact-form-wrapper">
                    {submitted ? (
                        <div className="success-message">
                            <h3 className="text-gold">Request Received!</h3>
                            <p>Thank you, {formData.name}. We have received your booking request for the <strong>{formData.branch}</strong> branch.</p>
                            <p>Our concierge will contact you shortly via WhatsApp/Email to confirm your appointment.</p>
                            <button className="btn btn-secondary mt-md" onClick={() => setSubmitted(false)}>Book Another</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="form-title">Request an Appointment</h3>

                            <div className="form-group">
                                <label>Preferred Branch</label>
                                <select name="branch" value={formData.branch} onChange={handleChange}>
                                    <option>Sukhumvit 33</option>
                                    <option>Sukhumvit 24</option>
                                    <option>Heritage Asoke</option>
                                    <option>BTS Asoke</option>
                                </select>
                            </div>

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
                                        <option>Thai Massage</option>
                                        <option>Aroma Oil Massage</option>
                                        <option>Indian Head Massage</option>
                                        <option>4-Hand Massage</option>
                                        <option>Hot Stone Therapy</option>
                                        <option>Spa Package</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Preferred Date</label>
                                    <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Any specific needs?"></textarea>
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
