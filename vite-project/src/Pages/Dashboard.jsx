import {
    FiUser,
    FiBriefcase,
    FiHeart,
    FiMessageCircle,
    FiSettings,
    FiArrowRight,
    FiLogOut,
    FiDollarSign,
    FiFileText,
    FiBell,
    FiSearch,
    FiPlus,
    FiStar
} from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Dashboard.css";

function Dashboard() {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem(
            "skillbridgeCurrentUser"
        );

        if (!savedUser) {
            navigate("/login");
            return;
        }

        try {
            const user = JSON.parse(savedUser);
            setCurrentUser(user);
        } catch (error) {
            localStorage.removeItem(
                "skillbridgeCurrentUser"
            );

            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem(
            "skillbridgeCurrentUser"
        );

        navigate("/login");
    };

    if (!currentUser) {
        return null;
    }

    const isSeller =
        currentUser.role === "seller" ||
        currentUser.role === "freelancer";

    const isBuyer =
        currentUser.role === "buyer" ||
        currentUser.role === "client";

    return (
        <main className="dashboard-page">

            <section className="dashboard-container">

                {/* =========================
                    HEADER
                ========================== */}

                <div className="dashboard-header">

                    <div>

                        <span className="dashboard-label">
                            SkillBridge
                        </span>

                        <h1>
                            Welcome back,{" "}
                            {currentUser.fullName} 👋
                        </h1>

                        <p>
                            {isSeller
                                ? "Find opportunities, manage your gigs, and grow your freelance career."
                                : "Find talented students, post jobs, and manage your projects easily."}
                        </p>

                        <div className="dashboard-user-info">

                            <span>
                                {currentUser.email}
                            </span>

                            <span className="user-role">
                                {isSeller
                                    ? "Seller"
                                    : "Buyer"}
                            </span>

                        </div>

                    </div>


                    <div className="dashboard-header-actions">
                  <Link to="/" className="dashboard-home-button">
                Home
            </Link>
                        <Link
                            to="/profile"
                            className="dashboard-profile-button"
                        >
                            <FiUser />
                            View Profile
                        </Link>

                        <button
                            type="button"
                            className="dashboard-logout-button"
                            onClick={handleLogout}
                        >
                            <FiLogOut />
                            Logout
                        </button>

                    </div>

                </div>


                {/* ==================================================
                    SELLER DASHBOARD
                ================================================== */}

                {isSeller && (
                    <>

                        {/* Seller Stats */}

                        <div className="dashboard-stats">

                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiBriefcase />
                                </div>

                                <div>
                                    <span>Active Gigs</span>
                                    <strong>5</strong>
                                </div>

                            </div>


                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiMessageCircle />
                                </div>

                                <div>
                                    <span>Messages</span>
                                    <strong>12</strong>
                                </div>

                            </div>


                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiDollarSign />
                                </div>

                                <div>
                                    <span>Total Earnings</span>
                                    <strong>₦85k</strong>
                                </div>

                            </div>

                        </div>


                        {/* Seller Quick Actions */}

                        <div className="dashboard-card">

                            <div className="dashboard-card-header">

                                <div>

                                    <span className="card-icon">
                                        <FiBriefcase />
                                    </span>

                                    <h2>
                                        Quick Actions
                                    </h2>

                                </div>

                            </div>

                            <p>
                                Quickly manage your freelance work.
                            </p>

                            <div className="dashboard-quick-actions">

                                <Link
                                    to="/find-work"
                                    className="dashboard-action-button"
                                >
                                    <FiSearch />
                                    Find Work
                                </Link>

                                <Link
                                    to="/messages"
                                    className="dashboard-action-button"
                                >
                                    <FiMessageCircle />
                                    Messages
                                </Link>

                                <Link
                                    to="/profile"
                                    className="dashboard-action-button"
                                >
                                    <FiUser />
                                    My Profile
                                </Link>

                            </div>

                        </div>


                        {/* Seller Cards */}

                        <div className="dashboard-grid">

                            {/* My Gigs */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiBriefcase />
                                        </span>

                                        <h2>
                                            My Gigs
                                        </h2>

                                    </div>

                                    <Link to="/browse-gigs">
                                        View all
                                    </Link>

                                </div>

                                <p>
                                    Create and manage the services
                                    you offer to clients.
                                </p>

                                <Link
                                    to="/find-work"
                                    className="dashboard-card-button"
                                >
                                    Manage Gigs
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Applications */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiFileText />
                                        </span>

                                        <h2>
                                            Applications
                                        </h2>

                                    </div>

                                    <span className="message-count">
                                        4
                                    </span>

                                </div>

                                <p>
                                    Track the jobs you have applied
                                    for and manage your applications.
                                </p>

                                <Link
                                    to="/application"
                                    className="dashboard-card-button"
                                >
                                    View Applications
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Messages */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiMessageCircle />
                                        </span>

                                        <h2>
                                            Messages
                                        </h2>

                                    </div>

                                    <span className="message-count">
                                        12
                                    </span>

                                </div>

                                <p>
                                    Communicate with clients and
                                    manage your project conversations.
                                </p>

                                <Link
                                    to="/messages"
                                    className="dashboard-card-button"
                                >
                                    Open Messages
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Profile */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiUser />
                                        </span>

                                        <h2>
                                            My Profile
                                        </h2>

                                    </div>

                                </div>

                                <p>
                                    Update your profile and show
                                    clients what you can do.
                                </p>

                                <Link
                                    to="/profile"
                                    className="dashboard-card-button"
                                >
                                    Edit Profile
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Settings */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiSettings />
                                        </span>

                                        <h2>
                                            Settings
                                        </h2>

                                    </div>

                                </div>

                                <p>
                                    Manage your account preferences
                                    and SkillBridge settings.
                                </p>

                                <Link
                                    to="/settings"
                                    className="dashboard-card-button"
                                >
                                    Account Settings
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </div>

                    </>
                )}


                {/* ==================================================
                    BUYER DASHBOARD
                ================================================== */}

                {isBuyer && (
                    <>

                        {/* Buyer Stats */}

                        <div className="dashboard-stats">

                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiBriefcase />
                                </div>

                                <div>
                                    <span>Posted Jobs</span>
                                    <strong>3</strong>
                                </div>

                            </div>


                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiFileText />
                                </div>

                                <div>
                                    <span>Applications</span>
                                    <strong>8</strong>
                                </div>

                            </div>


                            <div className="dashboard-stat-card">

                                <div className="dashboard-stat-icon">
                                    <FiMessageCircle />
                                </div>

                                <div>
                                    <span>Messages</span>
                                    <strong>12</strong>
                                </div>

                            </div>

                        </div>


                        {/* =========================
                            BUYER QUICK ACTIONS
                        ========================== */}

                        <div className="dashboard-card buyer-action-card">

                            <div className="dashboard-card-header">

                                <div>

                                    <span className="card-icon">
                                        <FiPlus />
                                    </span>

                                    <h2>
                                        What do you need help with?
                                    </h2>

                                </div>

                            </div>

                            <p>
                                Post a job, find skilled students,
                                or manage your existing projects.
                            </p>


                            <div className="dashboard-quick-actions">

                                <Link
                                    to="/post-job"
                                    className="dashboard-action-button primary-action"
                                >
                                    <FiPlus />
                                    Post a Job
                                </Link>


                                <Link
                                    to="/browse-gigs"
                                    className="dashboard-action-button"
                                >
                                    <FiSearch />
                                    Find Talent
                                </Link>


                                <Link
                                    to="/messages"
                                    className="dashboard-action-button"
                                >
                                    <FiMessageCircle />
                                    Messages
                                </Link>

                            </div>

                        </div>


                        {/* =========================
                            NOTIFICATION
                        ========================== */}

                        <div className="dashboard-notification">

                            <div className="notification-icon">
                                <FiBell />
                            </div>

                            <div>

                                <strong>
                                    Your marketplace is ready
                                </strong>

                                <p>
                                    Post your first job and start
                                    receiving applications from
                                    talented students.
                                </p>

                            </div>

                            <Link
                                to="/post-job"
                                className="notification-button"
                            >
                                Post a Job
                                <FiArrowRight />
                            </Link>

                        </div>


                        {/* =========================
                            RECOMMENDED TALENT
                        ========================== */}

                        <div className="dashboard-section-title">

                            <div>
                                <span>
                                    SKILLBRIDGE
                                </span>

                                <h2>
                                    Recommended Talent
                                </h2>

                                <p>
                                    Students who may be a good fit
                                    for your next project.
                                </p>
                            </div>

                            <Link to="/browse-gigs">
                                View all
                                <FiArrowRight />
                            </Link>

                        </div>


                        <div className="talent-grid">

                            {/* Talent 1 */}

                            <div className="talent-card">

                                <div className="talent-avatar">
                                    <FiUser />
                                </div>

                                <div className="talent-info">

                                    <h3>
                                        Creative Designer
                                    </h3>

                                    <p>
                                        Graphic Design • UI/UX
                                    </p>

                                    <div className="talent-rating">

                                        <FiStar />

                                        <span>
                                            4.9
                                        </span>

                                        <small>
                                            (24 reviews)
                                        </small>

                                    </div>

                                </div>

                                <Link
                                    to="/browse-gigs"
                                    className="talent-button"
                                >
                                    View Profile
                                </Link>

                            </div>


                            {/* Talent 2 */}

                            <div className="talent-card">

                                <div className="talent-avatar">
                                    <FiUser />
                                </div>

                                <div className="talent-info">

                                    <h3>
                                        Web Developer
                                    </h3>

                                    <p>
                                        React • JavaScript
                                    </p>

                                    <div className="talent-rating">

                                        <FiStar />

                                        <span>
                                            4.8
                                        </span>

                                        <small>
                                            (18 reviews)
                                        </small>

                                    </div>

                                </div>

                                <Link
                                    to="/browse-gigs"
                                    className="talent-button"
                                >
                                    View Profile
                                </Link>

                            </div>


                            {/* Talent 3 */}

                            <div className="talent-card">

                                <div className="talent-avatar">
                                    <FiUser />
                                </div>

                                <div className="talent-info">

                                    <h3>
                                        Content Writer
                                    </h3>

                                    <p>
                                        Writing • Copywriting
                                    </p>

                                    <div className="talent-rating">

                                        <FiStar />

                                        <span>
                                            4.9
                                        </span>

                                        <small>
                                            (31 reviews)
                                        </small>

                                    </div>

                                </div>

                                <Link
                                    to="/browse-gigs"
                                    className="talent-button"
                                >
                                    View Profile
                                </Link>

                            </div>

                        </div>


                        {/* =========================
                            BUYER DASHBOARD CARDS
                        ========================== */}

                        <div className="dashboard-grid">

                            {/* My Jobs */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiBriefcase />
                                        </span>

                                        <h2>
                                            My Jobs
                                        </h2>

                                    </div>

                                    <span className="message-count">
                                        3
                                    </span>

                                </div>

                                <p>
                                    Manage your posted jobs and
                                    track your active projects.
                                </p>

                                <Link
                                    to="/application"
                                    className="dashboard-card-button"
                                >
                                    Manage Jobs
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Saved Gigs */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiHeart />
                                        </span>

                                        <h2>
                                            Saved Gigs
                                        </h2>

                                    </div>

                                    <span className="message-count">
                                        8
                                    </span>

                                </div>

                                <p>
                                    View services and talent you
                                    saved for later.
                                </p>

                                <Link
                                    to="/browse-gigs"
                                    className="dashboard-card-button"
                                >
                                    View Saved Gigs
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Messages */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiMessageCircle />
                                        </span>

                                        <h2>
                                            Messages
                                        </h2>

                                    </div>

                                    <span className="message-count">
                                        12
                                    </span>

                                </div>

                                <p>
                                    Talk with students about your
                                    projects and requirements.
                                </p>

                                <Link
                                    to="/messages"
                                    className="dashboard-card-button"
                                >
                                    Open Messages
                                    <FiArrowRight />
                                </Link>

                            </div>


                            {/* Settings */}

                            <div className="dashboard-card">

                                <div className="dashboard-card-header">

                                    <div>

                                        <span className="card-icon">
                                            <FiSettings />
                                        </span>

                                        <h2>
                                            Settings
                                        </h2>

                                    </div>

                                </div>

                                <p>
                                    Manage your account preferences
                                    and SkillBridge settings.
                                </p>

                                <Link
                                    to="/settings"
                                    className="dashboard-card-button"
                                >
                                    Account Settings
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </div>

                    </>
                )}

            </section>

        </main>
    );
}

export default Dashboard;