import { FiSearch, FiArrowRight, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Marketplace.css";

function Marketplace() {
    const [searchTerm, setSearchTerm] = useState("");

    const gigs = [
        {
            id: 1,
            title: "I will build a modern responsive website",
            seller: "David Tech",
            category: "Development",
            price: "₦25,000",
            description:
                "Get a clean and responsive website for your business, portfolio, or personal brand.",
        },
        {
            id: 2,
            title: "I will design a professional brand identity",
            seller: "Sarah Design",
            category: "Design",
            price: "₦15,000",
            description:
                "Professional logo and brand design to help your business stand out.",
        },
        {
            id: 3,
            title: "I will write SEO-friendly website content",
            seller: "Daniel Writes",
            category: "Writing",
            price: "₦10,000",
            description:
                "Clear and engaging content written for websites, blogs, and online businesses.",
        },
        {
            id: 4,
            title: "I will edit your social media videos",
            seller: "Mike Visuals",
            category: "Video",
            price: "₦12,000",
            description:
                "Short-form video editing for TikTok, Instagram, YouTube Shorts, and more.",
        },
    ];

    const filteredGigs = gigs.filter((gig) =>
        `${gig.title} ${gig.category} ${gig.seller}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <main className="marketplace-page">
            <section className="marketplace-container">

                {/* Header */}
                <div className="marketplace-header">
                    <div>
                        <span className="marketplace-label">
                            SKILLBRIDGE MARKETPLACE
                        </span>

                        <h1>Find the right talent for your project.</h1>

                        <p>
                            Browse services from talented students and
                            freelancers ready to help bring your ideas to life.
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="marketplace-search">
                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search for services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Categories */}
                <div className="marketplace-categories">
                    <button onClick={() => setSearchTerm("")}>
                        All
                    </button>

                    <button
                        onClick={() => setSearchTerm("Development")}
                    >
                        Development
                    </button>

                    <button
                        onClick={() => setSearchTerm("Design")}
                    >
                        Design
                    </button>

                    <button
                        onClick={() => setSearchTerm("Writing")}
                    >
                        Writing
                    </button>

                    <button
                        onClick={() => setSearchTerm("Video")}
                    >
                        Video
                    </button>
                </div>

                {/* Marketplace Results */}
                <div className="marketplace-section-header">
                    <div>
                        <span className="marketplace-section-label">
                            SERVICES
                        </span>

                        <h2>
                            {searchTerm
                                ? `Results for "${searchTerm}"`
                                : "Popular services"}
                        </h2>
                    </div>

                    <span className="marketplace-result-count">
                        {filteredGigs.length} services
                    </span>
                </div>

                {filteredGigs.length > 0 ? (
                    <div className="marketplace-grid">
                        {filteredGigs.map((gig) => (
                            <article
                                className="marketplace-card"
                                key={gig.id}
                            >
                                <div className="marketplace-card-icon">
                                    <FiBriefcase />
                                </div>

                                <span className="marketplace-category">
                                    {gig.category}
                                </span>

                                <h3>{gig.title}</h3>

                                <p>{gig.description}</p>

                                <div className="marketplace-seller">
                                    <span className="seller-avatar">
                                        {gig.seller.charAt(0)}
                                    </span>

                                    <span>
                                        <small>Seller</small>
                                        <strong>{gig.seller}</strong>
                                    </span>
                                </div>

                                <div className="marketplace-card-footer">
                                    <div>
                                        <small>Starting from</small>
                                        <strong>{gig.price}</strong>
                                    </div>

                                    <Link
                                        to={`/gig-details?id=${gig.id}`}
                                        className="marketplace-view-button"
                                    >
                                        View
                                        <FiArrowRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="marketplace-empty">
                        <FiSearch />

                        <h3>No services found</h3>

                        <p>
                            Try searching for another service or category.
                        </p>

                        <button onClick={() => setSearchTerm("")}>
                            View all services
                        </button>
                    </div>
                )}

                {/* Bottom CTA */}
                <section className="marketplace-cta">
                    <div>
                        <span>ARE YOU A STUDENT FREELANCER?</span>

                        <h2>
                            Turn your skills into real opportunities.
                        </h2>

                        <p>
                            Showcase what you can do and connect with clients
                            looking for your skills.
                        </p>
                    </div>

                    <Link
                        to="/find-work"
                        className="marketplace-cta-button"
                    >
                        Start Selling
                        <FiArrowRight />
                    </Link>
                </section>

            </section>
        </main>
    );
}

export default Marketplace;