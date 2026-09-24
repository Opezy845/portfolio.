import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowLeft,
    FiSearch,
    FiBriefcase,
    FiMapPin,
    FiDollarSign,
    FiStar
} from "react-icons/fi";

import "./SmartMatch.css";

function SmartMatch() {
    const [skills, setSkills] = useState("");
    const [category, setCategory] = useState("");
    const [results, setResults] = useState([]);

    const jobs = [
        {
            title: "Build a React Landing Page",
            category: "Web Development",
            description:
                "Looking for a student developer to create a modern responsive landing page.",
            budget: "₦40,000 - ₦70,000",
            location: "Remote",
            rating: "4.9"
        },
        {
            title: "Design a Modern Business Logo",
            category: "Graphic Design",
            description:
                "Need a creative designer to create a professional logo for a new business.",
            budget: "₦20,000 - ₦40,000",
            location: "Remote",
            rating: "4.8"
        },
        {
            title: "Write Website Content",
            category: "Writing",
            description:
                "Looking for a writer to create clear and engaging content for a business website.",
            budget: "₦15,000 - ₦30,000",
            location: "Remote",
            rating: "4.7"
        },
        {
            title: "Social Media Marketing",
            category: "Marketing",
            description:
                "Need help managing social media content and growing an online audience.",
            budget: "₦25,000 - ₦50,000",
            location: "Remote",
            rating: "4.9"
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();

        const search = skills.toLowerCase().trim();

        const filteredJobs = jobs.filter((job) => {
            const matchesSkills =
                !search ||
                job.title.toLowerCase().includes(search) ||
                job.description.toLowerCase().includes(search) ||
                job.category.toLowerCase().includes(search);

            const matchesCategory =
                !category || job.category === category;

            return matchesSkills && matchesCategory;
        });

        setResults(filteredJobs);
    };

    return (
        <main className="smart-match-page">

            <div className="smart-match-container">

                <Link
                    to="/ai-tools"
                    className="smart-match-back"
                >
                    <FiArrowLeft />
                    Back to AI Tools
                </Link>

                <section className="smart-match-header">

                    <span className="smart-match-label">
                        <FiSearch />
                        SMART JOB MATCH
                    </span>

                    <h1>
                        Find jobs that <span>fit you.</span>
                    </h1>

                    <p>
                        Tell us what you can do and we'll help you discover
                        freelance opportunities that match your skills.
                    </p>

                </section>

                <form
                    className="smart-match-form"
                    onSubmit={handleSearch}
                >

                    <div className="smart-input-group">

                        <label>
                            What skills do you have?
                        </label>

                        <div className="smart-input-wrapper">
                            <FiSearch />

                            <input
                                type="text"
                                value={skills}
                                onChange={(e) =>
                                    setSkills(e.target.value)
                                }
                                placeholder="e.g. React, Logo Design, Writing"
                            />
                        </div>

                    </div>

                    <div className="smart-input-group">

                        <label>
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        >
                            <option value="">
                                All Categories
                            </option>

                            <option value="Web Development">
                                Web Development
                            </option>

                            <option value="Graphic Design">
                                Graphic Design
                            </option>

                            <option value="Writing">
                                Writing
                            </option>

                            <option value="Marketing">
                                Marketing
                            </option>
                        </select>

                    </div>

                    <button
                        type="submit"
                        className="smart-match-button"
                    >
                        <FiSearch />
                        Find My Matches
                    </button>

                </form>

                {results.length > 0 && (
                    <section className="match-results">

                        <div className="match-results-header">
                            <div>
                                <span className="section-label">
                                    MATCH RESULTS
                                </span>

                                <h2>
                                    Jobs that match your skills
                                </h2>
                            </div>

                            <span className="match-count">
                                {results.length} matches
                            </span>
                        </div>

                        <div className="match-jobs">

                            {results.map((job, index) => (

                                <article
                                    className="match-job-card"
                                    key={index}
                                >

                                    <div className="match-job-top">

                                        <div className="match-job-icon">
                                            <FiBriefcase />
                                        </div>

                                        <span className="match-score">
                                            {95 - index * 5}% Match
                                        </span>

                                    </div>

                                    <h3>
                                        {job.title}
                                    </h3>

                                    <p>
                                        {job.description}
                                    </p>

                                    <div className="match-job-details">

                                        <span>
                                            <FiBriefcase />
                                            {job.category}
                                        </span>

                                        <span>
                                            <FiDollarSign />
                                            {job.budget}
                                        </span>

                                        <span>
                                            <FiMapPin />
                                            {job.location}
                                        </span>

                                        <span>
                                            <FiStar />
                                            {job.rating}
                                        </span>

                                    </div>

                                    <Link
                                        to="/browse-gigs"
                                        className="view-match-button"
                                    >
                                        View Opportunity
                                    </Link>

                                </article>

                            ))}

                        </div>

                    </section>
                )}

                {results.length === 0 && (
                    <div className="smart-empty-state">

                        <div className="smart-empty-icon">
                            <FiSearch />
                        </div>

                        <h2>
                            Find your next opportunity
                        </h2>

                        <p>
                            Enter your skills above and we'll show you
                            freelance jobs that could be a good match.
                        </p>

                    </div>
                )}

            </div>

        </main>
    );
}

export default SmartMatch;