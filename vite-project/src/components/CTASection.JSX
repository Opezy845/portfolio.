import { FiArrowRight, FiCheckCircle, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../App.css";

function CTASection() {
    return (
        <section className="cta-section">

            <div className="cta-glow cta-glow-one"></div>
            <div className="cta-glow cta-glow-two"></div>

            <div className="cta-content">

                <div className="cta-icon">
                    <FiZap />
                </div>

                <span className="cta-label">
                    Start your journey
                </span>

                <h2>
                    Your Skills Can Take
                    <span>You Further.</span>
                </h2>

                <p>
                    Join thousands of students building skills,
                    earning money, and creating their future.
                </p>

                <div className="cta-buttons">

                    <Link
                        to="/register"
                        className="cta-primary"
                    >
                        Create Free Account
                        <FiArrowRight />
                    </Link>

                    <Link
                        to="/browse-gigs"
                        className="cta-secondary"
                    >
                        <FiCheckCircle />
                        Explore Talent
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default CTASection;