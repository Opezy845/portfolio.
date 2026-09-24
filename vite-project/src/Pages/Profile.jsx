
import { FiEdit, FiMail, FiMapPin, FiBriefcase, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
function Profile() {
    const navigate = useNavigate();

    // Get the currently logged-in user
    const currentUser = JSON.parse(
        localStorage.getItem("skillbridgeCurrentUser")
    );

    // If nobody is logged in, send them to login
    if (!currentUser) {
        return (
            <main className="profile-page">
                <div className="profile-container">
                    <section className="profile-section">
                        <h2>You are not logged in</h2>

                        <p>
                            Please log in to view your profile.
                        </p>

                        <Link to="/login" className="profile-service-button">
                            Go to Login
                        </Link>
                    </section>
                </div>
            </main>
        );
    }

    const fullName = currentUser.fullName || "SkillBridge User";
    const email = currentUser.email || "No email";
    const role = currentUser.role || "freelancer";

    // Get first letter for avatar
    const avatarLetter = fullName.charAt(0).toUpperCase();

    // Display role nicely
    const displayRole =
        role === "client"
            ? "Client"
            : "Student Freelancer";

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("skillbridgeCurrentUser");
        navigate("/login");
    };

    return (
        <main className="profile-page">

            <div className="profile-container">

                {/* Back */}
                <Link to="/dashboard" className="profile-back">
                    ← Back to Dashboard
                </Link>

                {/* Profile Header */}
                <section className="profile-header">

                    <div className="profile-avatar">
                        {avatarLetter}
                    </div>

                    <div className="profile-info">

                        <h1>{fullName}</h1>

                        <p className="profile-role">
                            {displayRole}
                        </p>

                        <div className="profile-details">

                            <span>
                                <FiMail />
                                {email}
                            </span>

                            <span>
                                <FiMapPin />
                                Nigeria
                            </span>

                            <span>
                                <FiBriefcase />
                                {displayRole}
                            </span>

                        </div>

                    </div>

                    <button
                        className="profile-edit-button"
                        type="button"
                    >
                        <FiEdit />
                        Edit Profile
                    </button>

                </section>

                {/* About */}
                <section className="profile-section">

                    <h2>About Me</h2>

                    <p>
                        Tell clients about yourself, your skills,
                        your experience, and the type of work you
                        enjoy doing.
                    </p>

                </section>

                {/* Skills */}
                <section className="profile-section">

                    <h2>My Skills</h2>

                    <div className="profile-skills">

                        <span>Graphic Design</span>
                        <span>Web Development</span>
                        <span>Video Editing</span>
                        <span>Writing</span>

                    </div>

                </section>

                {/* Services */}
                <section className="profile-section">

                    <h2>My Services</h2>

                    <div className="profile-service-card">

                        <div>
                            <h3>Create your first service</h3>

                            <p>
                                Add a gig so clients can discover
                                your skills and hire you.
                            </p>
                        </div>

                        <Link
                            to="/browse-gigs"
                            className="profile-service-button"
                        >
                            Browse Gigs
                        </Link>

                    </div>

                </section>

                {/* Logout */}
                <section className="profile-section profile-logout-section">

                    <button
                        type="button"
                        className="profile-logout-button"
                        onClick={handleLogout}
                    >
                        <FiLogOut />
                        Logout
                    </button>

                </section>

            </div>

        </main>
    );
}

export default Profile;

