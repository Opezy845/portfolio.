import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./About.css";
function About() {
    return (
        <section className="about-section">
            <div className="about-container">

                <div className="about-content">
                    <span className="section-label">ABOUT SKILLBRIDGE</span>

                    <h2>
                        Helping students turn their skills into
                        <span> real opportunities.</span>
                    </h2>

                    <p>
                        SkillBridge is a student-focused freelance marketplace
                        built to connect talented students with clients looking
                        for quality services.
                    </p>

                    <p>
                        Whether you're a designer, developer, writer, marketer,
                        or creative professional, SkillBridge gives you a place
                        to showcase your skills, find opportunities, and build
                        real-world experience.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <FiCheckCircle />
                            <span>Built for student talent</span>
                        </div>

                        <div className="about-feature">
                            <FiCheckCircle />
                            <span>Find real freelance opportunities</span>
                        </div>

                        <div className="about-feature">
                            <FiCheckCircle />
                            <span>Build your professional portfolio</span>
                        </div>

                        <div className="about-feature">
                            <FiCheckCircle />
                            <span>AI-powered tools for better results</span>
                        </div>
                    </div>

                    <Link to="/find-work" className="about-button">
                        Explore Opportunities
                        <FiArrowRight />
                    </Link>
                </div>

                <div className="about-visual">
                    <div className="about-card main-card">
                        <div className="about-card-icon">
                            🎓
                        </div>

                        <h3>Student Talent</h3>

                        <p>
                            Discover talented students ready to bring ideas
                            and projects to life.
                        </p>
                    </div>

                    <div className="about-card small-card top-card">
                        <strong>100%</strong>
                        <span>Student Focused</span>
                    </div>

                    <div className="about-card small-card bottom-card">
                        <strong>AI</strong>
                        <span>Powered Tools</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;