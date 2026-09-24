import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowRight
} from "react-icons/fi";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError("Please enter your email and password.");
            return;
        }

        const existingUsers =
            JSON.parse(localStorage.getItem("skillbridgeUsers")) || [];

        const user = existingUsers.find(
            (item) =>
                item.email.toLowerCase() ===
                    formData.email.toLowerCase() &&
                item.password === formData.password
        );

        if (!user) {
            setError("Incorrect email or password.");
            return;
        }

        localStorage.setItem(
            "skillbridgeCurrentUser",
            JSON.stringify(user)
        );

        navigate("/dashboard");
    };

    return (
        <main className="login-page">

            <div className="login-container">

                <div className="login-card">

                    <div className="login-header">

                        <Link to="/" className="login-logo">
                            Skill<span>Bridge</span>
                        </Link>

                        <h1>Welcome back</h1>

                        <p>
                            Login to your SkillBridge account
                            and continue your journey.
                        </p>

                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <form
                        className="login-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="login-field">

                            <label htmlFor="login-email">
                                Email Address
                            </label>

                            <div className="login-input">

                                <FiMail />

                                <input
                                    id="login-email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="login-field">

                            <div className="login-password-label">

                                <label htmlFor="login-password">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="forgot-password"
                                    onClick={() =>
                                        setError(
                                            "Password reset will be available soon."
                                        )
                                    }
                                >
                                    Forgot password?
                                </button>

                            </div>

                            <div className="login-input">

                                <FiLock />

                                <input
                                    id="login-password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </button>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login
                            <FiArrowRight />
                        </button>

                    </form>

                    <div className="login-footer">

                        <p>
                            Don't have an account?
                            <Link to="/register">
                                Create an account
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Login;