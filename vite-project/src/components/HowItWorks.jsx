import {
    FiUserPlus,
    FiBriefcase,
    FiMessageCircle,
    FiCheckCircle,
    FiArrowRight
} from "react-icons/fi";

const steps = [
    {
        number: "01",
        icon: <FiUserPlus />,
        title: "Create Account",
        description: "Sign up as a freelancer or client and build your profile."
    },
    {
        number: "02",
        icon: <FiBriefcase />,
        title: "Post or Find Gigs",
        description: "Showcase your skills or discover talented students."
    },
    {
        number: "03",
        icon: <FiMessageCircle />,
        title: "Connect & Hire",
        description: "Chat, agree on the details, and start working together."
    },
    {
        number: "04",
        icon: <FiCheckCircle />,
        title: "Get Paid Securely",
        description: "Complete the project and receive your payment safely."
    }
];

function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="how-header">
                <div>
                    <span className="section-label">
                        Simple & secure
                    </span>

                    <h2>How It Works</h2>

                    <p>
                        From finding the right talent to getting paid,
                        SkillBridge makes freelancing simple for students.
                    </p>
                </div>

                <button className="how-link">
                    Learn more
                    <FiArrowRight />
                </button>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step-wrapper" key={step.number}>

                        <div className="step-card">

                            <div className="step-top">
                                <span className="step-number">
                                    {step.number}
                                </span>

                                <div className="step-icon">
                                    {step.icon}
                                </div>
                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                        {index < steps.length - 1 && (
                            <div className="step-line"></div>
                        )}

                    </div>
                ))}
            </div>

        </section>
    );
}

export default HowItWorks;