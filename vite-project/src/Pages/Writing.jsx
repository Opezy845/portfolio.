import { Link } from "react-router-dom";
import { FiArrowRight, FiEdit3, FiStar } from "react-icons/fi";
import { writingGigs } from "../LIB/writing.js";


function Writing() {
    return (
        <main className="writing-page">

            {/* Header */}
            <section className="writing-header">

                <div className="writing-icon">
                    <FiEdit3 />
                </div>

                <div>
                    <h1>Writing</h1>

                    <p>
                        Find talented student writers who can create,
                        edit, and improve content for your project.
                    </p>
                </div>

            </section>


            {/* Results */}
            <section className="writing-results">

                <div className="writing-results-top">

                    <div>
                        <h2>Writing Services</h2>

                        <span>
                            {writingGigs.length} services available
                        </span>
                    </div>

                </div>


                {/* Gig Grid */}
                <div className="writing-grid">

                    {writingGigs.map((gig, index) => (

                        <article
                            className="writing-card"
                            key={index}
                        >

                            {/* Image placeholder */}
                            <div className="writing-image">
                                <FiEdit3 />
                            </div>


                            {/* Card body */}
                            <div className="writing-card-body">

                                <div className="writing-seller">

                                    <div className="writing-avatar">
                                        {gig.seller.charAt(0)}
                                    </div>

                                    <span>{gig.seller}</span>

                                    <small>✓</small>

                                </div>


                                <h3>
                                    {gig.title}
                                </h3>


                                <div className="writing-rating">

                                    <FiStar />

                                    <span>{gig.rating}</span>

                                </div>


                                <div className="writing-footer">

                                    <div>
                                        <small>Starting at</small>

                                        <strong>
                                            {gig.price}
                                        </strong>
                                    </div>


                                    <Link
                                        to="/gig-details"
                                        className="writing-arrow"
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

export default Writing;