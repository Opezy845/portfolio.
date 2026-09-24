import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend
} from "react-icons/fi";

function ContactSection() {
    return (
        <section className="contact-section">

            <div className="contact-header">
                <span className="section-label">
                    Get in touch
                </span>

                <h2>Let's Build Something Together</h2>

                <p>
                    Have a question, need help, or want to work with us?
                    We'd love to hear from you.
                </p>
            </div>

            <div className="contact-wrapper">

                <div className="contact-info">

                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <FiMail />
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>hello@skillbridge.ng</strong>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <FiPhone />
                        </div>

                        <div>
                            <span>Phone</span>
                            <strong>+234 800 000 0000</strong>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <FiMapPin />
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>Nigeria</strong>
                        </div>
                    </div>

                </div>

                <form className="contact-form">

                    <div className="contact-input-row">
                        <div className="contact-input-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="contact-input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div className="contact-input-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            placeholder="How can we help?"
                        />
                    </div>

                    <div className="contact-input-group">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="contact-submit"
                    >
                        Send Message
                        <FiSend />
                    </button>

                </form>

            </div>

        </section>
    );
}

export default ContactSection;