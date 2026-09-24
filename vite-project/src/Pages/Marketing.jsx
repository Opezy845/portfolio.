import { Link } from "react-router-dom";
import { FiArrowRight, FiTrendingUp, FiStar } from "react-icons/fi";

const marketingGigs = [
    {
        title: "I will manage your social media campaigns",
        seller: "Blessing",
        price: "₦1,500,000",
        rating: "4.8",
    },
    {
        title: "I will create a social media marketing strategy",
        seller: "Victoria",
        price: "₦1,200,000",
        rating: "4.9",
    },
    {
        title: "I will help promote your brand on social media",
        seller: "Daniel",
        price: "₦1,200,000",
        rating: "4.8",
    },
    {
        title: "I will create engaging content for your business",
        seller: "Favour",
        price: "₦8,500,000",
        rating: "5.0",
    },
    {
        title: "I will create a digital marketing plan",
        seller: "Esther",
        price: "₦1,500,000",
        rating: "4.9",
    },
    {
        title: "I will help grow your online business presence",
        seller: "Samuel",
        price: "₦2,390,000",
        rating: "4.8",
    },
];

function Marketing() {
    return (
        <main className="marketing-page">

            {/* Header */}
            <section className="marketing-header">

                <div className="marketing-icon">
                    <FiTrendingUp />
                </div>

                <div>
                    <h1>Marketing</h1>

                    <p>
                        Find talented student marketers who can help
                        promote your brand, grow your audience, and
                        reach more customers.
                    </p>
                </div>

            </section>


            {/* Results */}
            <section className="marketing-results">

                <div className="marketing-results-top">

                    <div>
                        <h2>Marketing Services</h2>

                        <span>
                            {marketingGigs.length} services available
                        </span>
                    </div>

                </div>


                {/* Gig Grid */}
                <div className="marketing-grid">

                    {marketingGigs.map((gig, index) => (

                        <article
                            className="marketing-card"
                            key={index}
                        >

                            {/* Image placeholder */}
                            <div className="marketing-image">
                                <FiTrendingUp />
                            </div>


                            {/* Card body */}
                            <div className="marketing-card-body">

                                <div className="marketing-seller">

                                    <div className="marketing-avatar">
                                        {gig.seller.charAt(0)}
                                    </div>

                                    <span>{gig.seller}</span>

                                    <small>✓</small>

                                </div>


                                <h3>
                                    {gig.title}
                                </h3>


                                <div className="marketing-rating">

                                    <FiStar />

                                    <span>{gig.rating}</span>

                                </div>


                                <div className="marketing-footer">

                                    <div>
                                        <small>Starting at</small>

                                        <strong>
                                            {gig.price}
                                        </strong>
                                    </div>


                                    <Link
                                        to="/gig-details"
                                        className="marketing-arrow"
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

export default Marketing;