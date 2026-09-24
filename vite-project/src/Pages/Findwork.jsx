import {
    FiSearch,
    FiMapPin,
    FiStar,
    FiArrowRight,
    FiClock,
    FiBookmark
} from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FindWork.css";

function FindWork() {

    const navigate = useNavigate();

    const jobs = [
        {
            id: 1,
            title: "Logo Designer Needed",
            description:
                "Looking for a creative designer to create a modern logo for a new brand.",
            budget: 500000000,
            budgetText: "₦250,000 - ₦500,000",
            location: "Remote",
            rating: "4.9",
            category: "Design",
            time: "2 days ago"
        },
        {
            id: 2,
            title: "React Developer",
            description:
                "Need a React developer to help build a responsive website.",
            budget: 1000000000,
            budgetText: "₦5000,000 - ₦1000,000,000",
            location: "Remote",
            rating: "4.8",
            category: "Development",
            time: "4 hours ago"
        },
        {
            id: 3,
            title: "Content Writer",
            description:
                "Looking for a student writer to create engaging website content.",
            budget: 3000000000,
            budgetText: "₦150,000 - ₦300,000",
            location: "Lagos",
            rating: "4.7",
            category: "Writing",
            time: "1 day ago"
        },
        {
            id: 4,
            title: "Social Media Designer",
            description:
                "Create social media graphics for a growing student business.",
            budget: 400000000,
            budgetText: "₦200,000 - ₦400,000",
            location: "Lagos",
            rating: "4.9",
            category: "Marketing",
            time: "3 days ago"
        }
    ];

    const [search, setSearch] = useState("");
    const [activeSearch, setActiveSearch] = useState("");

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBudgets, setSelectedBudgets] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    const [savedJobs, setSavedJobs] = useState([]);

    const [sortBy, setSortBy] = useState("recent");


    const handleSearch = () => {
        setActiveSearch(search);
    };

    const handleCategoryChange = (category) => {

        setSelectedCategories((current) =>
            current.includes(category)
                ? current.filter((item) => item !== category)
                : [...current, category]
        );

    };


    const handleBudgetChange = (budget) => {

        setSelectedBudgets((current) =>
            current.includes(budget)
                ? current.filter((item) => item !== budget)
                : [...current, budget]
        );

    };


    const handleLocationChange = (location) => {

        setSelectedLocations((current) =>
            current.includes(location)
                ? current.filter((item) => item !== location)
                : [...current, location]
        );

    };

    const clearFilters = () => {

        setSearch("");
        setActiveSearch("");

        setSelectedCategories([]);
        setSelectedBudgets([]);
        setSelectedLocations([]);

        setSortBy("recent");

    };



    const toggleSaveJob = (jobId) => {

        setSavedJobs((current) =>
            current.includes(jobId)
                ? current.filter((id) => id !== jobId)
                : [...current, jobId]
        );

    };


    const matchesBudget = (job) => {

        if (selectedBudgets.length === 0) {
            return true;
        }

        return selectedBudgets.some((budget) => {

            if (budget === "low") {
                return job.budget <= 200000;
            }

            if (budget === "medium") {
                return job.budget > 2000000 && job.budget <= 500000;
            }

            if (budget === "high") {
                return job.budget > 5000000;
            }

            return true;
        });

    };


    let filteredJobs = jobs.filter((job) => {

        const searchText =
            activeSearch.toLowerCase().trim();

        const matchesSearch =
            !searchText ||
            job.title.toLowerCase().includes(searchText) ||
            job.description.toLowerCase().includes(searchText) ||
            job.category.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(job.category);

        const matchesLocation =
            selectedLocations.length === 0 ||
            selectedLocations.includes(job.location);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBudget(job) &&
            matchesLocation
        );

    });


    if (sortBy === "highest") {

        filteredJobs.sort(
            (a, b) => b.budget - a.budget
        );

    }

    if (sortBy === "lowest") {

        filteredJobs.sort(
            (a, b) => a.budget - b.budget
        );

    }


    const handleViewJob = (job) => {

        navigate("/gig-details", {
            state: job
        });

    };


    return (
        <main className="find-work">

            <section className="find-work-hero">

                <div className="find-work-hero-content">

                    <span className="find-work-label">
                        FIND YOUR NEXT OPPORTUNITY
                    </span>

                    <h1>
                        Find Work.
                        <span> Build Your Future.</span>
                    </h1>

                    <p>
                        Discover freelance jobs that match your skills,
                        build your portfolio, and earn while you learn.
                    </p>


                    <div className="job-search">

                        <FiSearch className="search-icon" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Search for jobs, skills or keywords..."
                        />

                        <button onClick={handleSearch}>
                            Search
                            <FiArrowRight />
                        </button>

                    </div>

                    <div className="popular-searches">

                        <span>Popular:</span>

                        <button
                            onClick={() => {
                                setSearch("Development");
                                setActiveSearch("Development");
                            }}
                        >
                            Web Development
                        </button>

                        <button
                            onClick={() => {
                                setSearch("Design");
                                setActiveSearch("Design");
                            }}
                        >
                            Design
                        </button>

                        <button
                            onClick={() => {
                                setSearch("Writing");
                                setActiveSearch("Writing");
                            }}
                        >
                            Writing
                        </button>

                        <button
                            onClick={() => {
                                setSearch("Marketing");
                                setActiveSearch("Marketing");
                            }}
                        >
                            Marketing
                        </button>

                    </div>

                </div>

            </section>

            <section className="jobs-section">

                <aside className="filters">

                    <div className="filters-header">

                        <h3>Filters</h3>

                        <button onClick={clearFilters}>
                            Clear all
                        </button>

                    </div>
                    <div className="filter-group">

                        <h4>Category</h4>

                        {["Design", "Development", "Writing", "Marketing"].map(
                            (category) => (

                                <label key={category}>

                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() =>
                                            handleCategoryChange(category)
                                        }
                                    />

                                    <span>{category}</span>

                                </label>

                            )
                        )}

                    </div>


                    <div className="filter-divider"></div>

                    <div className="filter-group">

                        <h4>Budget</h4>

                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBudgets.includes("low")}
                                onChange={() =>
                                    handleBudgetChange("low")
                                }
                            />
                            <span>₦500,000k - ₦800,000k</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBudgets.includes("medium")}
                                onChange={() =>
                                    handleBudgetChange("medium")
                                }
                            />
                            <span>₦200,000k - ₦500,000k</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBudgets.includes("high")}
                                onChange={() =>
                                    handleBudgetChange("high")
                                }
                            />
                            <span>₦500,40000k+</span>
                        </label>

                    </div>


                    <div className="filter-divider"></div>

                    <div className="filter-group">

                        <h4>Location</h4>

                        {["Remote", "Lagos"].map((location) => (

                            <label key={location}>

                                <input
                                    type="checkbox"
                                    checked={selectedLocations.includes(location)}
                                    onChange={() =>
                                        handleLocationChange(location)
                                    }
                                />

                                <span>{location}</span>

                            </label>

                        ))}

                    </div>

                </aside>

                <div className="job-list">
                    <div className="job-list-header">
                        <div>
                            <span className="results-label">
                                AVAILABLE OPPORTUNITIES
                            </span>

                            <h2>
                                Latest Jobs
                            </h2>

                        </div>


                        <div className="job-sort">

                            <span>Sort by</span>

                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(e.target.value)
                                }
                            >
                                <option value="recent">
                                    Most Recent
                                </option>

                                <option value="highest">
                                    Highest Budget
                                </option>

                                <option value="lowest">
                                    Lowest Budget
                                </option>

                            </select>

                        </div>

                    </div>


                    <p className="jobs-found">

                        {filteredJobs.length}{" "}
                        {filteredJobs.length === 1
                            ? "opportunity"
                            : "opportunities"}{" "}
                        available

                    </p>


                    {filteredJobs.length > 0 ? (

                        filteredJobs.map((job) => (

                            <article
                                className="job-card"
                                key={job.id}
                            >

                                <div className="job-card-content">

                                    <div className="job-card-top">

                                        <span className="job-category">
                                            {job.category}
                                        </span>


                                        <button
                                            className={`save-job ${
                                                savedJobs.includes(job.id)
                                                    ? "saved"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                toggleSaveJob(job.id)
                                            }
                                            aria-label="Save job"
                                        >
                                            <FiBookmark />
                                        </button>

                                    </div>


                                    <h3>
                                        {job.title}
                                    </h3>


                                    <p className="job-description">
                                        {job.description}
                                    </p>


                                    <div className="job-info">

                                        <strong>
                                            {job.budgetText}
                                        </strong>

                                        <span>
                                            <FiMapPin />
                                            {job.location}
                                        </span>

                                        <span>
                                            <FiClock />
                                            {job.time}
                                        </span>

                                        <span>
                                            <FiStar />
                                            {job.rating}
                                        </span>

                                    </div>

                                </div>


                                <button
                                    className="view-job"
                                    onClick={() =>
                                        handleViewJob(job)
                                    }
                                >
                                    View Job
                                    <FiArrowRight />
                                </button>

                            </article>

                        ))

                    ) : (

                        <div className="no-jobs">

                            <FiSearch />

                            <h3>
                                No jobs found
                            </h3>

                            <p>
                                Try changing your search or filters.
                            </p>

                            <button onClick={clearFilters}>
                                Clear Filters
                            </button>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default FindWork;

