import { Link } from "react-router-dom";
import { FiArrowRight, FiVideo, FiStar } from "react-icons/fi";

const videoGigs = [
    {
        title: "I will edit professional TikTok and YouTube videos",
        seller: "Michael",
        price: "₦12,000",
        rating: "4.9",
    },
    {
        title: "I will edit short form videos for social media",
        seller: "Daniel",
        price: "₦10,000",
        rating: "4.8",
    },
    {
        title: "I will create engaging YouTube video edits",
        seller: "Joshua",
        price: "₦15,000",
        rating: "5.0",
    },
    {
        title: "I will edit your Reels and TikTok videos",
        seller: "Favour",
        price: "₦8,000",
        rating: "4.9",
    },
    {
        title: "I will create professional promotional videos",
        seller: "Samuel",
        price: "₦20,000",
        rating: "4.8",
    },
    {
        title: "I will add subtitles and captions to your videos",
        seller: "Emmanuel",
        price: "₦7,000",
        rating: "4.9",
    },
];

function Video() {
    return (
        <main className="video-page">

            {/* Header */}
            <section className="video-header">

                <div className="video-icon">
                    <FiVideo />
                </div>

                <div>
                    <h1>Video</h1>

                    <p>
                        Find talented student video editors who can
                        turn your ideas and footage into engaging content.
                    </p>
                </div>

            </section>


            {/* Results */}
            <section className="video-results">

                <div className="video-results-top">

                    <div>
                        <h2>Video Services</h2>

                        <span>
                            {videoGigs.length} services available
                        </span>
                    </div>

                </div>


                {/* Gig Grid */}
                <div className="video-grid">

                    {videoGigs.map((gig, index) => (

                        <article
                            className="video-card"
                            key={index}
                        >

                            {/* Image placeholder */}
                            <div className="video-image">
                                <FiVideo />
                            </div>


                            {/* Card body */}
                            <div className="video-card-body">

                                <div className="video-seller">

                                    <div className="video-avatar">
                                        {gig.seller.charAt(0)}
                                    </div>

                                    <span>{gig.seller}</span>

                                    <small>✓</small>

                                </div>


                                <h3>
                                    {gig.title}
                                </h3>


                                <div className="video-rating">

                                    <FiStar />

                                    <span>{gig.rating}</span>

                                </div>


                                <div className="video-footer">

                                    <div>
                                        <small>Starting at</small>

                                        <strong>
                                            {gig.price}
                                        </strong>
                                    </div>


                                    <Link
                                        to="/gig-details"
                                        className="video-arrow"
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

export default Video;