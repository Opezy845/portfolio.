import { useState } from "react";
import { FiArrowLeft, FiZap, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./gig-generator.css";

function GigGenerator() {
    const [service, setService] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [generatedGig, setGeneratedGig] = useState(null);

    const handleGenerate = (e) => {
        e.preventDefault();

        const gig = {
            title: `Professional ${service} Services`,
            description: `I provide high-quality ${service} services for individuals and businesses. ${description} I am committed to delivering professional results, clear communication, and excellent customer service.`,
            tags: [category, service, "Professional Service"],
        };

        setGeneratedGig(gig);
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied!");
    };

    return (
        <main className="gig-generator-page">

            <div className="gig-generator-container">

                <Link to="/ai-tools" className="gig-back">
                    <FiArrowLeft />
                    Back to AI Tools
                </Link>

                <div className="gig-generator-header">
                    <span className="gig-generator-label">
                        <FiZap />
                        AI GIG GENERATOR
                    </span>

                    <h1>
                        Create your gig <span>faster.</span>
                    </h1>

                    <p>
                        Tell us about your service and SkillBridge will
                        create a professional gig for you.
                    </p>
                </div>

                <form
                    className="gig-generator-form"
                    onSubmit={handleGenerate}
                >

                    <div className="form-group">
                        <label>What service do you offer?</label>

                        <input
                            type="text"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder="e.g. Logo Design"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">
                                Select a category
                            </option>

                            <option value="Graphic Design">
                                Graphic Design
                            </option>

                            <option value="Web Development">
                                Web Development
                            </option>

                            <option value="Writing">
                                Writing
                            </option>

                            <option value="Marketing">
                                Marketing
                            </option>

                            <option value="Video & Animation">
                                Video & Animation
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Describe your service</label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Tell us what you can do for your clients..."
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="generate-gig-button"
                    >
                        <FiZap />
                        Generate My Gig
                    </button>

                </form>

                {generatedGig && (
                    <div className="generated-gig">

                        <div className="generated-gig-header">
                            <h2>Your Generated Gig</h2>

                            <span>
                                AI Generated
                            </span>
                        </div>

                        <div className="generated-section">

                            <div className="generated-title-row">
                                <h3>Gig Title</h3>

                                <button
                                    onClick={() =>
                                        copyText(generatedGig.title)
                                    }
                                >
                                    <FiCopy />
                                    Copy
                                </button>
                            </div>

                            <p className="generated-title">
                                {generatedGig.title}
                            </p>

                        </div>

                        <div className="generated-section">

                            <div className="generated-title-row">
                                <h3>Description</h3>

                                <button
                                    onClick={() =>
                                        copyText(
                                            generatedGig.description
                                        )
                                    }
                                >
                                    <FiCopy />
                                    Copy
                                </button>
                            </div>

                            <p className="generated-description">
                                {generatedGig.description}
                            </p>

                        </div>

                        <div className="generated-section">

                            <h3>Suggested Tags</h3>

                            <div className="gig-tags">
                                {generatedGig.tags.map((tag, index) => (
                                    <span key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>
                )}

            </div>

        </main>
    );
}

export default GigGenerator;