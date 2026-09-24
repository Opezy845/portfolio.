import {
    FiEdit3,
    FiSearch,
    FiFileText,
    FiTrendingUp,
    FiArrowRight
} from "react-icons/fi";

import { Link } from "react-router-dom";
import "./Aifeature.css";
function AIFeatures() {
   
    const features = [
        {
            icon: <FiEdit3 />,
            title: "AI Writing Assistant",
            description:
                "Create better proposals, descriptions, profiles, and professional messages with AI."
        },
        {
            icon: <FiSearch />,
            title: "Smart Job Discovery",
            description:
                "Find freelance opportunities that match your skills and interests more easily."
        },
        {
            icon: <FiFileText />,
            title: "Proposal Generator",
            description:
                "Create clear and professional proposals that help you communicate your value."
        },
        {
            icon: <FiTrendingUp />,
            title: "Career Growth",
            description:
                "Improve your freelance profile and discover ways to grow your skills and experience."
        }
    ];

    return (
        <section className="ai-features-section">
            <div className="ai-features-container">

                <div className="ai-features-heading">
                    <span className="section-label">AI-POWERED TOOLS</span>

                    <h2>
                        Work smarter with
                        <span> AI.</span>
                    </h2>

                    <p>
                        Get useful AI-powered tools designed to help students
                        find opportunities, present their skills, and grow
                        their freelance careers.
                    </p>
                </div>

                <div className="ai-features-grid">
                    {features.map((feature, index) => (
                        <div className="ai-feature-card" key={index}>

                            <div className="ai-feature-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                            <Link to="/ai-tools" className="ai-feature-link">
                                Learn more
                                <FiArrowRight />
                            </Link>

                        </div>
                    ))}
                </div>

                <div className="ai-features-action">
                  <Link to="/ai-tools" className="ai-explore-button">
                Explore AI Tools
                <FiArrowRight />
            </Link>
                    
                </div>

            </div>
        </section>
    );
}

export default AIFeatures;