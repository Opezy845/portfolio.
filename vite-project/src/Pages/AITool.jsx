import {
    FiPenTool,
    FiCpu,
    FiUsers,
    FiArrowRight,
    FiZap,
    FiCheck
} from "react-icons/fi";

import { Link } from "react-router-dom";

import "./AiTool.css";

const aiTools = [
    {
        icon: <FiPenTool />,
        title: "AI Gig Generator",
        description:
            "Create professional gig titles, descriptions, and ideas in seconds.",
        action: "Try it now",
        tag: "For Sellers",
        path: "/ai-tools/gig-generator"
    },
    {
        icon: <FiCpu />,
        title: "Smart Job Match",
        description:
            "Discover jobs and opportunities that match your skills and experience.",
        action: "Find your match",
        tag: "For Freelancers",
        path: "/ai-tools/smart-match"
    },
    {
        icon: <FiUsers />,
        title: "Resume Analyzer",
        description:
            "Improve your CV and get personalized suggestions to stand out.",
        action: "Analyze CV",
        tag: "Career",
        path: "/ai-tools/resume-analyzer"
    }
];

function AiTools() {
    return (
        <main className="ai-page">

            {/* HERO */}
            <section className="ai-hero">

                <div className="ai-hero-content">

                    <span className="ai-label">
                        <FiZap />
                        Powered by AI
                    </span>

                    <h1>
                        Work Smarter.
                        <br />
                        <span>Grow Faster.</span>
                    </h1>

                    <p>
                        Powerful AI tools designed to help student freelancers
                        create better work, discover opportunities, and build
                        successful careers.
                    </p>

                    <a
                        href="#ai-tools"
                        className="ai-primary-btn"
                    >
                        Explore AI Tools
                        <FiArrowRight />
                    </a>

                    <div className="ai-trust">

                        <span>
                            <FiCheck />
                            Built for students
                        </span>

                        <span>
                            <FiCheck />
                            Easy to use
                        </span>

                        <span>
                            <FiCheck />
                            Save time
                        </span>

                    </div>

                </div>

                {/* AI VISUAL */}
                <div className="ai-hero-visual">

                    <div className="ai-glow"></div>

                    <div className="ai-orb">
                        <FiZap />
                    </div>

                    <div className="ai-floating-card card-one">

                        <FiPenTool />

                        <div>
                            <strong>Gig Generator</strong>
                            <small>Creating your gig...</small>
                        </div>

                    </div>

                    <div className="ai-floating-card card-two">

                        <FiCpu />

                        <div>
                            <strong>Smart Match</strong>
                            <small>3 jobs found</small>
                        </div>

                    </div>

                    <div className="ai-floating-card card-three">

                        <FiUsers />

                        <div>
                            <strong>CV Score</strong>
                            <small>92% optimized</small>
                        </div>

                    </div>

                </div>

            </section>


            {/* TOOLS */}
            <section
                className="ai-tools-section"
                id="ai-tools"
            >

                <div className="ai-tools-header">

                    <div>

                        <span className="section-label">
                            AI TOOLS
                        </span>

                        <h2>
                            Everything you need to get ahead
                        </h2>

                        <p>
                            Use AI to save time, improve your work, and find
                            better opportunities.
                        </p>

                    </div>

                </div>


                <div className="ai-tools-grid">

                    {aiTools.map((tool, index) => (

                        <article
                            className="ai-tool-card"
                            key={index}
                        >

                            <div className="ai-card-top">

                                <div className="ai-tool-icon">
                                    {tool.icon}
                                </div>

                                <span className="ai-tool-tag">
                                    {tool.tag}
                                </span>

                            </div>


                            <div className="ai-tool-content">

                                <h3>
                                    {tool.title}
                                </h3>

                                <p>
                                    {tool.description}
                                </p>

                                <Link
                                    to={tool.path}
                                    className="ai-tool-button"
                                >
                                    {tool.action}
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* BOTTOM CTA */}
            <section className="ai-bottom-cta">

                <div className="ai-cta-icon">
                    <FiZap />
                </div>

                <h2>
                    Ready to work smarter?
                </h2>

                <p>
                    Let AI handle the boring stuff while you focus on
                    building your skills and earning more.
                </p>

               <button
    className="ai-primary-btn"
    onClick={() => {
        document.getElementById("ai-tools").scrollIntoView({
            behavior: "smooth"
        });
    }}
>
    Explore AI Tools
    <FiArrowRight />
</button>

            </section>

        </main>
    );
}

export default AiTools;