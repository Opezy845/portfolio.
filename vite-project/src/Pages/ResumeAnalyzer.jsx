import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowLeft,
    FiFileText,
    FiCheckCircle,
    FiAlertCircle,
    FiTrendingUp
} from "react-icons/fi";

import "./ResumeAnalyzer.css";

function ResumeAnalyzer() {
    const [resume, setResume] = useState("");
    const [result, setResult] = useState(null);

    const analyzeResume = (e) => {
        e.preventDefault();

        const wordCount = resume.trim().split(/\s+/).length;

        const score = wordCount > 150 ? 92 : wordCount > 80 ? 78 : 65;

        setResult({
            score,
            strengths: [
                "Your resume contains useful professional information.",
                "Your skills are clearly mentioned.",
                "Your experience section can help employers understand your background."
            ],
            suggestions: [
                "Add measurable achievements to your experience.",
                "Use stronger action words such as created, developed, designed, or managed.",
                "Add links to your portfolio or previous projects.",
                "Keep your resume clear and easy to scan."
            ]
        });
    };

    return (
        <main className="resume-analyzer-page">

            <div className="resume-analyzer-container">

                <Link
                    to="/ai-tools"
                    className="resume-back"
                >
                    <FiArrowLeft />
                    Back to AI Tools
                </Link>

                <section className="resume-header">

                    <span className="resume-label">
                        <FiFileText />
                        RESUME ANALYZER
                    </span>

                    <h1>
                        Make your resume <span>stand out.</span>
                    </h1>

                    <p>
                        Paste your resume below and get useful suggestions
                        to improve your chances of getting noticed.
                    </p>

                </section>

                <form
                    className="resume-form"
                    onSubmit={analyzeResume}
                >

                    <div className="resume-input-header">

                        <div>
                            <h2>
                                Your Resume
                            </h2>

                            <p>
                                Paste the text from your CV here.
                            </p>
                        </div>

                        <FiFileText />

                    </div>

                    <textarea
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        placeholder="Paste your resume here..."
                        rows="15"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="analyze-resume-button"
                    >
                        <FiTrendingUp />
                        Analyze My Resume
                    </button>

                </form>

                {result && (
                    <section className="resume-results">

                        <div className="resume-score-card">

                            <div className="score-circle">
                                <strong>
                                    {result.score}
                                </strong>

                                <span>
                                    /100
                                </span>
                            </div>

                            <div>
                                <span className="score-label">
                                    RESUME SCORE
                                </span>

                                <h2>
                                    Good start!
                                </h2>

                                <p>
                                    Your resume has a solid foundation.
                                    Use the suggestions below to make it
                                    even stronger.
                                </p>
                            </div>

                        </div>

                        <div className="resume-analysis-grid">

                            <div className="analysis-card">

                                <div className="analysis-card-header">
                                    <FiCheckCircle />

                                    <h3>
                                        What's working
                                    </h3>
                                </div>

                                <div className="analysis-list">

                                    {result.strengths.map(
                                        (strength, index) => (
                                            <div
                                                className="analysis-item"
                                                key={index}
                                            >
                                                <FiCheckCircle />

                                                <p>
                                                    {strength}
                                                </p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                            <div className="analysis-card">

                                <div className="analysis-card-header warning">
                                    <FiAlertCircle />

                                    <h3>
                                        Improve your resume
                                    </h3>
                                </div>

                                <div className="analysis-list">

                                    {result.suggestions.map(
                                        (suggestion, index) => (
                                            <div
                                                className="analysis-item"
                                                key={index}
                                            >
                                                <FiAlertCircle />

                                                <p>
                                                    {suggestion}
                                                </p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                    </section>
                )}

            </div>

        </main>
    );
}

export default ResumeAnalyzer;