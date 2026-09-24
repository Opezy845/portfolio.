import {
    FiMail,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
    FiArrowRight
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">
                    <h2>SkillBridge</h2>

                    <p>
                        Nigeria's student talent marketplace connecting
                        students with real opportunities.
                    </p>

                    <div className="footer-socials">
                        <button>
                            <FiInstagram />
                        </button>

                        <button>
                            <FiTwitter />
                        </button>

                        <button>
                            <FiLinkedin />
                        </button>

                        <button>
                            <FiMail />
                        </button>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Marketplace</h3>

                    <a href="#">Browse Gigs</a>
                    <a href="#">Categories</a>
                    <a href="#">Find Talent</a>
                    <a href="#">Become a Seller</a>
                </div>

                <div className="footer-column">
                    <h3>Resources</h3>

                    <a href="#">How It Works</a>
                    <a href="#">AI Tools</a>
                    <a href="#">Student Guide</a>
                    <a href="#">Help Center</a>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>

                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 SkillBridge. All rights reserved.
                </p>

                <button>
                    Get Started
                    <FiArrowRight />
                </button>
            </div>

        </footer>
    );
}

export default Footer;