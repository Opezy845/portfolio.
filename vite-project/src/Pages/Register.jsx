import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "freelancer",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword, role } = formData;

    // Check required fields
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get existing users
    const existingUsers =
      JSON.parse(localStorage.getItem("skillbridgeUsers")) || [];

    // Check if email already exists
    const userExists = existingUsers.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      setError("An account with this email already exists.");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      fullName,
      email,
      password,
      role,
      createdAt: new Date().toISOString(),
    };

    // Save user
    localStorage.setItem(
      "skillbridgeUsers",
      JSON.stringify([...existingUsers, newUser])
    );

    setSuccess("Account created successfully!");

    // Clear form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "freelancer",
    });

    // Go to login after a short delay
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Side */}
        <div className="register-info">
          <div className="register-logo">SkillBridge</div>

          <div className="register-info-content">
            <p className="register-small-title">JOIN SKILLBRIDGE</p>

            <h1>
              Turn your skills
              <br />
              into opportunities.
            </h1>

            <p>
              Create your account and connect with students, clients, and
              opportunities across Nigeria.
            </p>

            <div className="register-benefits">
              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Find Opportunities</h3>
                  <p>Discover freelance jobs that match your skills.</p>
                </div>
              </div>

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Build Your Profile</h3>
                  <p>Showcase your skills, services, and experience.</p>
                </div>
              </div>

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Grow Your Career</h3>
                  <p>Build your reputation and gain valuable experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="register-form-section">
          <div className="register-form-wrapper">
            <div className="register-heading">
              <p className="form-eyebrow">CREATE ACCOUNT</p>

              <h2>Get started with SkillBridge</h2>

              <p>
                Already have an account?{" "}
                <Link to="/login">Log in</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Role */}
              <div className="form-group">
                <label htmlFor="role">I want to</label>

                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="freelancer">Sell my skills</option>
                  <option value="client">Hire student talent</option>
                </select>
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              {/* Error */}
              {error && <div className="register-error">{error}</div>}

              {/* Success */}
              {success && (
                <div className="register-success">{success}</div>
              )}

              {/* Terms */}
              <div className="terms">
                <input type="checkbox" id="terms" required />

                <label htmlFor="terms">
                  I agree to the SkillBridge terms and conditions.
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="register-button">
                Create Account
              </button>
            </form>

            <div className="register-footer">
              <p>
                By creating an account, you agree to our terms and privacy
                policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;