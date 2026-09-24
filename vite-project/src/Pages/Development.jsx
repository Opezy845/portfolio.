import { Link } from "react-router-dom";
import { FiArrowRight, FiCode, FiStar } from "react-icons/fi";

const developmentGigs = [
    {
        title: "I will build a responsive React website",
        seller: "David",
        price: "₦25,000",
        rating: "4.8",
    },
    {
        title: "I will create a modern landing page",
        seller: "Daniel",
        price: "₦15,000",
        rating: "4.9",
    },
    {
        title: "I will fix bugs in your JavaScript project",
        seller: "Samuel",
        price: "₦10,000",
        rating: "5.0",
    },
    {
        title: "I will build a professional portfolio website",
        seller: "Michael",
        price: "₦20,000",
        rating: "4.9",
    },
    {
        title: "I will convert your Figma design to React",
        seller: "Joshua",
        price: "₦30,000",
        rating: "4.8",
    },
    {
        title: "I will build a full-stack web application",
        seller: "Emmanuel",
        price: "₦40,000",
        rating: "4.9",
    },
];

function Development() {
    return (
        <main className="development-page">

            {/* Header */}
            <section className="development-header">

                <div className="development-icon">
                    <FiCode />
                </div>

                <div>
                    <h1>Development</h1>

                    <p>
                        Find talented student developers who can build,
                        improve, and maintain your next project.
                    </p>
                </div>

            </section>


            {/* Results */}
            <section className="development-results">

                <div className="development-results-top">

                    <div>
                        <h2>Development Services</h2>

                        <span>
                            {developmentGigs.length} services available
                        </span>
                    </div>

                </div>


                {/* Gig Grid */}
                <div className="development-grid">

                    {developmentGigs.map((gig, index) => (

                        <article
                            className="development-card"
                            key={index}
                        >

                            {/* Image placeholder */}
                            <div className="development-image">
                                <FiCode />
                            </div>


                            {/* Card body */}
                            <div className="development-card-body">

                                <div className="development-seller">

                                    <div className="development-avatar">
                                        {gig.seller.charAt(0)}
                                    </div>

                                    <span>{gig.seller}</span>

                                    <small>✓</small>

                                </div>


                                <h3>
                                    {gig.title}
                                </h3>


                                <div className="development-rating">

                                    <FiStar />

                                    <span>{gig.rating}</span>

                                </div>


                                <div className="development-footer">

                                    <div>
                                        <small>Starting at</small>

                                        <strong>
                                            {gig.price}
                                        </strong>
                                    </div>


                                    <Link
                                        to="/gig-details"
                                        className="development-arrow"
                                    >
                                        <FiArrowRight />
                                    </Link>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Development;