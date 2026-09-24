import {
    FiUser,
    FiBriefcase,
    FiShield,
    FiArrowRight
} from "react-icons/fi";

function TrustSection() {
    return (
        <section className="trust-section">

            <div className="trust-content">

                <div className="trust-text">
                    <span className="section-label">
                        Built for students
                    </span>

                    <h2>
                        Build Your Career.
                        <span> Earn With Your Skills.</span>
                    </h2>

                    <p>
                        SkillBridge connects students with real clients,
                        meaningful projects, and opportunities to grow.
                    </p>

                    <div className="trust-buttons">
                        <button className="trust-primary">
                            Join SkillBridge
                            <FiArrowRight />
                        </button>

                        <button className="trust-secondary">
                            Explore Talent
                        </button>
                    </div>
                </div>

                <div className="trust-cards">

                    <div className="trust-card">
                        <div className="trust-icon">
                            <FiUser />
                        </div>

                        <div>
                            <strong>Student Focused</strong>
                            <p>
                                Opportunities designed around student talent.
                            </p>
                        </div>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">
                            <FiBriefcase />
                        </div>

                        <div>
                            <strong>Real Opportunities</strong>
                            <p>
                                Work with clients and build real experience.
                            </p>
                        </div>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">
                            <FiShield />
                        </div>

                        <div>
                            <strong>Safe & Trusted</strong>
                            <p>
                                Profiles and transactions are built with trust.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default TrustSection;