import { useState } from "react";
import { FiSearch, FiArrowRight, FiCheck, FiStar } from "react-icons/fi";
import boyImage from "../assets/boy.jpg";
import girlImage from "../assets/girl.jpg";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        navigate(
            `/browse-gigs?search=${encodeURIComponent(searchQuery.trim())}`
        );
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-label">
                    <span>🇳🇬</span>
                    Nigeria's student talent marketplace
                </div>

                <h1>
                    Show Your Skills.
                    <span>Earn Real Income.</span>
                </h1>

                <p className="hero-description">
                    Find freelance jobs, build your portfolio, and grow your
                    career with AI-powered tools.
                </p>

                <form className="hero-search" onSubmit={handleSearch}>
    <FiSearch className="search-icon" />

    <input
        type="text"
        placeholder="What service are you looking for?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />

    <div className="Country">
        <select>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="South Africa">South Africa</option>
        </select>
    </div>

    <button type="submit">
        Search
    </button>
</form>

                <div className="popular-searches">
                    <span>Popular:</span>
                    <Link to="/service/development">Development</Link>
                    <Link to="/service/writing">Writing</Link>
                    <Link to="/service/marketing">Marketing</Link>
                    <Link to="/service/video">Video</Link> 
                </div>

  <div className="hero-buttons">

    <Link to="/register" className="primary-button">
        Start Selling Your Skills
        <FiArrowRight />
    </Link>

    <Link to="/browse-gigs" className="secondary-btn">
        Find Top Student Talent
    </Link>

</div>
                <div className="hero-trust">
                    <div>
                        <FiCheck />
                        <span>Secure Payments</span>
                    </div>

                    <div>
                        <FiCheck />
                        <span>Verified Students</span>
                    </div>

                    <div>
                        <FiCheck />
                        <span>24/7 Support</span>
                    </div>

                    <div>
                        <FiCheck />
                        <span>Safe & Trusted</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-decoration decoration-one"></div>
                <div className="hero-decoration decoration-two"></div>
                <div className="hero-decoration decoration-three"></div>

                <div className="hero-circle">
                    <img src= {boyImage} alt="Student freelancer" />
                </div>

                <div className="hero-spark spark-one">✦</div>
                <div className="hero-spark spark-two">✦</div>
                <div className="hero-spark spark-three">✦</div>

                <div className="match-card">
                    <div className="match-card-top">
                        <span>AI Match</span>
                        <span className="match-icon">✓</span>
                    </div>

                    <strong>95%</strong>

                    <small>Great Match</small>

                    <div className="match-progress">
                        <span></span>
                    </div>
                </div>

                <div className="income-card">
                    <div className="income-icon">₦</div>
                    <div>
                        <small>This month</small>
                        <strong>₦850,000</strong>
                    </div>
                </div>

                <div className="student-bubble">
                    <img src = {girlImage} alt="Student" />
                </div>
            </div>
            
        </section>
    );
}


export default Hero;