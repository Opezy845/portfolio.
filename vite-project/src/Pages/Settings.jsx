import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiArrowLeft,
    FiBell,
    FiLock,
    FiChevronDown,
    FiLogOut,
    FiSave,
    FiUser
} from "react-icons/fi";
import "./Settings.css";

function Setting() {
    const navigate = useNavigate();

    // Profile is CLOSED by default
    const [profileOpen, setProfileOpen] = useState(false);

    const currentUser = JSON.parse(
        localStorage.getItem("skillbridgeCurrentUser")
    );

    const [fullName, setFullName] = useState(
        currentUser?.fullName || ""
    );

    const [email, setEmail] = useState(
        currentUser?.email || ""
    );

    const [notifications, setNotifications] = useState(true);

    const [success, setSuccess] = useState("");

    if (!currentUser) {
        return (
            <main className="settings-page">
                <div className="settings-container">
                    <section className="settings-card">
                        <h1>You are not logged in</h1>

                        <p>
                            Please log in to manage your account settings.
                        </p>

                        <Link
                            to="/login"
                            className="settings-button"
                        >
                            Go to Login
                        </Link>
                    </section>
                </div>
            </main>
        );
    }

    const handleSaveProfile = (e) => {
        e.preventDefault();

        const users =
            JSON.parse(
                localStorage.getItem("skillbridgeUsers")
            ) || [];

        const updatedUsers = users.map((user) => {
            if (user.id === currentUser.id) {
                return {
                    ...user,
                    fullName,
                    email
                };
            }

            return user;
        });

        const updatedUser = {
            ...currentUser,
            fullName,
            email
        };

        localStorage.setItem(
            "skillbridgeUsers",
            JSON.stringify(updatedUsers)
        );

        localStorage.setItem(
            "skillbridgeCurrentUser",
            JSON.stringify(updatedUser)
        );

        setSuccess("Your profile information has been saved.");

        setTimeout(() => {
            setSuccess("");
        }, 3000);
    };

    const handleLogout = () => {
        localStorage.removeItem("skillbridgeCurrentUser");
        navigate("/login");
    };

    return (
        <main className="settings-page">

            <div className="settings-container">

                {/* Back */}
                <Link
                    to="/dashboard"
                    className="settings-back"
                >
                    <FiArrowLeft />
                    Back to Dashboard
                </Link>

                {/* Header */}
                <div className="settings-header">

                    <span className="settings-label">
                        SKILLBRIDGE
                    </span>

                    <h1>Account Settings</h1>

                    <p>
                        Manage your account information and
                        notification preferences.
                    </p>

                </div>

                {/* Success Message */}
                {success && (
                    <div className="settings-success">
                        {success}
                    </div>
                )}

                {/* =========================
                    PROFILE INFORMATION
                ========================== */}
                <section className="settings-card profile-card">

                    {/* CLICKABLE HEADER */}
                    <button
                        type="button"
                        className="profile-toggle"
                        onClick={() =>
                            setProfileOpen(!profileOpen)
                        }
                    >

                        <div className="profile-toggle-left">

                            <div className="settings-icon">
                                <FiUser />
                            </div>

                            <div>
                                <h2>
                                    Profile Information
                                </h2>

                                <p>
                                    Update your SkillBridge account information.
                                </p>
                            </div>

                        </div>

                        <FiChevronDown
                            className={`profile-arrow ${
                                profileOpen
                                    ? "profile-arrow-open"
                                    : ""
                            }`}
                        />

                    </button>


                    {/* PROFILE FORM */}
                    {profileOpen && (
                        <div className="profile-content">

                            <form
                                className="settings-form"
                                onSubmit={handleSaveProfile}
                            >

                                <div className="settings-field">

                                    <label htmlFor="settings-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="settings-name"
                                        type="text"
                                        value={fullName}
                                        onChange={(e) =>
                                            setFullName(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>


                                <div className="settings-field">

                                    <label htmlFor="settings-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="settings-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="settings-button"
                                >
                                    <FiSave />
                                    Save Changes
                                </button>

                            </form>

                        </div>
                    )}

                </section>


                {/* =========================
                    NOTIFICATIONS
                ========================== */}
                <section className="settings-card">

                    <div className="settings-card-header">

                        <div className="settings-icon">
                            <FiBell />
                        </div>

                        <div>
                            <h2>Notifications</h2>

                            <p>
                                Choose whether you want to receive
                                SkillBridge notifications.
                            </p>
                        </div>

                    </div>


                    <div className="settings-option">

                        <div>

                            <strong>
                                Project Notifications
                            </strong>

                            <p>
                                Get notified when new opportunities
                                or messages are available.
                            </p>

                        </div>


                        <label className="settings-switch">

                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() =>
                                    setNotifications(
                                        !notifications
                                    )
                                }
                            />

                            <span></span>

                        </label>

                    </div>

                </section>


                {/* =========================
                    SECURITY
                ========================== */}
                <section className="settings-card">

                    <div className="settings-card-header">

                        <div className="settings-icon">
                            <FiLock />
                        </div>

                        <div>
                            <h2>Security</h2>

                            <p>
                                Manage your account security.
                            </p>
                        </div>

                    </div>


                    <button
                        type="button"
                        className="settings-secondary-button"
                        onClick={() =>
                            alert(
                                "Password change will be available soon."
                            )
                        }
                    >
                        Change Password
                    </button>

                </section>


                {/* =========================
                    LOGOUT
                ========================== */}
                <section className="settings-card settings-danger-card">

                    <div className="settings-card-header">

                        <div className="settings-danger-icon">
                            <FiLogOut />
                        </div>

                        <div>
                            <h2>Log Out</h2>

                            <p>
                                Log out of your current SkillBridge
                                account on this device.
                            </p>
                        </div>

                    </div>


                    <button
                        type="button"
                        className="settings-logout-button"
                        onClick={handleLogout}
                    >
                        <FiLogOut />
                        Log Out
                    </button>

                </section>

            </div>

        </main>
    );
}

export default Setting;

