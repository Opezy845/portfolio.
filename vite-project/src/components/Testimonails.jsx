import { FiStar, FiCheckCircle } from "react-icons/fi";

const testimonials = [
    {
        name: "Tolu Martins",
        role: "Graphic Designer",
        text: "SkillBridge helped me find clients and build a portfolio while still in school.",
        rating: 5
    },
    {
        name: "Chiamaka N.",
        role: "Web Developer",
        text: "I was able to turn my development skills into real projects and income.",
        rating: 5
    },
    {
        name: "Aisha Yusuf",
        role: "Content Writer",
        text: "The platform makes it easy to showcase my skills and connect with clients.",
        rating: 5
    }
];

function Testimonials() {
    return (
        <section className="testimonials-section">

            <div className="testimonials-header">
                <div>
                    <span className="section-label">
                        Our community
                    </span>

                    <h2>Trusted by Students & Clients</h2>

                    <p>
                        See what students and clients are saying about
                        their SkillBridge experience.
                    </p>
                </div>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <article className="testimonial-card" key={index}>

                        <div className="testimonial-top">
                            <div className="testimonial-avatar">
                                {testimonial.name.charAt(0)}
                            </div>

                            <div>
                                <h3>{testimonial.name}</h3>

                                <span>{testimonial.role}</span>
                            </div>

                            <FiCheckCircle className="testimonial-check" />
                        </div>

                        <p className="testimonial-text">
                            “{testimonial.text}”
                        </p>

                        <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FiStar key={i} />
                            ))}
                        </div>

                    </article>
                ))}
            </div>

        </section>
    );
}

export default Testimonials;