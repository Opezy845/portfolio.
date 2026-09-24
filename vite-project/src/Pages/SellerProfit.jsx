import {
    FiArrowLeft,
    FiStar,
    FiCheck,
    FiMapPin,
    FiBriefcase
} from "react-icons/fi";

import { Link, useParams } from "react-router-dom";

const sellers = {
    favour: {
        name: "Favour",
        initials: "F",
        category: "Graphic Designer",
        location: "Nigeria",
        rating: "4.9",
        reviews: "28",
        description:
            "I am a student graphic designer focused on creating clean, modern, and professional designs that help brands stand out.",
        skills: [
            "Logo Design",
            "Brand Identity",
            "Graphic Design",
            "Social Media Design"
        ],
        gigs: [
            {
                title: "I will design a modern logo for your brand",
                price: "₦5,000",
                rating: "4.9"
            }
        ]
    },

    david: {
        name: "David",
        initials: "D",
        category: "Web Developer",
        location: "Nigeria",
        rating: "4.8",
        reviews: "19",
        description:
            "I am a student web developer who builds responsive and modern websites for businesses, brands, and individuals.",
        skills: [
            "React",
            "JavaScript",
            "HTML & CSS",
            "Responsive Web Design"
        ],
        gigs: [
            {
                title: "I will build a responsive website for your business",
                price: "₦25,000",
                rating: "4.8"
            },
            {
                title: "I will create a modern landing page",
                price: "₦15,000",
                rating: "4.9"
            }
        ]
    },

    peace: {
        name: "Peace",
        initials: "P",
        category: "Writer",
        location: "Nigeria",
        rating: "5.0",
        reviews: "34",
        description:
            "I am a student writer who creates clear, engaging, and professional content for websites, businesses, and social media.",
        skills: [
            "Content Writing",
            "SEO Writing",
            "Copywriting",
            "Proofreading"
        ],
        gigs: [
            {
                title: "I will write SEO optimized blog articles",
                price: "₦8,000",
                rating: "5.0"
            }
        ]
    },

    michael: {
        name: "Michael",
        initials: "M",
        category: "Video Editor",
        location: "Nigeria",
        rating: "4.9",
        reviews: "22",
        description:
            "I am a student video editor who creates engaging and professional videos for YouTube, TikTok, Instagram, and other platforms.",
        skills: [
            "Video Editing",
            "YouTube Editing",
            "TikTok Editing",
            "Short Form Content"
        ],
        gigs: [
            {
                title: "I will edit engaging videos for YouTube and TikTok",
                price: "₦12,000",
                rating: "4.9"
            }
        ]
    },

    blessing: {
        name: "Blessing",
        initials: "B",
        category: "Digital Marketer",
        location: "Nigeria",
        rating: "4.8",
        reviews: "17",
        description:
            "I help businesses improve their online presence through social media management and digital marketing strategies.",
        skills: [
            "Social Media Marketing",
            "Content Strategy",
            "Digital Marketing",
            "Social Media Management"
        ],
        gigs: [
            {
                title: "I will manage your social media marketing",
                price: "₦15,000",
                rating: "4.8"
            }
        ]
    }
};

function SellerProfile() {

    const { sellerName } = useParams();

    const seller = sellers[sellerName?.toLowerCase()];

    if (!seller) {
        return (
            <main className="seller-not-found">

                <h1>Seller not found</h1>

                <p>
                    We couldn't find the seller you're looking for.
                </p>

                <Link to="/browse-gigs">
                    Browse Gigs
                </Link>

            </main>
        );
    }

    return (
        <main className="seller-profile-page">

            <div className="seller-profile-top">

                <Link
                    to="/browse-gigs"
                    className="seller-back-button"
                >
                    <FiArrowLeft />
                    Back to Gigs
                </Link>

            </div>

            {/* PROFILE HEADER */}

            <section className="seller-profile-header">

                <div className="seller-profile-avatar">
                    {seller.initials}
                </div>

                <div className="seller-profile-info">

                    <div className="seller-name-row">

                        <h1>
                            {seller.name}
                        </h1>

                        <span className="seller-verified">
                            <FiCheck />
                            Verified Student
                        </span>

                    </div>

                    <h2>
                        {seller.category}
                    </h2>

                    <div className="seller-meta">

                        <span>
                            <FiMapPin />
                            {seller.location}
                        </span>

                        <span>
                            <FiStar />
                            {seller.rating}
                            ({seller.reviews} reviews)
                        </span>

                        <span>
                            <FiBriefcase />
                            Student Freelancer
                        </span>

                    </div>

                </div>

            </section>

            {/* PROFILE CONTENT */}

            <section className="seller-profile-content">

                <div className="seller-profile-main">

                    <div className="seller-about">

                        <h2>
                            About {seller.name}
                        </h2>

                        <p>
                            {seller.description}
                        </p>

                    </div>

                    <div className="seller-skills">

                        <h2>
                            Skills
                        </h2>

                        <div className="seller-skill-list">

                            {seller.skills.map((skill) => (

                                <span key={skill}>
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="seller-services">

                        <div className="seller-services-header">

                            <div>
                                <h2>
                                    Services by {seller.name}
                                </h2>

                                <p>
                                    Explore services offered by this seller.
                                </p>
                            </div>

                        </div>

                        <div className="seller-services-grid">

                            {seller.gigs.map((gig, index) => (

                                <article
                                    className="seller-service-card"
                                    key={index}
                                >

                                    <div className="seller-service-image">
                                        {seller.initials}
                                    </div>

                                    <div className="seller-service-body">

                                        <h3>
                                            {gig.title}
                                        </h3>

                                        <div className="seller-service-rating">

                                            <FiStar />

                                            <strong>
                                                {gig.rating}
                                            </strong>

                                        </div>

                                        <div className="seller-service-footer">

                                            <div>
                                                <small>
                                                    Starting at
                                                </small>

                                                <strong>
                                                    {gig.price}
                                                </strong>
                                            </div>

                                            <Link to="/gig-details">
                                                View
                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </div>

                {/* CONTACT CARD */}

                <aside className="seller-contact-card">

                    <h2>
                        Interested in working with {seller.name}?
                    </h2>

                    <p>
                        Contact this seller to discuss your project
                        requirements.
                    </p>

                    <button className="seller-contact-button">
                        Contact Seller
                    </button>

                </aside>

            </section>

        </main>
    );
}

export default SellerProfile;