import { FiHeart, FiStar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


import websiteDesign from "../assets/website.png";
import cvDesign from "../assets/cv.jpg";
import videoDesign from "../assets/video.jpg";
import marketingDesign from "../assets/marketing.jpg";

const gigs = [
    {
        id: 1,
        image:  "/logo.png",
        title: "I will design a modern logo for your brand",
        seller: "Favour",
        rating: "4.9",
        reviews: "28",
        price: "₦15000000"
    },
    {
        id: 2,
        image: websiteDesign,
        title: "I will build a responsive website for your business",
        seller: "David",
        rating: "4.8",
        reviews: "19",
        price: "₦500000670"
    },
    {
        id: 3,
        image: cvDesign,
        title: "I will design a professional CV and resume",
        seller: "Peace",
        rating: "5.0",
        reviews: "34",
        price: "₦32100000"
    },
    {
        id: 4,
        image: videoDesign,
        title: "I will edit engaging videos for YouTube and TikTok",
        seller: "Michael",
        rating: "4.9",
        reviews: "22",
        price: "₦100005430"
    },
    {
        id: 5,
        image: marketingDesign,
        title: "I will manage your social media marketing",
        seller: "Blessing",
        rating: "4.8",
        reviews: "17",
        price: "₦34230000"
    }
];

function FeaturedGigs() {
    return (
        <section className="featured-gigs-section">

            <div className="featured-header">

                <div>
                    <span className="section-label">
                        Student talent
                    </span>

                    <h2>Featured Gigs</h2>

                    <p>
                        Discover services from talented students ready
                        to help you complete your next project.
                    </p>
                </div>

                <Link
                    to="/browse-gigs"
                    className="view-gigs"
                >
                    View all gigs
                    <FiArrowRight />
                </Link>

            </div>

            <div className="gigs-grid">

                {gigs.map((gig) => (

                    <article
                        className="gig-card"
                        key={gig.id}
                    >

                        <div className="gig-image-wrapper">

                            <Link to={`/gig-details?id=${gig.id}`}>
                                <img
                                    src={gig.image}
                                    alt={gig.title}
                                />
                            </Link>

                            <button className="favorite-button">
                                <FiHeart />
                            </button>

                        </div>

                        <div className="gig-content">

                            <div className="seller-info">

                                <div className="seller-avatar">
                                    {gig.seller.charAt(0)}
                                </div>

                                <Link
                        to={`/seller/${gig.seller.toLowerCase()}`}
                       className="seller-name-link"
                         >
    {gig.seller}
</Link>

                                <span className="verified">
                                    ✓
                                </span>

                            </div>

                            <Link
                                to={`/gig-details?id=${gig.id}`}
                                className="gig-title-link"
                            >
                                <h3>{gig.title}</h3>
                            </Link>

                            <div className="gig-rating">

                                <FiStar />

                                <strong>{gig.rating}</strong>

                                <span>
                                    ({gig.reviews})
                                </span>

                            </div>

                            <div className="gig-footer">

                                <div>
                                    <small>Starting at</small>
                                    <strong>{gig.price}</strong>
                                </div>

                                <Link
                                    to={`/gig-details?id=${gig.id}`}
                                    className="gig-arrow"
                                >
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default FeaturedGigs;