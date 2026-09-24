import {
    FiHeart,
    FiStar,
    FiArrowLeft,
    FiMessageCircle,
    FiShoppingCart,
    FiCheck
} from "react-icons/fi";


import { Link, useParams } from "react-router-dom";
import "./GigDetails.css";

import websiteDesign from "../assets/website.png";
import cvDesign from "../assets/cv.jpg";
import videoDesign from "../assets/video.jpg";
import marketingDesign from "../assets/marketing.jpg";

const gigs = [
    {
        id: 1,
        image: "/logo.png",
        title: "I will design a modern logo for your brand",
        seller: "Favour",
        rating: "4.9",
        reviews: "28",
        price: "₦15000000",
        category: "Design",
        description:"I will create a clean, modern, and professional logo that represents your brand and helps you stand out."
    },
    {
        id: 2,
        image: websiteDesign,
        title: "I will build a responsive website for your business",
        seller: "David",
        rating: "4.8",
        reviews: "19",
        price: "₦500000670",
        category: "Development",
        description:
            "I will build a responsive and modern website that works smoothly across phones, tablets, and computers."
    },
    {
        id: 3,
        image: cvDesign,
        title: "I will design a professional CV and resume",
        seller: "Peace",
        rating: "5.0",
        reviews: "34",
        price: "₦32,100,000",
        category: "Writing",
        description:
            "I will create a professional and well-structured CV or resume that clearly presents your skills and experience."
    },
    {
        id: 4,
        image: videoDesign,
        title: "I will edit engaging videos for YouTube and TikTok",
        seller: "Michael",
        rating: "4.9",
        reviews: "22",
        price: "₦100000",
        category: "Video",
        description:
            "I will edit your videos into engaging content suitable for YouTube, TikTok, Instagram, and other social platforms."
    },
    {
        id: 5,
        image: marketingDesign,
        title: "I will manage your social media marketing",
        seller: "Blessing",
        rating: "4.8",
        reviews: "17",
        price: "₦15,000",
        category: "Marketing",
        description:
            "I will help manage your social media presence and create strategies to help your brand reach more people."
    }
];

function GigDetails() {
const { id } = useParams();
const gigId = Number(id);

    const gig = gigs.find((item) => item.id === gigId) || gigs[0];

    return (
        <main className="gig-details-page">

            <div className="gig-details-top">
                <Link to="/" className="gig-back-button">
                    <FiArrowLeft />
                    Back to Home
                </Link>
            </div>

            <section className="gig-details-container">

                {/* LEFT SIDE */}
                <div className="gig-details-left">

                    <div className="gig-details-image">

                        <img
                            src={gig.image}
                            alt={gig.title}
                        />

                        <button
                            className="gig-details-favorite"
                            type="button"
                        >
                            <FiHeart />
                        </button>

                    </div>

                    <div className="gig-details-main">

                        <span className="gig-details-category">
                            {gig.category}
                        </span>

                        <h1>{gig.title}</h1>

                        <div className="gig-details-seller">

                            <div className="gig-details-avatar">
                                {gig.seller.charAt(0)}
                            </div>

                            <div>
                                <strong>{gig.seller}</strong>
                                <span>Verified Student</span>
                            </div>

                        </div>

                        <div className="gig-details-rating">

                            <FiStar />

                            <strong>{gig.rating}</strong>

                            <span>
                                ({gig.reviews} reviews)
                            </span>

                        </div>

                        <div className="gig-description">

                            <h2>About this service</h2>

                            <p>
                                {gig.description}
                            </p>

                            <p>
                                Get professional-quality work from a
                                talented student freelancer on SkillBridge.
                                Discuss your requirements with the seller
                                before getting started.
                            </p>

                        </div>

                        <div className="gig-features">

                            <h2>What you'll get</h2>

                            <div className="gig-feature-list">

    <div className="gig-feature">
        <span className="check-circle">
            <FiCheck />
        </span>

        <div>
            <strong>Professional quality</strong>
            <p>Get reliable and high-quality work.</p>
        </div>
    </div>

    <div className="gig-feature">
        <span className="check-circle">
            <FiCheck />
        </span>

        <div>
            <strong>Direct communication</strong>
            <p>Talk directly with the student freelancer.</p>
        </div>
    </div>

    <div className="gig-feature">
        <span className="check-circle">
            <FiCheck />
        </span>

        <div>
            <strong>Student freelancer</strong>
            <p>Support talented students building their careers.</p>
        </div>
    </div>

    <div className="gig-feature">
        <span className="check-circle">
            <FiCheck />
        </span>

        <div>
            <strong>Made for your needs</strong>
            <p>Your project is tailored to your requirements.</p>
        </div>
    </div>


                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <aside className="gig-details-sidebar">

                    <div className="gig-price-card">

                        <span>Starting at</span>

                        <strong className="gig-price">
                            {gig.price}
                        </strong>

                        <div className="gig-delivery">

                            <span>
                                <FiCheck />
                                Professional service
                            </span>

                            <span>
                                <FiCheck />
                                Student talent
                            </span>

                            <span>
                                <FiCheck />
                                Direct communication
                            </span>

                        </div>

                        <div className="gig-action-buttons">

    <Link
        to={`/application/${gig.id}`}
        className="order-now-btn"
    >
        Order Now
    </Link>

    <Link
        to={`/message/${gig.id}`}
        className="contact-seller-btn"
    >
        Contact Seller
    </Link>

</div>
                    </div>

                </aside>

            </section>

        </main>
    );
}

export default GigDetails;